
var squaireProject = {
  title: "Maple syrup production by state",
  caption: "Vermont dwarfs the rest of the states in maple syrup production at around 1 million gallons. Connecticut, with 63,000 taps more than 160 farms, produces around 10,000 gallons."
    + " The * denotes that the 2013-2015 data is not from agriculture census data and is limited to Northeastern states.",
  sourceline: "USDA National Agriculture Statistics Service",
  byline: "Jake Kara / TrendCT.org",
  div_id: "map-container",
  datasets: [{
    name: "2007"
  },
  {
    name: "2012"
  }, 
  { 
    name: "2013",
    label: "2013*"
  }, 
  {
    name: "2014",
    label: "2014*"
  }, 
  {
    name: "2015",
    label: "2015*"
  }],

  default_set: "2012"
};


squaireProject.opt = {};

squaireProject.opt["default"] = {
    tooltip: {
      enabled: true,
      column1: "Year",
      column2: "Syrup produced (gallons)"
    },
    el: "#" + squaireProject.div_id,

    colors: d3.scale.quantize().domain([10000,100000]).range(['#eaccae','#d5985d','#794c20','#3d2610'])
}

squaireProject.opt["2007"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2007"]
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["2012"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2012"]
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["2013"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2013"]
    }
  },
    squaireProject.opt["default"]
);

squaireProject.opt["2014"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2014"],
    }
  },
    squaireProject.opt["default"]
);
squaireProject.opt["2015"] = 
jQuery.extend(true, {
    tooltip: {
      whitelist: ["2015"]
    }
  },
    squaireProject.opt["default"]
);





squaireProject.data = {
  "CT": {
    "2007": "11,732",
    "2012": "10,495",
    "2013": "20,000",
    "2014": "16,000"
    ,
    "2015": "19,000"
  },
  "MA": {
    "2007": "41,249",
    "2012": "42,074",
    "2013": "63,000",
    "2014": "61,000",
    "2015": "75,000"
  },
  "NH": {
    "2007": "71,122",
    "2012": "82,574",
    "2013": "124,000",
    "2014": "112,000",
    "2015": "154,000"
  },
  "PA": {
    "2007": "61,138",
    "2012": "96,266",
    "2013": "134,000",
    "2014": "146,000",
    "2015": "165,000"
  },
  "MI": {
    "2007": "66,313",
    "2012": "69,017",
    "2013": "148,000",
    "2014": "105,000",
    "2015": "127,000"
  },
  "OH": {
    "2007": "62,141",
    "2012": "94,133",
    "2013": "155,000",
    "2014": "130,000",
    "2015": "115,000"
  },
  "WI": {
    "2007": "108,108",
    "2012": "66,115",
    "2013": "265,000",
    "2014": "200,000",
    "2015": "215,000"
  },
  "ME": {
    "2007": "252,447",
    "2012": "443,024",
    "2013": "560,000",
    "2014": "545,000",
    "2015": "553,000"
  },
  "NY": {
    "2007": "229,486",
    "2012": "358,603",
    "2013": "574,000",
    "2014": "546,000",
    "2015": "601,000"
  },
  "VT": {
    "2007": "644,962",
    "2012": "999,391",
    "2013": "1,480,000",
    "2014": "1,350,000",
    "2015": "1,390,000"
  },
  "IA": {
    "2007": 953,
    "2012": 828,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "IL": {
    "2007": "1,382",
    "2012": "3,331",
    "2013": null,
    "2014": null,
    "2015": null
  },
  "IN": {
    "2007": "8,178",
    "2012": "12,449",
    "2013": null,
    "2014": null,
    "2015": null
  },
  "KY": {
    "2007": 335,
    "2012": 531,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "MD": {
    "2007": "2,467",
    "2012": "2,423",
    "2013": null,
    "2014": null,
    "2015": null
  },
  "MN": {
    "2007": "13,875",
    "2012": "10,776",
    "2013": null,
    "2014": null,
    "2015": null
  },
  "MO": {
    "2007": 387,
    "2012": 144,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "NC": {
    "2007": 10,
    "2012": 197,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "NJ": {
    "2007": 522,
    "2012": 406,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "OR": {
    "2007": 0,
    "2012": 42,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "RI": {
    "2007": 441,
    "2012": 259,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "TN": {
    "2007": 94,
    "2012": 33,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "VA": {
    "2007": "1,982",
    "2012": "1,800",
    "2013": null,
    "2014": null,
    "2015": null
  },
  "WA": {
    "2007": 0,
    "2012": 4,
    "2013": null,
    "2014": null,
    "2015": null
  },
  "WV": {
    "2007": "2,773",
    "2012": "1,341",
    "2013": null,
    "2014": null,
    "2015": null
  }
};