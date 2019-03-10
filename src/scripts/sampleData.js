export const sampleJson = {
    "operationalLayers": [
        {
            "id": "Topo_Dark_1414",
            "layerType": "ArcGISMapServiceLayer",
            "url": "https://utility.arcgis.com/usrsvcs/servers/679a82a559c540558ebd291b8e9f3329/rest/services/UtilitiesKingston/Topo_Dark/MapServer",
            "visibility": true,
            "opacity": 1,
            "title": "Topo Dark Theme",
            "itemId": "679a82a559c540558ebd291b8e9f3329"
        },
        {
            "id": "Wastewater_7520",
            "layerType": "ArcGISMapServiceLayer",
            "url": "https://utility.arcgis.com/usrsvcs/servers/b864944a91a64cfcb47244435a6f5183/rest/services/UtilitiesKingston/Wastewater/MapServer",
            "visibility": false,
            "visibleLayers": [
                0,
                1,
                2,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                28,
                29,
                37,
                42,
                43,
                44,
                46,
                47,
                48,
                49,
                50,
                51,
                52,
                53,
                54,
                55,
                56,
                58,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                68
            ],
            "opacity": 1,
            "title": "UK Wastewater (Token DEV-API 10.3)",
            "itemId": "b864944a91a64cfcb47244435a6f5183",
            "layers": [
                {
                    "id": 20,
                    "popupInfo": {
                        "title": "Pressurized Main: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 1,
                    "popupInfo": {
                        "title": "Network Structure: {FACILITYID} {STRUCTTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPDATE",
                                "label": "Operational Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STRUCTTYPE",
                                "label": "Structure Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "Ancillary Role",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    },
                    "layerDefinition": {
                        "definitionExpression": "CONSTRUCTIONSTATUS = '10'"
                    }
                },
                {
                    "id": 2,
                    "popupInfo": {
                        "title": "Sewer Pumps: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PUMPTYPE",
                                "label": "Pump Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ELEVATION",
                                "label": "Elevation",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INLETDIAM",
                                "label": "Inlet Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHDIAM",
                                "label": "Discharge Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "IMPDIAM",
                                "label": "Impeller Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDFLOW",
                                "label": "Rated Flow",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RATEDPRESS",
                                "label": "Rated Pressure",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DYNHEAD",
                                "label": "Total Dynamic Head",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHUTHEAD",
                                "label": "Shutoff Head",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DESHEAD",
                                "label": "Design Head",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXOPHEAD",
                                "label": "Max Operating Head",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATIONID",
                                "label": "Station ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DESIGNGPM",
                                "label": "Design GPM",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAXOPDISC",
                                "label": "Max Operating Discharge",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "Ancillary Role",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 13,
                    "popupInfo": {
                        "title": "Manhole: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHELEV",
                                "label": "High Pipe Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERT",
                                "label": "Depth (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEV",
                                "label": "Invert Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMELEV",
                                "label": "Rim Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CVTYPE",
                                "label": "Cover Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WALLMAT",
                                "label": "Wall Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MHTYPE",
                                "label": "Manhole Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION",
                                "label": "Manhole Condition",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CUTDEPTH",
                                "label": "Pavement Cut Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWDIR",
                                "label": "Flow Direction",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINED",
                                "label": "Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GPSDATE",
                                "label": "GPS Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SAFETYPLATFORM",
                                "label": "Safety Platform",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MISA",
                                "label": "MISA Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BAITING",
                                "label": "Baiting Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INFLOODPLAIN",
                                "label": "In Floodplain",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOODRISK",
                                "label": "Flood Risk",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ABOVEFLOODELE",
                                "label": "Above Flood Elevation",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBSTANDARD",
                                "label": "Substandard",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 21,
                    "popupInfo": {
                        "title": "Trunk: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 22,
                    "popupInfo": {
                        "title": "Gravity Main: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 25,
                    "popupInfo": {
                        "title": "Gravity Main: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 26,
                    "popupInfo": {
                        "title": "Syphon: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 23,
                    "popupInfo": {
                        "title": "Syphon: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 3,
                    "popupInfo": {
                        "title": "System Valve: {FACILITYID} {VALVETYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VALVETYPE",
                                "label": "Valve Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VALVESTYLE",
                                "label": "Valve Style",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BYPASSVALVE",
                                "label": "Bypass Valve",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLOCKTOCLOSE",
                                "label": "Clockwise To Close",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NORMALLYOPEN",
                                "label": "Normally Open",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TURNSTOCLOSE",
                                "label": "Turns To Close",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OPERABLE",
                                "label": "Operable",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CURROPEN",
                                "label": "Currently Open",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 4,
                    "popupInfo": {
                        "title": "Control Valve: {FACILITYID} {VALVETYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VALVETYPE",
                                "label": "Valve Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VALVESTYLE",
                                "label": "Valve Style",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAM",
                                "label": "Access Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 5,
                    "popupInfo": {
                        "title": "Inlet: {FACILITYID} {INLETTYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INLETTYPE",
                                "label": "Inlet Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAM",
                                "label": "Access Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEV",
                                "label": "Invert Elevation",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSMAT",
                                "label": "Access Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "Access Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 6,
                    "popupInfo": {
                        "title": "Clean Out: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSMAT",
                                "label": "Access Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSTYPE",
                                "label": "Access Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INTDEPTH",
                                "label": "Interior Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEVICETYPE",
                                "label": "Cleanout Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCESSDIAM",
                                "label": "Access Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 14,
                    "popupInfo": {
                        "title": "MISA Manhole: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHELEV",
                                "label": "High Pipe Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERT",
                                "label": "Depth (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INVERTELEV",
                                "label": "Invert Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMELEV",
                                "label": "Rim Elevation (m)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CVTYPE",
                                "label": "Cover Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WALLMAT",
                                "label": "Wall Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MHTYPE",
                                "label": "Manhole Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION",
                                "label": "Manhole Condition",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CUTDEPTH",
                                "label": "Pavement Cut Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOWDIR",
                                "label": "Flow Direction",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINED",
                                "label": "Lined",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GPSDATE",
                                "label": "GPS Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SAFETYPLATFORM",
                                "label": "Safety Platform",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MISA",
                                "label": "MISA Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BAITING",
                                "label": "Baiting Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INFLOODPLAIN",
                                "label": "In Floodplain",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOODRISK",
                                "label": "Flood Risk",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ABOVEFLOODELE",
                                "label": "Above Flood Elevation",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBSTANDARD",
                                "label": "Substandard",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 15,
                    "popupInfo": {
                        "title": "Tap: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CRITICAL",
                                "label": "Critical Customer",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 16,
                    "popupInfo": {
                        "title": "Fitting: {FITTINGTYPE} ID: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FITTINGTYPE",
                                "label": "Fitting Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 17,
                    "popupInfo": {
                        "title": "Bend: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INLETDIAM",
                                "label": "Inlet Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHDIAM",
                                "label": "Discharge Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BENDANGLE",
                                "label": "Angle",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BENDRADIUS",
                                "label": "Radius",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 18,
                    "popupInfo": {
                        "title": "Service Connection: {FACILITYNAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYNAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LARGEMETER",
                                "label": "Large Meter Flag",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACCOUNTID",
                                "label": "Account Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCATIONID",
                                "label": "Location Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CRITICAL",
                                "label": "Critical Customer",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 29,
                    "popupInfo": {
                        "title": "Lateral Line: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 28,
                    "popupInfo": {
                        "title": "Pressurized Lateral Line: {DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 8,
                    "popupInfo": {
                        "title": "Active Flow Monitor: {NAME} {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LEGACYID",
                                "label": "Legacy ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PREVIOUSNAME",
                                "label": "Previous Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "Monitor Model",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SCADAMONITOR",
                                "label": "SCADA Monitored",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "Ancillary Role",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUMS",
                                "label": "PCPNUMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPMONITORID",
                                "label": "PCPMONITORID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 9,
                    "popupInfo": {
                        "title": "Non-Active Inline Flow Monitor: {NAME} {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LEGACYID",
                                "label": "Legacy ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PREVIOUSNAME",
                                "label": "Previous Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODEL",
                                "label": "Monitor Model",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SCADAMONITOR",
                                "label": "SCADA Monitored",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "Ancillary Role",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUMS",
                                "label": "PCPNUMS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPMONITORID",
                                "label": "PCPMONITORID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 11,
                    "popupInfo": {
                        "title": "Discharge Point: {DISCHRGTYP} {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LEGACYID",
                                "label": "Legacy ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHRGTYP",
                                "label": "Discharge Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AVGDISCH",
                                "label": "Average Discharge",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHID",
                                "label": "Discharge Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECEIVINGBODY",
                                "label": "Receiving Body",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PEAKDISCH",
                                "label": "Peak Discharge",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MESDEPTH",
                                "label": "Measured Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMIT",
                                "label": "Permitted",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMITID",
                                "label": "Permit Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SCADAMONITOR",
                                "label": "SCADA Monitored",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "Ancillary Role",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUMS",
                                "label": "Contributing PCP's",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUM",
                                "label": "PCPNUM",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTFALLNAME",
                                "label": "Outfall Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 12,
                    "popupInfo": {
                        "title": "Non-Active Discharge Point: {DISCHRGTYP} {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LEGACYID",
                                "label": "Legacy ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHRGTYP",
                                "label": "Discharge Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AVGDISCH",
                                "label": "Average Discharge",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISCHID",
                                "label": "Discharge Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECEIVINGBODY",
                                "label": "Receiving Body",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PEAKDISCH",
                                "label": "Peak Discharge",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MESDEPTH",
                                "label": "Measured Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMIT",
                                "label": "Permitted",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PERMITID",
                                "label": "Permit Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SCADAMONITOR",
                                "label": "SCADA Monitored",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ANCILLARYROLE",
                                "label": "AncillaryRole",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUMS",
                                "label": "Contributing PCP's",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PCPNUM",
                                "label": "PCPNUM",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OUTFALLNAME",
                                "label": "Outfall Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 42,
                    "popupInfo": {
                        "title": "Storm Manholes:{MH_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "MH_ID",
                                "label": "MANHOLE ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STRUCTURE_TYPE",
                                "label": "STRUCTURE TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BOTTOM_ELEVATION_M",
                                "label": "BOTTOM ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "TOP_ELEVATION_M",
                                "label": "TOP ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "BOTTOM_LENGTH_MM",
                                "label": "BOTTOM LENGTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "BOTTOM_WIDTH_MM",
                                "label": "BOTTOM WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "DESCRIPTION",
                                "label": "DESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION_INDEX",
                                "label": "CONDITION INDEX",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "LAST_INSPECTION_DATE",
                                "label": "LAST INSPECTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROATATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 43,
                    "popupInfo": {
                        "title": "Storm Inlet: {INLET_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INLET_ID",
                                "label": "INLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STRUCTURE_TYPE",
                                "label": "STRUCTURE TYPE",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATER_TYPE",
                                "label": "WATER TYPE",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOP_GRATE_ELEVATION",
                                "label": "TOP GRATE ELEVATION",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ALT_ID",
                                "label": "ALT ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTAINED_BY",
                                "label": "MAINTAINED BY",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_REASON",
                                "label": "CONSTRUCTION REASON",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACT",
                                "label": "CONTRACT",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBDIVISION",
                                "label": "SUBDIVISION",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LID_CONDITION_INDEX",
                                "label": "CONDITION INDEX",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LID_CONDITION_DESCRIPTION",
                                "label": "CONDITION DESCRIPTION",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LID_TYPE_CODE",
                                "label": "LID TYPE CODE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LID_TYPE_DESCRIPTION",
                                "label": "LID TYPE DESCRIPTION",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_INSPECTION_DATE",
                                "label": "LAST INSPECTION DATE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION TYPE",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "ROTATION",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 44,
                    "popupInfo": {
                        "title": "Storm Sewer: {STORM_SEWER_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ALT_ID",
                                "label": "ALT ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER_MM",
                                "label": "DIAMETER (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HEIGHT_MM",
                                "label": "HEIGHT (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_INVERT",
                                "label": "UPSTREAM INVERT",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_INVERT",
                                "label": "DOWNSTREAM INVERT",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_INLET_ID",
                                "label": "UPSTREAM INLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_MANHOLE_ID",
                                "label": "UPSTREAM MANHOLE ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_OUTLET_ID",
                                "label": "DOWNSTREAM OUTLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_MANHOLE_ID",
                                "label": "DOWNSTREAM MANHOLE ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_INLET_ID",
                                "label": "DOWNSTREAM INLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROP_INVERT_ELEVATION_M",
                                "label": "DROP INVERT ELEVATION (M)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROP_PIPE_SIZE_MM",
                                "label": "DROP PIPE SIZE (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATER_TYPE",
                                "label": "WATER TYPE",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOE_COA",
                                "label": "MOE COA",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTAINED_BY",
                                "label": "MAINTAINED_BY",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION_TYPE",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WIDTH_MM",
                                "label": "WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_REASON",
                                "label": "CONSTRUCTION_REASON",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACT",
                                "label": "CONTRACT",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBDIVISION_ID",
                                "label": "SUBDIVISION_ID",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENTRY_WHEN",
                                "label": "ENTRY_WHEN",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "RETIRED_DATE",
                                "label": "RETIRED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "RIMS_SEGMENT_ID",
                                "label": "RIMS_SEGMENT_ID",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LAST_CONSTRUCTION",
                                "label": "LAST_CONSTRUCTION",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LENGTH_M",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CATCHMENT_AREA",
                                "label": "CATCHMENT_AREA",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AS_BUILTS_AVAILABLE",
                                "label": "AS_BUILTS_AVAILABLE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "STORM_SEWER_ID",
                                "label": "STORM SEWER ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_VIDEO_INSPECTION_DATE",
                                "label": "LAST_VIDEO_INSPECTION_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "PIPE_MATERIAL",
                                "label": "PIPE MATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VIDEO_INSPECTION_DONE",
                                "label": "VIDEO_INSPECTION_DONE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 40,
                    "popupInfo": {
                        "title": "Service Area: {TREATMENTPLANT} {REGION}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGION",
                                "label": "Region",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TREATMENTPLANT",
                                "label": "Treatment Plant",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Active Service Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Service Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Service Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 39,
                    "popupInfo": {
                        "title": "CCTV Project Area: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "REGION",
                                "label": "Region",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTCCTVDATE",
                                "label": "Last CCTV Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PLANNEDCCTVDATE",
                                "label": "Planned CCTV Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACTOR",
                                "label": "Contractor",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 38,
                    "popupInfo": {
                        "title": "Subcatchment Areas: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ZONE",
                                "label": "SubCatchment Zone",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "SubCatchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBCATCHMENTID",
                                "label": "SubCatchment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 37,
                    "popupInfo": {
                        "title": "Catchment Area: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ZONE",
                                "label": "Catchment Zone",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CATCHMENTID",
                                "label": "Catchment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 36,
                    "popupInfo": {
                        "title": "Catchment Area: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ZONE",
                                "label": "Catchment Zone",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CATCHMENTID",
                                "label": "Catchment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 34,
                    "popupInfo": {
                        "title": "Combined Area: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ZONE",
                                "label": "Catchment Zone",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CATCHMENTID",
                                "label": "Catchment ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 33,
                    "popupInfo": {
                        "title": "Facility Area: {NAME} {TYPE}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Perimeter (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 32,
                    "popupInfo": {
                        "title": "Open Drain",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOPWIDTH",
                                "label": "Top Width",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BOTWIDTH",
                                "label": "Bottom Width",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DEPTH",
                                "label": "Depth",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BEDMATERIAL",
                                "label": "Bed Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SIDEMATERIAL",
                                "label": "Side Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LEFTSLOPE",
                                "label": "Left Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIGHTSLOPE",
                                "label": "Right Slope",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPTOP",
                                "label": "Uptop",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DWNTOP",
                                "label": "Down Top",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 31,
                    "popupInfo": {
                        "title": "Virtual Drainline",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 30,
                    "popupInfo": {
                        "title": "Casing: {FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RECORDLENG",
                                "label": "Recorded Length",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CASETYPE",
                                "label": "Casing Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 65,
                    "popupInfo": {
                        "title": "Proposed Storm Sewer:{STORM_SEWER_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "ALT_ID",
                                "label": "ALT ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMS_SEGMENT_ID",
                                "label": "RIMS SEGMENT ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER_MM",
                                "label": "DIAMETER (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "HEIGHT_MM",
                                "label": "HEIGHT (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "UPSTREAM_INVERT",
                                "label": "UPSTREAM INVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DOWNSTREAM_INVERT",
                                "label": "DOWNSTREAM INVERT",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "UPSTREAM_INLET_ID",
                                "label": "UPSTREAM INLET ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_MANHOLE_ID",
                                "label": "UPSTREAM MANHOLE ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_OUTLET_ID",
                                "label": "DOWNSTREAM OUTLET ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_MANHOLE_ID",
                                "label": "DOWNSTREAM MANHOLE ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_INLET_ID",
                                "label": "DOWNSTREAM INLET ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROP_INVERT_ELEVATION_M",
                                "label": "DROP INVERT ELEVATION M",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DROP_PIPE_SIZE_MM",
                                "label": "DROP PIPE SIZE (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOE_COA",
                                "label": "MOE COA",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MAINTAINED_BY",
                                "label": "MAINTAINED_BY",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LENGTH_M",
                                "label": "LENGTH (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION_TYPE",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_REASON",
                                "label": "CONSTRUCTION_REASON",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACT",
                                "label": "CONTRACT",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBDIVISION_ID",
                                "label": "SUBDIVISION_ID",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENTRY_WHEN",
                                "label": "ENTRY_WHEN",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "RETIRED_DATE",
                                "label": "RETIRED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "WATER_TYPE",
                                "label": "WATER TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LAST_CONSTRUCTION",
                                "label": "LAST_CONSTRUCTION",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WIDTH_MM",
                                "label": "WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CATCHMENT_AREA",
                                "label": "CATCHMENT_AREA",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AS_BUILTS_AVAILABLE",
                                "label": "AS_BUILTS_AVAILABLE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "STORM_SEWER_ID",
                                "label": "STORM SEWER ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_VIDEO_INSPECTION_DATE",
                                "label": "LAST_VIDEO_INSPECTION_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "PIPE_MATERIAL",
                                "label": "PIPE MATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VIDEO_INSPECTION_DONE",
                                "label": "VIDEO_INSPECTION_DONE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 64,
                    "popupInfo": {
                        "title": "Proposed Storm Manhole:{MH_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "MH_ID",
                                "label": "MANHOLE ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STRUCTURE_TYPE",
                                "label": "STRUCTURE TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DESCRIPTION",
                                "label": "DESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BOTTOM_ELEVATION_M",
                                "label": "BOTTOM ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "TOP_ELEVATION_M",
                                "label": "TOP ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "BOTTOM_LENGTH_MM",
                                "label": "BOTTOM LENGTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "BOTTOM_WIDTH_MM",
                                "label": "BOTTOM WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION_INDEX",
                                "label": "CONDITION INDEX",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "LAST_INSPECTION_DATE",
                                "label": "LAST INSPECTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROATATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 62,
                    "popupInfo": {
                        "title": "Proposed Lateral:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 61,
                    "popupInfo": {
                        "title": "Proposed Pressurized Lateral:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 60,
                    "popupInfo": {
                        "title": "Proposed Pressurized Main:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 56,
                    "popupInfo": {
                        "title": "Abandoned Storm Sewer: {STORM_SEWER_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ALT_ID",
                                "label": "ALT ID",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS_SEGMENT_ID",
                                "label": "RIMS SEGMENT ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER_MM",
                                "label": "DIAMETER (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HEIGHT_MM",
                                "label": "HEIGHT (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_INVERT",
                                "label": "UPSTREAM INVERT",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_INVERT",
                                "label": "DOWNSTREAM INVERT",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "SLOPE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_INLET_ID",
                                "label": "UPSTREAM INLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "UPSTREAM_MANHOLE_ID",
                                "label": "UPSTREAM MANHOLE ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_OUTLET_ID",
                                "label": "DOWNSTREAM OUTLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_MANHOLE_ID",
                                "label": "DOWNSTREAM MANHOLE ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DOWNSTREAM_INLET_ID",
                                "label": "DOWNSTREAM INLET ID",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROP_INVERT_ELEVATION_M",
                                "label": "DROP INVERT ELEVATION (M)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DROP_PIPE_SIZE_MM",
                                "label": "DROP PIPE SIZE (MM)",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MOE_COA",
                                "label": "MOE COA",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTAINED_BY",
                                "label": "MAINTAINED_BY",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LENGTH_M",
                                "label": "LENGTH (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION_TYPE",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_REASON",
                                "label": "CONSTRUCTION_REASON",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONTRACT",
                                "label": "CONTRACT",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBDIVISION_ID",
                                "label": "SUBDIVISION_ID",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENTRY_WHEN",
                                "label": "ENTRY_WHEN",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "RETIRED_DATE",
                                "label": "RETIRED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "WATER_TYPE",
                                "label": "WATER_TYPE",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "LAST_CONSTRUCTION",
                                "label": "LAST_CONSTRUCTION",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WIDTH_MM",
                                "label": "WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "CATCHMENT_AREA",
                                "label": "CATCHMENT AREA",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "AS_BUILTS_AVAILABLE",
                                "label": "AS_BUILTS_AVAILABLE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "STORM_SEWER_ID",
                                "label": "STORM SEWER ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_VIDEO_INSPECTION_DATE",
                                "label": "LAST_VIDEO_INSPECTION_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "PIPE_MATERIAL",
                                "label": "PIPE MATERIAL",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "VIDEO_INSPECTION_DONE",
                                "label": "VIDEO_INSPECTION_DONE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 51,
                    "popupInfo": {
                        "title": "Abandoned Pressurized Lateral Line:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 55,
                    "popupInfo": {
                        "title": "Abandoned Storm Manhole:{MH_ID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "MH_ID",
                                "label": "MANHOLE ID",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STRUCTURE_TYPE",
                                "label": "STRUCTURE TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DESCRIPTION",
                                "label": "DESCRIPTION",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BOTTOM_ELEVATION_M",
                                "label": "BOTTOM ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "TOP_ELEVATION_M",
                                "label": "TOP ELEVATION (M)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "BOTTOM_LENGTH_MM",
                                "label": "BOTTOM LENGTH (MM)",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "BOTTOM_WIDTH_MM",
                                "label": "BOTTOM WIDTH (MM)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_DATE",
                                "label": "CONSTRUCTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "OWNERSHIP",
                                "label": "OWNERSHIP",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTION_STATUS",
                                "label": "CONSTRUCTION STATUS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION_INDEX",
                                "label": "CONDITION INDEX",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "LAST_INSPECTION_DATE",
                                "label": "LAST INSPECTION DATE",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTION_TYPE",
                                "label": "CONSTRUCTION TYPE",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROATATION",
                                "label": "ROTATION",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CP_LINK",
                                "label": "CP LINK",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_USER",
                                "label": "CREATED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATED_DATE",
                                "label": "CREATED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LAST_EDITED_USER",
                                "label": "LAST_EDITED_USER",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LAST_EDITED_DATE",
                                "label": "LAST_EDITED_DATE",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 53,
                    "popupInfo": {
                        "title": "Abandoned Facility Area: {NAME}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "NAME",
                                "label": "Facility Name",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TYPE",
                                "label": "Catchment Type",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "tooltip": "",
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "tooltip": "",
                                "visible": false,
                                "format": {
                                    "dateFormat": "longMonthDayYear"
                                },
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "tooltip": "",
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "tooltip": "",
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.AREA",
                                "label": "Area (m.sq)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": true,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 52,
                    "popupInfo": {
                        "title": "Abandoned Lateral Line:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINETYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DISTANCE",
                                "label": "Distance",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "shortDate",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 48,
                    "popupInfo": {
                        "title": "Abandoned Main:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 49,
                    "popupInfo": {
                        "title": "Abandoned Pressurized Main:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 47,
                    "popupInfo": {
                        "title": "Abandoned Junction:{FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FITTINGTYPE",
                                "label": "Fitting Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ROTATION",
                                "label": "Rotation",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 46,
                    "popupInfo": {
                        "title": "Abandoned Manhole:{FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHELEV",
                                "label": "High Pipe Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "INVERT",
                                "label": "Depth",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "INVERTELEV",
                                "label": "Invert Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMELEV",
                                "label": "Rim Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CVTYPE",
                                "label": "Cover Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WALLMAT",
                                "label": "Wall Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MHTYPE",
                                "label": "Manhole Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION",
                                "label": "Manhole Condition",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CUTDEPTH",
                                "label": "Pavement Cut Depth",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "FLOWDIR",
                                "label": "Flow Direction",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINED",
                                "label": "Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GPSDATE",
                                "label": "GPS Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SAFETYPLATFORM",
                                "label": "Safety Platform",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MISA",
                                "label": "MISA Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BAITING",
                                "label": "Baiting Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INFLOODPLAIN",
                                "label": "In Floodplain",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOODRISK",
                                "label": "Flood Risk",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ABOVEFLOODELE",
                                "label": "Above Flood Elevation",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBSTANDARD",
                                "label": "Substandard",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 59,
                    "popupInfo": {
                        "title": "Proposed Main:{DIAMETER} {MATERIAL}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "PIPESEGMENTID",
                                "label": "Pipe Segment ID",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 0,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MATERIAL",
                                "label": "Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DIAMETER",
                                "label": "Diameter",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINSHAPE",
                                "label": "Main Shape",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDYEAR",
                                "label": "Year Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINEDDATE",
                                "label": "Lined Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LINERTYPE",
                                "label": "Liner Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FROMMH",
                                "label": "From Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "TOMH",
                                "label": "To Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "DOWNELEV",
                                "label": "Downstream Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "UPELEV",
                                "label": "Upstream Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SLOPE",
                                "label": "Slope",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            },
                            {
                                "fieldName": "SYPHON",
                                "label": "Syphon",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "SHAPE",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE.LEN",
                                "label": "Length (m)",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": true
                                }
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                },
                {
                    "id": 58,
                    "popupInfo": {
                        "title": "Proposed Manhole:{FACILITYID}",
                        "fieldInfos": [
                            {
                                "fieldName": "OBJECTID",
                                "label": "OBJECTID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "FACILITYID",
                                "label": "Facility Identifier",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "RIMS",
                                "label": "RIMS",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "EASEMENT",
                                "label": "In Easement",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CLASS",
                                "label": "Class",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "HIGHELEV",
                                "label": "High Pipe Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "INVERT",
                                "label": "Depth",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "INVERTELEV",
                                "label": "Invert Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "RIMELEV",
                                "label": "Rim Elevation",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "CVTYPE",
                                "label": "Cover Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "WALLMAT",
                                "label": "Wall Material",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MHTYPE",
                                "label": "Manhole Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CONDITION",
                                "label": "Manhole Condition",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CUTDEPTH",
                                "label": "Pavement Cut Depth",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "FLOWDIR",
                                "label": "Flow Direction",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LINED",
                                "label": "Lined",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GPSDATE",
                                "label": "GPS Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "WATERTYPE",
                                "label": "Water Type",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LOCDESC",
                                "label": "Location Description",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ENABLED",
                                "label": "Enabled",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ACTIVEFLAG",
                                "label": "Active Flag",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUMFLOW",
                                "label": "Flow Summary",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "places": 2,
                                    "digitSeparator": false
                                }
                            },
                            {
                                "fieldName": "SAFETYPLATFORM",
                                "label": "Safety Platform",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MISA",
                                "label": "MISA Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "BAITING",
                                "label": "Baiting Manhole",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INFLOODPLAIN",
                                "label": "In Floodplain",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "FLOODRISK",
                                "label": "Flood Risk",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "ABOVEFLOODELE",
                                "label": "Above Flood Elevation",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "SUBSTANDARD",
                                "label": "Substandard",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "OWNEDBY",
                                "label": "Ownership",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "MAINTBY",
                                "label": "Managed By",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "INSTALLDATE",
                                "label": "Installation Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "STATUSCHANGEDATE",
                                "label": "Status Change Date",
                                "isEditable": false,
                                "visible": true,
                                "format": {
                                    "dateFormat": "longMonthDayYear",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "CONSTRUCTIONSTATUS",
                                "label": "Construction Status",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CAPTUREMETHOD",
                                "label": "Capture Method",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "CREATIONUSER",
                                "label": "Creation User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "DATECREATED",
                                "label": "Date Created",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "LASTEDITOR",
                                "label": "Last User",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "LASTUPDATE",
                                "label": "Date Modified",
                                "isEditable": false,
                                "visible": false,
                                "format": {
                                    "dateFormat": "shortDateShortTime",
                                    "timezone": "utc"
                                }
                            },
                            {
                                "fieldName": "MODELLED",
                                "label": "Added to Model",
                                "isEditable": false,
                                "visible": false,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "COMMENTS",
                                "label": "Comments",
                                "isEditable": false,
                                "visible": true,
                                "stringFieldOption": "textbox"
                            },
                            {
                                "fieldName": "GLOBALID",
                                "label": "GLOBALID",
                                "isEditable": false,
                                "visible": false
                            },
                            {
                                "fieldName": "SHAPE",
                                "label": "Shape",
                                "isEditable": false,
                                "visible": false
                            }
                        ],
                        "description": null,
                        "showAttachments": false,
                        "mediaInfos": []
                    }
                }
            ]
        },
        {
            "id": "CCTV_5286",
            "layerType": "ArcGISMapServiceLayer",
            "url": "https://utility.arcgis.com/usrsvcs/servers/3f18dc0c38484166a92e52708bc152a9/rest/services/UtilitiesKingston/CCTV/MapServer",
            "visibility": true,
            "opacity": 1,
            "title": "CCTV DEV",
            "itemId": "c59991c237514feb9a796611e721878b"
        }
    ],
    "baseMap": {
        "baseMapLayers": [
            {
                "id": "layer0",
                "layerType": "ArcGISTiledMapServiceLayer",
                "url": "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer",
                "visibility": true,
                "opacity": 1,
                "title": "World Dark Gray Canvas Base"
            },
            {
                "id": "World_Dark_Gray_Reference_8618",
                "layerType": "ArcGISTiledMapServiceLayer",
                "url": "https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",
                "visibility": true,
                "opacity": 1,
                "title": "World Dark Gray Reference",
                "isReference": true
            }
        ],
        "title": "Dark Gray Canvas"
    },
    "spatialReference": {
        "wkid": 102100,
        "latestWkid": 3857
    },
    "authoringApp": "WebMapViewer",
    "authoringAppVersion": "6.4",
    "version": "2.13",
    "tables": [
        {
            "url": "https://utility.arcgis.com/usrsvcs/servers/876ba99b9c6346308a3906c54e5e4988/rest/services/UtilitiesKingston/LocatorRIMS/MapServer/2",
            "id": "LocatorRIMS_8716",
            "title": "LocatorRIMS - GISDATA.RIMS_URL",
            "itemId": "876ba99b9c6346308a3906c54e5e4988",
            "popupInfo": {
                "title": "GISDATA.RIMS_URL: {RIMS_SECTION}",
                "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "tooltip": "",
                        "visible": false,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_SECTION",
                        "label": "RIMS_SECTION",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_URL",
                        "label": "RIMS_URL",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    }
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        },
        {
            "url": "https://utility.arcgis.com/usrsvcs/servers/b864944a91a64cfcb47244435a6f5183/rest/services/UtilitiesKingston/Wastewater/MapServer/67",
            "id": "Wastewater_4635",
            "title": "Wastewater - GISDATA.RIMS_URL",
            "itemId": "b864944a91a64cfcb47244435a6f5183",
            "popupInfo": {
                "title": "GISDATA.RIMS_URL: {RIMS_SECTION}",
                "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "tooltip": "",
                        "visible": false,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_SECTION",
                        "label": "RIMS_SECTION",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_URL",
                        "label": "RIMS_URL",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    }
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        },
        {
            "url": "https://utility.arcgis.com/usrsvcs/servers/679a82a559c540558ebd291b8e9f3329/rest/services/UtilitiesKingston/Topo_Dark/MapServer/30",
            "id": "Topo_Dark_5744",
            "title": "Topo_Dark - GISDATA.RIMS_URL",
            "itemId": "679a82a559c540558ebd291b8e9f3329",
            "popupInfo": {
                "title": "GISDATA.RIMS_URL: {RIMS_SECTION}",
                "fieldInfos": [
                    {
                        "fieldName": "OBJECTID",
                        "label": "OBJECTID",
                        "tooltip": "",
                        "visible": false,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_SECTION",
                        "label": "RIMS_SECTION",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    },
                    {
                        "fieldName": "RIMS_URL",
                        "label": "RIMS_URL",
                        "tooltip": "",
                        "visible": true,
                        "stringFieldOption": "textbox"
                    }
                ],
                "description": null,
                "showAttachments": true,
                "mediaInfos": []
            }
        }
    ]
}