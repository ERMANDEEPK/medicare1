(function(window, undefined) {
  var dictionary = {
    "0371474f-08bb-4611-af12-6948e36fd915": "sign up",
    "709fd64e-eb6d-460d-8518-37d6aff697c3": "REPORT1IMG1",
    "6f0330c3-914e-4e4b-89a6-8de9955307e4": "icon screen",
    "56de7bd8-f2b4-4b9d-be00-a3478d11f65e": "REPORTIMAGES",
    "af6addc0-c39f-4a50-8221-8f6c1502494a": "profile",
    "7274ec9d-774b-465e-aaa3-83dcf0222ec8": "REPORT 1  IMG 2",
    "0144f4a8-6404-455a-ae10-a00280491327": "ASTHMA ATTACK",
    "ce10dc06-8edd-43a7-816b-e67b228f35bd": "REPORT 1 IMG 3",
    "9fef1405-80aa-4b61-967d-3a9c60f84b55": "PLAYER LIST",
    "0a0b5f76-a471-40ab-ba73-a1d5799505f6": "more expo",
    "13794e04-fb13-4265-9d0a-5c3b460d5dad": "CAMERA ROLL 3",
    "afc937cf-a9fc-4244-adb7-b53752ef85aa": "med list +",
    "1b519411-f360-42e7-a5dd-f47d5d1741d6": "CAMERA ROLL 2",
    "184c7ecd-a9e1-4baa-a483-0c58508d67e4": "HEART ATTACK",
    "9550e684-29be-48d1-b353-96c88ed82888": "emergency",
    "69f7a382-c495-45f7-9545-2b118e632d07": "ellergies",
    "1afa40df-54c0-4f7f-b0b1-fd425ba51556": "CHOKING",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "405f8862-fae9-4a85-9805-e1a51128e2ab": "reminder added",
    "e3640b5a-58d3-4456-a8ed-c092b27032ab": "next",
    "86b202cd-b0ae-4783-9b7f-8cbfeac9921e": "diabetics emergency",
    "7848154e-b43f-4456-96c4-84152fefb12c": "homepage",
    "25fcf782-9be2-4e48-821d-ca4496e47204": "CAMERA ROLL",
    "3b7ef5cd-e491-46c2-9b2d-250f40d4541a": "notifications",
    "3bbfeb68-d6c5-4337-bf11-e4481fff328d": "profile2",
    "22ef671a-fda2-47ac-9dba-6e905c8d402d": "HEAD INJURY",
    "a2956106-f07e-48f6-a4bc-a1b06f111302": "list of doctors",
    "0c53bc2a-a1f8-4989-8c17-98ab50d46c0b": "broken bone",
    "e8c3336f-623e-4401-8ecb-4d380d06fb00": "distress",
    "6aaca748-e0d4-468a-afbc-e253c14618f7": "welcome",
    "e69bead1-22e7-400f-a9f3-e3a6e001b456": "burns",
    "d7ad0736-2d40-492c-bfa6-861a2c07476c": "ADD MED",
    "91264d5c-4391-4e53-b93c-6cfd2c0946cd": "SIGN IN",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);