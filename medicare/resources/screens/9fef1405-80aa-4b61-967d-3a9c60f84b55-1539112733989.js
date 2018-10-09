jQuery("#simulation")
  .on("click", ".s-9fef1405-80aa-4b61-967d-3a9c60f84b55 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10 span": {
                      "attributes": {
                        "color": "#E85D9E",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10": {
                      "attributes": {
                        "font-size": "12.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button_10 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "12.0pt"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-plus_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Ellipse_29" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Ellipse_29" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button-blue")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue span": {
                      "attributes": {
                        "color": "#80B8F1",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#80B8F1",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#80B8F1",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#80B8F1",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#80B8F1",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue span": {
                      "attributes": {
                        "color": "#157EFB",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Button-blue": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#157EFB",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#157EFB",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#157EFB",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#157EFB",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d7ad0736-2d40-492c-bfa6-861a2c07476c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_46")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_49")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_46 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_5 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_14 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_14 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_47 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_15 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_48 > svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_16 span": {
                      "attributes": {
                        "color": "#A9A9A9",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Image_49 > svg": {
                      "attributes": {
                        "overlay": "#F92C52"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17": {
                      "attributes": {
                        "font-size": "8.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-9fef1405-80aa-4b61-967d-3a9c60f84b55 #s-Label_17 span": {
                      "attributes": {
                        "color": "#F92C52",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "8.0pt"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-9fef1405-80aa-4b61-967d-3a9c60f84b55 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Label_34" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","5" ]
                      }," PM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });