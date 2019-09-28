

var fields_by_tag = {1:"Account",2:"AdvId",3:"AdvRefID",4:"AdvSide",5:"AdvTransType",6:"AvgPx",7:"BeginSeqNo",8:"BeginString",9:"BodyLength",10:"CheckSum",11:"ClOrdID",12:"Commission",13:"CommType",14:"CumQty",15:"Currency",16:"EndSeqNo",17:"ExecID",18:"ExecInst",19:"ExecRefID",20:"ExecTransType",21:"HandlInst",22:"SecurityIDSource",23:"IOIID",24:"IOIOthSvc__",25:"IOIQltyInd",26:"IOIRefID",27:"IOIQty",28:"IOITransType",29:"LastCapacity",30:"LastMkt",31:"LastPx",32:"LastQty",33:"NoLinesOfText",34:"MsgSeqNum",35:"MsgType",36:"NewSeqNo",37:"OrderID",38:"OrderQty",39:"OrdStatus",40:"OrdType",41:"OrigClOrdID",42:"OrigTime",43:"PossDupFlag",44:"Price",45:"RefSeqNum",46:"RelatdSym",47:"Rule80A",48:"SecurityID",49:"SenderCompID",50:"SenderSubID",51:"SendingDate__",52:"SendingTime",53:"Quantity",54:"Side",55:"Symbol",56:"TargetCompID",57:"TargetSubID",58:"Text",59:"TimeInForce",60:"TransactTime",61:"Urgency",62:"ValidUntilTime",63:"SettlType",64:"SettlDate",65:"SymbolSfx",66:"ListID",67:"ListSeqNo",68:"TotNoOrders",69:"ListExecInst",70:"AllocID",71:"AllocTransType",72:"RefAllocID",73:"NoOrders",74:"AvgPxPrecision",75:"TradeDate",76:"ExecBroker",77:"PositionEffect",78:"NoAllocs",79:"AllocAccount",80:"AllocQty",81:"ProcessCode",82:"NoRpts",83:"RptSeq",84:"CxlQty",85:"NoDlvyInst",86:"DlvyInst",87:"AllocStatus",88:"AllocRejCode",89:"Signature",90:"SecureDataLen",91:"SecureData",92:"BrokerOfCredit",93:"SignatureLength",94:"EmailType",95:"RawDataLength",96:"RawData",97:"PossResend",98:"EncryptMethod",99:"StopPx",100:"ExDestination",101:"(Not defined)",102:"CxlRejReason",103:"OrdRejReason",104:"IOIQualifier",105:"WaveNo",106:"Issuer",107:"SecurityDesc",108:"HeartBtInt",109:"ClientID",110:"MinQty",111:"MaxFloor",112:"TestReqID",113:"ReportToExch",114:"LocateReqd",115:"OnBehalfOfCompID",116:"OnBehalfOfSubID",117:"QuoteID",118:"NetMoney",119:"SettlCurrAmt",120:"SettlCurrency",121:"ForexReq",122:"OrigSendingTime",123:"GapFillFlag",124:"NoExecs",125:"CxlType",126:"ExpireTime",127:"DKReason",128:"DeliverToCompID",129:"DeliverToSubID",130:"IOINaturalFlag",131:"QuoteReqID",132:"BidPx",133:"OfferPx",134:"BidSize",135:"OfferSize",136:"NoMiscFees",137:"MiscFeeAmt",138:"MiscFeeCurr",139:"MiscFeeType",140:"PrevClosePx",141:"ResetSeqNumFlag",142:"SenderLocationID",143:"TargetLocationID",144:"OnBehalfOfLocationID",145:"DeliverToLocationID",146:"NoRelatedSym",147:"Subject",148:"Headline",149:"URLLink",150:"ExecType",151:"LeavesQty",152:"CashOrderQty",153:"AllocAvgPx",154:"AllocNetMoney",155:"SettlCurrFxRate",156:"SettlCurrFxRateCalc",157:"NumDaysInterest",158:"AccruedInterestRate",159:"AccruedInterestAmt",160:"SettlInstMode",161:"AllocText",162:"SettlInstID",163:"SettlInstTransType",164:"EmailThreadID",165:"SettlInstSource",166:"SettlLocation",167:"SecurityType",168:"EffectiveTime",169:"StandInstDbType",170:"StandInstDbName",171:"StandInstDbID",172:"SettlDeliveryType",173:"SettlInstCode_",176:"SecuritySettlAgentName",177:"SecuritySettlAgentCode",178:"SecuritySettlAgentAcctNum",179:"SecuritySettlAgentAcctName",180:"SecuritySettlAgentContactName",181:"SecuritySettlAgentContactPhone",182:"CashSettlAgentName",183:"CashSettlAgentCode",184:"CashSettlAgentAcctNum",185:"CashSettlAgentAcctName",186:"CashSettlAgentContactName",187:"CashSettlAgentContactPhone",188:"BidSpotRate",189:"BidForwardPoints",190:"OfferSpotRate",191:"OfferForwardPoints",192:"OrderQty2",193:"SettlDate2",194:"LastSpotRate",195:"LastForwardPoints",196:"AllocLinkID",197:"AllocLinkType",198:"SecondaryOrderID",199:"NoIOIQualifiers",200:"MaturityMonthYear",201:"PutOrCall",202:"StrikePrice",203:"CoveredOrUncovered",204:"CustomerOrFirm",205:"MaturityDay",206:"OptAttribute",207:"SecurityExchange",208:"NotifyBrokerOfCredit",209:"AllocHandlInst",210:"MaxShow",211:"PegOffsetValue",212:"XmlDataLen",213:"XmlData",214:"SettlInstRefID",215:"NoRoutingIDs",216:"RoutingType",217:"RoutingID",218:"Spread",219:"Benchmark",220:"BenchmarkCurveCurrency",221:"BenchmarkCurveName",222:"BenchmarkCurvePoint",223:"CouponRate",224:"CouponPaymentDate",225:"IssueDate",226:"RepurchaseTerm",227:"RepurchaseRate",228:"Factor",229:"TradeOriginationDate",230:"ExDate",231:"ContractMultiplier",232:"NoStipulations",233:"StipulationType",234:"StipulationValue",235:"YieldType",236:"Yield",237:"TotalTakedown",238:"Concession",239:"RepoCollateralSecurityType",240:"RedemptionDate",241:"UnderlyingCouponPaymentDate",242:"UnderlyingIssueDate",243:"UnderlyingRepoCollateral",244:"UnderlyingRepurchaseTerm",245:"UnderlyingRepurchaseRate",246:"UnderlyingFactor",247:"UnderlyingRedemptionDate",248:"LegCouponPaymentDate",249:"LegIssueDate",250:"LegRepoCollateralSecurityType",251:"LegRepurchaseTerm",252:"LegRepurchaseRate",253:"LegFactor",254:"LegRedemptionDate",255:"CreditRating",256:"UnderlyingCreditRating",257:"LegCreditRating",258:"TradedFlatSwitch",259:"BasisFeatureDate",260:"BasisFeaturePrice",261:"(Not defined)",262:"MDReqID",263:"SubscriptionRequestType",264:"MarketDepth",265:"MDUpdateType",266:"AggregatedBook",267:"NoMDEntryTypes",268:"NoMDEntries",269:"MDEntryType",270:"MDEntryPx",271:"MDEntrySize",272:"MDEntryDate",273:"MDEntryTime",274:"TickDirection",275:"MDMkt",276:"QuoteCondition",277:"TradeCondition",278:"MDEntryID",279:"MDUpdateAction",280:"MDEntryRefID",281:"MDReqRejReason",282:"MDEntryOriginator",283:"LocationID",284:"DeskID",285:"DeleteReason",286:"OpenCloseSettlFlag",287:"SellerDays",288:"MDEntryBuyer",289:"MDEntrySeller",290:"MDEntryPositionNo",291:"FinancialStatus",292:"CorporateAction",293:"DefBidSize",294:"DefOfferSize",295:"NoQuoteEntries",296:"NoQuoteSets",297:"QuoteStatus",298:"QuoteCancelType",299:"QuoteEntryID",300:"QuoteRejectReason",301:"QuoteResponseLevel",302:"QuoteSetID",303:"QuoteRequestType",304:"TotNoQuoteEntries",305:"UnderlyingSecurityIDSource",306:"UnderlyingIssuer",307:"UnderlyingSecurityDesc",308:"UnderlyingSecurityExchange",309:"UnderlyingSecurityID",310:"UnderlyingSecurityType",311:"UnderlyingSymbol",312:"UnderlyingSymbolSfx",313:"UnderlyingMaturityMonthYear",314:"UnderlyingMaturityDay",315:"UnderlyingPutOrCall",316:"UnderlyingStrikePrice",317:"UnderlyingOptAttribute",318:"UnderlyingCurrency",319:"RatioQty",320:"SecurityReqID",321:"SecurityRequestType",322:"SecurityResponseID",323:"SecurityResponseType",324:"SecurityStatusReqID",325:"UnsolicitedIndicator",326:"SecurityTradingStatus",327:"HaltReason",328:"InViewOfCommon",329:"DueToRelated",330:"BuyVolume",331:"SellVolume",332:"HighPx",333:"LowPx",334:"Adjustment",335:"TradSesReqID",336:"TradingSessionID",337:"ContraTrader",338:"TradSesMethod",339:"TradSesMode",340:"TradSesStatus",341:"TradSesStartTime",342:"TradSesOpenTime",343:"TradSesPreCloseTime",344:"TradSesCloseTime",345:"TradSesEndTime",346:"NumberOfOrders",347:"MessageEncoding",348:"EncodedIssuerLen",349:"EncodedIssuer",350:"EncodedSecurityDescLen",351:"EncodedSecurityDesc",352:"EncodedListExecInstLen",353:"EncodedListExecInst",354:"EncodedTextLen",355:"EncodedText",356:"EncodedSubjectLen",357:"EncodedSubject",358:"EncodedHeadlineLen",359:"EncodedHeadline",360:"EncodedAllocTextLen",361:"EncodedAllocText",362:"EncodedUnderlyingIssuerLen",363:"EncodedUnderlyingIssuer",364:"EncodedUnderlyingSecurity",365:"EncodedUnderlyingSecurity",366:"AllocPrice",367:"QuoteSetValidUntilTime",368:"QuoteEntryRejectReason",369:"LastMsgSeqNumProcessed",370:"OnBehalfOfSendingTime",371:"RefTagID",372:"RefMsgType",373:"SessionRejectReason",374:"BidRequestTransType",375:"ContraBroker",376:"ComplianceID",377:"SolicitedFlag",378:"ExecRestatementReason",379:"BusinessRejectRefID",380:"BusinessRejectReason",381:"GrossTradeAmt",382:"NoContraBrokers",383:"MaxMessageSize",384:"NoMsgTypes",385:"MsgDirection",386:"NoTradingSessions",387:"TotalVolumeTraded",388:"DiscretionInst",389:"DiscretionOffsetValue",390:"BidID",391:"ClientBidID",392:"ListName",393:"TotNoRelatedSym",394:"BidType",395:"NumTickets",396:"SideValue1",397:"SideValue2",398:"NoBidDescriptors",399:"BidDescriptorType",400:"BidDescriptor",401:"SideValueInd",402:"LiquidityPctLow",403:"LiquidityPctHigh",404:"LiquidityValue",405:"EFPTrackingError",406:"FairValue",407:"OutsideIndexPct",408:"ValueOfFutures",409:"LiquidityIndType",410:"WtAverageLiquidity",411:"ExchangeForPhysical",412:"OutMainCntryUIndex",413:"CrossPercent",414:"ProgRptReqs",415:"ProgPeriodInterval",416:"IncTaxInd",417:"NumBidders",418:"BidTradeType",419:"BasisPxType",420:"NoBidComponents",421:"Country",422:"TotNoStrikes",423:"PriceType",424:"DayOrderQty",425:"DayCumQty",426:"DayAvgPx",427:"GTBookingInst",428:"NoStrikes",429:"ListStatusType",430:"NetGrossInd",431:"ListOrderStatus",432:"ExpireDate",433:"ListExecInstType",434:"CxlRejResponseTo",435:"UnderlyingCouponRate",436:"UnderlyingContractMultiplier",437:"ContraTradeQty",438:"ContraTradeTime",439:"ClearingFirm",440:"ClearingAccount",441:"LiquidityNumSecurities",442:"MultiLegReportingType",443:"StrikeTime",444:"ListStatusText",445:"EncodedListStatusTextLen",446:"EncodedListStatusText",447:"PartyIDSource",448:"PartyID",449:"TotalVolumeTradedDate",450:"TotalVolumeTraded_Time",451:"NetChgPrevDay",452:"PartyRole",453:"NoPartyIDs",454:"NoSecurityAltID",455:"SecurityAltID",456:"SecurityAltIDSource",457:"NoUnderlyingSecurityAltID",458:"UnderlyingSecurityAltID",459:"UnderlyingSecurityAltIDSource",460:"Product",461:"CFICode",462:"UnderlyingProduct",463:"UnderlyingCFICode",464:"TestMessageIndicator",465:"QuantityType",466:"BookingRefID",467:"IndividualAllocID",468:"RoundingDirection",469:"RoundingModulus",470:"CountryOfIssue",471:"StateOrProvinceOfIssue",472:"LocaleOfIssue",473:"NoRegistDtls",474:"MailingDtls",475:"InvestorCountryOfResidence",476:"PaymentRef",477:"DistribPaymentMethod",478:"CashDistribCurr",479:"CommCurrency",480:"CancellationRights",481:"MoneyLaunderingStatus",482:"MailingInst",483:"TransBkdTime",484:"ExecPriceType",485:"ExecPriceAdjustment",486:"DateOfBirth",487:"TradeReportTransType",488:"CardHolderName",489:"CardNumber",490:"CardExpDate",491:"CardIssNum",492:"PaymentMethod",493:"RegistAcctType",494:"Designation",495:"TaxAdvantageType",496:"RegistRejReasonText",497:"FundRenewWaiv",498:"CashDistribAgentName",499:"CashDistribAgentCode",500:"CashDistribAgentAcctNumber",501:"CashDistribPayRef",502:"CashDistribAgentAcctName",503:"CardStartDate",504:"PaymentDate",505:"PaymentRemitterID",506:"RegistStatus",507:"RegistRejReasonCode",508:"RegistRefID",509:"RegistDtls",510:"NoDistribInsts",511:"RegistEmail",512:"DistribPercentage",513:"RegistID",514:"RegistTransType",515:"ExecValuationPoint",516:"OrderPercent",517:"OwnershipType",518:"NoContAmts",519:"ContAmtType",520:"ContAmtValue",521:"ContAmtCurr",522:"OwnerType",523:"PartySubID",524:"NestedPartyID",525:"NestedPartyIDSource",526:"SecondaryClOrdID",527:"SecondaryExecID",528:"OrderCapacity",529:"OrderRestrictions",530:"MassCancelRequestType",531:"MassCancelResponse",532:"MassCancelRejectReason",533:"TotalAffectedOrders",534:"NoAffectedOrders",535:"AffectedOrderID",536:"AffectedSecondaryOrderID",537:"QuoteType",538:"NestedPartyRole",539:"NoNestedPartyIDs",540:"TotalAccruedInterestAmt",541:"MaturityDate",542:"UnderlyingMaturityDate",543:"InstrRegistry",544:"CashMargin",545:"NestedPartySubID",546:"Scope",547:"MDImplicitDelete",548:"CrossID",549:"CrossType",550:"CrossPrioritization",551:"OrigCrossID",552:"NoSides",553:"Username",554:"Password",555:"NoLegs",556:"LegCurrency",557:"TotNoSecurityTypes",558:"NoSecurityTypes",559:"SecurityListRequestType",560:"SecurityRequestResult",561:"RoundLot",562:"MinTradeVol",563:"MultiLegRptTypeReq",564:"LegPositionEffect",565:"LegCoveredOrUncovered",566:"LegPrice",567:"TradSesStatusRejReason",568:"TradeRequestID",569:"TradeRequestType",570:"PreviouslyReported",571:"TradeReportID",572:"TradeReportRefID",573:"MatchStatus",574:"MatchType",575:"OddLot",576:"NoClearingInstructions",577:"ClearingInstruction",578:"TradeInputSource",579:"TradeInputDevice",580:"NoDates",581:"AccountType",582:"CustOrderCapacity",583:"ClOrdLinkID",584:"MassStatusReqID",585:"MassStatusReqType",586:"OrigOrdModTime",587:"LegSettlType",588:"LegSettlDate",589:"DayBookingInst",590:"BookingUnit",591:"PreallocMethod",592:"UnderlyingCountryOfIssue",593:"UnderlyingStateOr",594:"UnderlyingLocaleOfIssue",595:"UnderlyingInstrRegistry",596:"LegCountryOfIssue",597:"LegStateOrProvinceOfIssue",598:"LegLocaleOfIssue",599:"LegInstrRegistry",600:"LegSymbol",601:"LegSymbolSfx",602:"LegSecurityID",603:"LegSecurityIDSource",604:"NoLegSecurityAltID",605:"LegSecurityAltID",606:"LegSecurityAltIDSource",607:"LegProduct",608:"LegCFICode",609:"LegSecurityType",610:"LegMaturityMonthYear",611:"LegMaturityDate",612:"LegStrikePrice",613:"LegOptAttribute",614:"LegContractMultiplier",615:"LegCouponRate",616:"LegSecurityExchange",617:"LegIssuer",618:"EncodedLegIssuerLen",619:"EncodedLegIssuer",620:"LegSecurityDesc",621:"EncodedLegSecurityDescLen",622:"EncodedLegSecurityDesc",623:"LegRatioQty",624:"LegSide",625:"TradingSessionSubID",626:"AllocType",627:"NoHops",628:"HopCompID",629:"HopSendingTime",630:"HopRefID",631:"MidPx",632:"BidYield",633:"MidYield",634:"OfferYield",635:"ClearingFeeIndicator",636:"WorkingIndicator",637:"LegLastPx",638:"PriorityIndicator",639:"PriceImprovement",640:"Price2",641:"LastForwardPoints2",642:"BidForwardPoints2",643:"OfferForwardPoints2",644:"RFQReqID",645:"MktBidPx",646:"MktOfferPx",647:"MinBidSize",648:"MinOfferSize",649:"QuoteStatusReqID",650:"LegalConfirm",651:"UnderlyingLastPx",652:"UnderlyingLastQty",653:"SecDefStatus",654:"LegRefID",655:"ContraLegRefID",656:"SettlCurrBidFxRate",657:"SettlCurrOfferFxRate",658:"QuoteRequestRejectReason",659:"SideComplianceID",660:"AcctIDSource",661:"AllocAcctIDSource",662:"BenchmarkPrice",663:"BenchmarkPriceType",664:"ConfirmID",665:"ConfirmStatus",666:"ConfirmTransType",667:"ContractSettlMonth",668:"DeliveryForm",669:"LastParPx",670:"NoLegAllocs",671:"LegAllocAccount",672:"LegIndividualAllocID",673:"LegAllocQty",674:"LegAllocAcctIDSource",675:"LegSettlCurrency",676:"LegBenchmarkCurveCurrency",677:"LegBenchmarkCurveName",678:"LegBenchmarkCurvePoint",679:"LegBenchmarkPrice",680:"LegBenchmarkPriceType",681:"LegBidPx",682:"LegIOIQty",683:"NoLegStipulations",684:"LegOfferPx",685:"LegOrderQty",686:"LegPriceType",687:"LegQty",688:"LegStipulationType",689:"LegStipulationValue",690:"LegSwapType",691:"Pool",692:"QuotePriceType",693:"QuoteRespID",694:"QuoteRespType",695:"QuoteQualifier",696:"YieldRedemptionDate",697:"YieldRedemptionPrice",698:"YieldRedemptionPriceType",699:"BenchmarkSecurityID",700:"ReversalIndicator",701:"YieldCalcDate",702:"NoPositions",703:"PosType",704:"LongQty",705:"ShortQty",706:"PosQtyStatus",707:"PosAmtType",708:"PosAmt",709:"PosTransType",710:"PosReqID",711:"NoUnderlyings",712:"PosMaintAction",713:"OrigPosReqRefID",714:"PosMaintRptRefID",715:"ClearingBusinessDate",716:"SettlSessID",717:"SettlSessSubID",718:"AdjustmentType",719:"ContraryInstructionIndicator",720:"PriorSpreadIndicator",721:"PosMaintRptID",722:"PosMaintStatus",723:"PosMaintResult",724:"PosReqType",725:"ResponseTransportType",726:"ResponseDestination",727:"TotalNumPosReports",728:"PosReqResult",729:"PosReqStatus",730:"SettlPrice",731:"SettlPriceType",732:"UnderlyingSettlPrice",733:"UnderlyingSettlPriceType",734:"PriorSettlPrice",735:"NoQuoteQualifiers",736:"AllocSettlCurrency",737:"AllocSettlCurrAmt",738:"InterestAtMaturity",739:"LegDatedDate",740:"LegPool",741:"AllocInterestAtMaturity",742:"AllocAccruedInterestAmt",743:"DeliveryDate",744:"AssignmentMethod",745:"AssignmentUnit",746:"OpenInterest",747:"ExerciseMethod",748:"TotNumTradeReports",749:"TradeRequestResult",750:"TradeRequestStatus",751:"TradeReportRejectReason",752:"SideMultiLegReportingType",753:"NoPosAmt",754:"AutoAcceptIndicator",755:"AllocReportID",756:"NoNested2PartyIDs",757:"Nested2PartyID",758:"Nested2PartyIDSource",759:"Nested2PartyRole",760:"Nested2PartySubID",761:"BenchmarkSecurityIDSource",762:"SecuritySubType",763:"UnderlyingSecuritySubType",764:"LegSecuritySubType",765:"AllowableOneSidednessPct",766:"AllowableOneSidednessValue",767:"AllowableOneSidednessCurr",768:"NoTrdRegTimestamps",769:"TrdRegTimestamp",770:"TrdRegTimestampType",771:"TrdRegTimestampOrigin",772:"ConfirmRefID",773:"ConfirmType",774:"ConfirmRejReason",775:"BookingType",776:"IndividualAllocRejCode",777:"SettlInstMsgID",778:"NoSettlInst",779:"LastUpdateTime",780:"AllocSettlInstType",781:"NoSettlPartyIDs",782:"SettlPartyID",783:"SettlPartyIDSource",784:"SettlPartyRole",785:"SettlPartySubID",786:"SettlPartySubIDType",787:"DlvyInstType",788:"TerminationType",789:"NextExpectedMsgSeqNum",790:"OrdStatusReqID",791:"SettlInstReqID",792:"SettlInstReqRejCode",793:"SecondaryAllocID",794:"AllocReportType",795:"AllocReportRefID",796:"AllocCancReplaceReason",797:"CopyMsgIndicator",798:"AllocAccountType",799:"OrderAvgPx",800:"OrderBookingQty",801:"NoSettlPartySubIDs",802:"NoPartySubIDs",803:"PartySubIDType",804:"NoNestedPartySubIDs",805:"NestedPartySubIDType",806:"NoNested2PartySubIDs",807:"Nested2PartySubIDType",808:"AllocIntermedReqType",809:"(Not defined)",810:"UnderlyingPx",811:"PriceDelta",812:"ApplQueueMax",813:"ApplQueueDepth",814:"ApplQueueResolution",815:"ApplQueueAction",816:"NoAltMDSource",817:"AltMDSourceID",818:"SecondaryTradeReportID",819:"AvgPxIndicator",820:"TradeLinkID",821:"OrderInputDevice",822:"UnderlyingTradingSessionID",823:"UnderlyingTradingSessionSubID",824:"TradeLegRefID",825:"ExchangeRule",826:"TradeAllocIndicator",827:"ExpirationCycle",828:"TrdType",829:"TrdSubType",830:"TransferReason",831:"AsgnReqID",832:"TotNumAssignmentReports",833:"AsgnRptID",834:"ThresholdAmount",835:"PegMoveType",836:"PegOffsetType",837:"PegLimitType",838:"PegRoundDirection",839:"PeggedPrice",840:"PegScope",841:"DiscretionMoveType",842:"DiscretionOffsetType",843:"DiscretionLimitType",844:"DiscretionRoundDirection",845:"DiscretionPrice",846:"DiscretionScope",847:"TargetStrategy",848:"TargetStrategyParameters",849:"ParticipationRate",850:"TargetStrategyPerformance",851:"LastLiquidityInd",852:"PublishTrdIndicator",853:"ShortSaleReason",854:"QtyType",855:"SecondaryTrdType",856:"TradeReportType",857:"AllocNoOrdersType",858:"SharedCommission",859:"ConfirmReqID",860:"AvgParPx",861:"ReportedPx",862:"NoCapacities",863:"OrderCapacityQty",864:"NoEvents",865:"EventType",866:"EventDate",867:"EventPx",868:"EventText",869:"PctAtRisk",870:"NoInstrAttrib",871:"InstrAttribType",872:"InstrAttribValue",873:"DatedDate",874:"InterestAccrualDate",875:"CPProgram",876:"CPRegType",877:"UnderlyingCPProgram",878:"UnderlyingCPRegType",879:"UnderlyingQty",880:"TrdMatchID",881:"SecondaryTradeReportRefID",882:"UnderlyingDirtyPrice",883:"UnderlyingEndPrice",884:"UnderlyingStartValue",885:"UnderlyingCurrentValue",886:"UnderlyingEndValue",887:"NoUnderlyingStips",888:"UnderlyingStipType",889:"UnderlyingStipValue",890:"MaturityNetMoney",891:"MiscFeeBasis",892:"TotNoAllocs",893:"LastFragment",894:"CollReqID",895:"CollAsgnReason",896:"CollInquiryQualifier",897:"NoTrades",898:"MarginRatio",899:"MarginExcess",900:"TotalNetValue",901:"CashOutstanding",902:"CollAsgnID",903:"CollAsgnTransType",904:"CollRespID",905:"CollAsgnRespType",906:"CollAsgnRejectReason",907:"CollAsgnRefID",908:"CollRptID",909:"CollInquiryID",910:"CollStatus",911:"TotNumReports",912:"LastRptRequested",913:"AgreementDesc",914:"AgreementID",915:"AgreementDate",916:"StartDate",917:"EndDate",918:"AgreementCurrency",919:"DeliveryType",920:"EndAccruedInterestAmt",921:"StartCash",922:"EndCash",923:"UserRequestID",924:"UserRequestType",925:"NewPassword",926:"UserStatus",927:"UserStatusText",928:"StatusValue",929:"StatusText",930:"RefCompID",931:"RefSubID",932:"NetworkResponseID",933:"NetworkRequestID",934:"LastNetworkResponseID",935:"NetworkRequestType",936:"NoCompIDs",937:"NetworkStatusResponseType",938:"NoCollInquiryQualifier",939:"TrdRptStatus",940:"AffirmStatus",941:"UnderlyingStrikeCurrency",942:"LegStrikeCurrency",943:"TimeBracket",944:"CollAction",945:"CollInquiryStatus",946:"CollInquiryResult",947:"StrikeCurrency",948:"NoNested3PartyIDs",949:"Nested3PartyID",950:"Nested3PartyIDSource",951:"Nested3PartyRole",952:"NoNested3PartySubIDs",953:"Nested3PartySubID",954:"Nested3PartySubIDType",955:"LegContractSettlMonth",956:"LegInterestAccrualDate"};