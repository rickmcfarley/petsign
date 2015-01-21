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
var public = preferences["public"]
var share = preferences["share"]


var button = buttons.ActionButton({
  id: "petition-signer",
  label: "Sign This Petition",
  icon: "./icon-16.png",
  onClick: signPetition
});

function signPetition(state) {
    signer = tabs.activeTab.attach({
      contentScriptFile: cscript
    });
    signer.port.emit("sign", fname, lname, email, ccode, address, pcode, message, public, share)
}
