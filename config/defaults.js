//Please update this file
define([], function() {
    //Default configuration settings for the applciation. This is where you'll define things like a bing maps key, 
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    var defaults = {
        "appid": "",
        "webmap": "c346711ae7ac4b7dbf4bb5eec33e67b8", 
        "oauthappid": null, //"AFTKRmv16wj14N3z",
        //Group templates must support a group url parameter. This will contain the id of the group. 
        //group: "",
        //Enter the url to the proxy if needed by the applcation. See the 'Using the proxy page' help topic for details
        //http://developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
        "proxyurl": "",
        //UI specific parameters
        "title": "Western North Carolina Fires 2016",
        "logo": "",
        "color": "#374260",
        //Counter specific parameters
        "summaryLayer":{
            "id": "",
            "fields":[
                {
                    "id": "filterField",
                    "fields": ["incidentna"]
                },
                {
                    "id": "sumFields",
                    "fields": ["acres"]
                },
                {
                    "id": "avgFields",
                    "fields": []
                },
                {
                    "id": "minFields",
                    "fields": []
                },
                {
                    "id": "maxFields",
                    "fields": []
                }
            ]
        },
        "cluster": false,
        "hideCount": false,
        "hideSummaryType": false,
        "bingmapskey": "", //Enter the url to your organizations bing maps key if you want to use bing basemaps
        "sharinghost": location.protocol + "//" + "www.arcgis.com", //Defaults to arcgis.com. Set this value to your portal or organization host name. 
        "localize": true,
        "queryForOrg": true
    };
    return defaults;
});
