let ALL_SEPARATORS_REGEX = /(?:\^A|[\|\x01\n])/g;

var app = new Vue({
    el: '#app',
    data: {
        fixMessages: [{
            text: ''
        }],
        fieldsByTag: {},
        fixEnums: {},
        replacementSeparator: "0"
    },
    computed: {
        formattedFix: function () {
            return formattedFix(this.fixMessages, this.fieldsByTag, this.fixEnums);
        }
    },
    methods: {
        addMessage: function (afterIndex, text) {
            let item = {
                text: text ? text : ''
            };
            this.fixMessages.splice(afterIndex + 1, 0, item);
        },
        duplicateMessage: function (afterIndex) {
            let item = {
                text: this.fixMessages[afterIndex].text
            };
            this.fixMessages.splice(afterIndex + 1, 0, item);
        },
        removeMessage: function (index) {
            if (this.fixMessages.length > 1) {
                this.fixMessages.splice(index, 1);
            } else {
                this.fixMessages[0].text = '';
            }
        },
        replaceSeparators: function (index) {
            let newSeparator = '|';
            switch (this.replacementSeparator) {
                case "1":
                    newSeparator = '^A';
                    break;
                case "2":
                    newSeparator = '\x01';
                    break;
                case "3":
                    newSeparator = '\n';
                    break;
                default:
                    newSeparator = '|';
                    break;
            }
            console.log(this.fixMessages[index].text);
            this.fixMessages[index].text = this.fixMessages[index].text.replace(ALL_SEPARATORS_REGEX, newSeparator);
            console.log(this.fixMessages[index].text.replace(ALL_SEPARATORS_REGEX, newSeparator));
        },
        onPaste: function (e, fixMessageIndex) {
            if (this.fixMessages[fixMessageIndex].text.length > 0)
                return true;
            let clipboardData = e.clipboardData || window.clipboardData;
            let pastedData = clipboardData.getData('Text');
            let messages = asMultipleMessages(pastedData).map(function (text) {
                return text.trim();
            }).filter(function (text) {
                return text.length > 0;
            });
            if (messages.length > 1) {
                e.stopPropagation();
                e.preventDefault();
                this.fixMessages[fixMessageIndex].text = messages[0];
                for (let i = 1; i < messages.length; i++) {
                    this.addMessage(++fixMessageIndex, messages[i]);
                }
                return false;
            } else {
                return true;
            }
        }
    }
});

function formattedFix(fixMessages, fieldsByTag, fixEnums) {
    let fixMessageFields = fixMessages.map(splitRawFix);
    let allFields = new Set();
    let popularity = {};
    fixMessageFields.forEach(function (fields) {
        let fieldValues = {};
        fields.forEach(field => {
            let fieldTag = field[0];
            allFields.add(fieldTag);
            fieldValues[fieldTag] = fieldValues[fieldTag] || [];
            fieldValues[fieldTag].push(field[1]);
        });
        Object.keys(fieldValues).forEach(fieldTag => {
            popularity[fieldTag] = popularity[fieldTag] || {};
            let fieldValue = JSON.stringify(fieldValues[fieldTag]);
            popularity[fieldTag][fieldValue] = (popularity[fieldTag][fieldValue] || 0) + 1;
        });
    });
    let fieldKeys = Array.from(allFields);
    fieldKeys.sort();
    let result = [];
    fieldKeys.forEach(i => {
        if (popularity[i]) {
            let valuePopularities = Object.keys(popularity[i]);
            let singleValue = (valuePopularities.length == 1);
            valuePopularities.forEach(function (valuePopularity) {
                let pop = popularity[i][valuePopularity];
                if (fixMessages.length == 1) {
                    popularity[i][valuePopularity] = -1;
                } else if (singleValue) {
                    popularity[i][valuePopularity] = 4;
                } else if ((pop == fixMessages.length - 1 && (pop > 1))) {
                    popularity[i][valuePopularity] = 3;
                } else if (pop > 1) {
                    popularity[i][valuePopularity] = 2;
                } else {
                    popularity[i][valuePopularity] = 1;
                }
            });
        }
        result.push({
            number: i,
            name: fieldsByTag[i] || '<Custom>',
            annotatedValues: fixMessageFields.map((fields, messageIndex) => {
                let allEmpty = fixMessages[messageIndex].text.trim().length == 0;
                let annotatedValues = {
                    values: []
                };
                let values = [];
                fields.forEach(function (field) {
                    if (field[0] == i) {
                        values.push(field[1]);
                        annotatedValues.values.push(
                            (i in fixEnums) ? `${fixEnums[i][field[1]] || '<Custom>'} (${field[1]})` : field[1]
                        );
                    }
                });
                let valuePopularity = JSON.stringify(values);
                annotatedValues.popularity = popularity[i][valuePopularity] ? popularity[i][valuePopularity] : (allEmpty ? -1 : 0);
                return annotatedValues;
            })
        });
    });
    return result;
}

function asMultipleMessages(rawFix) {
    let newLineIndex = rawFix.indexOf('\n');
    if (rawFix.search(/(?:^A|[\|\x01])/) != -1 && newLineIndex != -1 && newLineIndex != rawFix.length - 1) {
        return rawFix.split('\n')
    } else {
        return [rawFix];
    }
}

function splitRawFix(rawFix) {
    let rawFields = rawFix.text.split(ALL_SEPARATORS_REGEX);
    return rawFields.map(splitRawField)
}

function splitRawField(rawField) {
    splitParts = rawField.match(/.*?(\d+)=(.*)$/);
    if (splitParts) {
        return [Number.parseInt(splitParts[1]), splitParts[2]]
    } else {
        return [-1, rawField];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});
