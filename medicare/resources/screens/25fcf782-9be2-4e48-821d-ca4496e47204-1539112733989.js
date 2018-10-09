jQuery("#simulation")
  .on("click", ".s-25fcf782-9be2-4e48-821d-ca4496e47204 .click", function(event, data) {
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
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red > .backgroundLayer": {
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
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red span": {
                      "attributes": {
                        "color": "#FD999A",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red": {
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
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red > .backgroundLayer": {
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
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Roboto-Regular',Arial"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red span": {
                      "attributes": {
                        "color": "#DD3214",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Roboto-Regular',Arial",
                        "font-size": "11.0pt"
                      }
                    }
                  },{
                    "#s-25fcf782-9be2-4e48-821d-ca4496e47204 #s-Button-red": {
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
                    "target": "screens/56de7bd8-f2b4-4b9d-be00-a3478d11f65e"
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