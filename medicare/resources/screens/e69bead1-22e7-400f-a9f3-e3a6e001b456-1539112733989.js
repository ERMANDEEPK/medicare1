jQuery("#simulation")
  .on("click", ".s-e69bead1-22e7-400f-a9f3-e3a6e001b456 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button-red")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FD999A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FD999A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FD999A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FD999A",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red span": {
                      "attributes": {
                        "color": "#FD999A",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#FD999A",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#FD999A",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#FD999A",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#FD999A",
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
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DD3214",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DD3214",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DD3214",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DD3214",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red span": {
                      "attributes": {
                        "color": "#DD3214",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-red": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#DD3214",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#DD3214",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#DD3214",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#DD3214",
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
                    "target": "screens/9550e684-29be-48d1-b353-96c88ed82888"
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
    } else if(jFirer.is("#s-Button-black")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black span": {
                      "attributes": {
                        "color": "#999999",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#999999",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#999999",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#999999",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#999999",
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
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black > .backgroundLayer": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
                        "border-radius": "5px 5px 5px 5px"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black span": {
                      "attributes": {
                        "color": "#434343",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-e69bead1-22e7-400f-a9f3-e3a6e001b456 #s-Button-black": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#404040",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#404040",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#404040",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#404040",
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
                    "target": "screens/1afa40df-54c0-4f7f-b0b1-fd425ba51556"
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