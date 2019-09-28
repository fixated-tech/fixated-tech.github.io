var app = new Vue({
    el: '#app',
    data: {
        fixMessages: [{
            text: ''
        }]
    },
    computed: {
        formattedFix: function() {
            return formattedFix(this.fixMessages);
        }
    },
    methods: {
        addMessage: function(afterIndex) {
            let item = {
                text: ''
            };
            this.fixMessages.splice(afterIndex + 1, 0, item);
        },
        duplicateMessage: function(afterIndex) {
            let item = {
                text: this.fixMessages[afterIndex].text
            };
            this.fixMessages.splice(afterIndex + 1, 0, item);
        },
        removeMessage: function(index) {
            if (this.fixMessages.length > 1) {
                this.fixMessages.splice(index, 1);
            } else {
                this.fixMessages[0].text = '';
            }
        }
    }
});

function formattedFix(fixMessages) {
    console.log(fixMessages);
    let fixMessageFields = fixMessages.map(splitRawFix);
    let allFields = new Set();
    let popularity = {};
    fixMessageFields.forEach(fields => {
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
    console.log(popularity);
    let fieldKeys = Array.from(allFields);
    fieldKeys.sort();
    let result = [];
    fieldKeys.forEach(i => {
        if (popularity[i]) {
            let valuePopularities = Object.keys(popularity[i]);
            let singleValue = (valuePopularities.length == 1);
            valuePopularities.forEach(valuePopularity => {
                if (fixMessages.length == 1) {
                    popularity[i][valuePopularity] = -1;
                } else if (singleValue) {
                    popularity[i][valuePopularity] = 4;
                } else if (popularity[i][valuePopularity] == fixMessages.length - 1) {
                    popularity[i][valuePopularity] = 3;
                } else if (popularity[i][valuePopularity] > 1) {
                    popularity[i][valuePopularity] = 2;
                } else {
                    popularity[i][valuePopularity] = 1;
                }
            });
        }
        result.push({
            number: i,
            name: fields_by_tag[i],
            annotatedValues: fixMessageFields.map((fields, messageIndex) => {
                let allEmpty = fixMessages[messageIndex].text.trim().length == 0;
                let annotatedValues = {
                    values: []
                };
                fields.forEach(field => {
                    if (field[0] == i) {
                        annotatedValues.values.push(field[1]);
                    }
                });
                let valuePopularity = JSON.stringify(annotatedValues.values);
                annotatedValues.popularity = popularity[i][valuePopularity] ? popularity[i][valuePopularity] : (allEmpty ? -1 : 0);                
                return annotatedValues;
            })
        });
    });
    return result;
}

function splitRawFix(rawFix) {
    let rawFields = rawFix.text.split(/(?:^A|[\|\x01\n])/g);
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