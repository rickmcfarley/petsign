var preferences = require("sdk/simple-prefs").prefs;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var cscript = data.url("filling-script.js")
var fname = preferences["fname"]
var lname = preferences["lname"]
var email = preferences["email"]
var ccode = preferences["ccode"]
var pcode = preferences["pcode"]
var address = preferences["address"]
var message = preferences["message"]

var get_config = require("sdk/panel").Panel({
  contentURL: data.url("config.html"),
  contentScriptFile: data.url("get-config.js")
});


var button = buttons.ActionButton({
  id: "petition-signer",
  label: "Sign This Petition",
  icon: "./icon-16.png",
  onClick: getConfig
});

function getConfig(state) {
  get_config.show();
}

get_config.on("show", function() {
  get_config.port.emit("show");
});

get_config.port.on("text-entered", function (new_fname, new_lname, new_email, new_address, new_postalcode, new_message) {
  preferences["fname"] = new_fname;
  preferences["lname"] = new_lname;
  preferences["email"] = new_email;
  preferences["address"] = new_address;
  preferences["pcode"] = new_postalcode;
  preferences["message"] = new_message;
  get_config.hide();
});

function signPetition(state) {
    signer = tabs.activeTab.attach({
      contentScriptFile: cscript
    });
    signer.port.emit("sign", fname, lname, email, ccode, address, pcode, message, public, share)
}
