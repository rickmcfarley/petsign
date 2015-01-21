var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var cscript = data.url("filling-script.js")
var fname = "Richard"
var lname = "McFarley"
var email = "rickmcfarley@metrocast.net"
var ccode = "US"
var pcode = "03894"
var address = "50 Lang Pond Rd"
var message = ""
var public = true
var share = true


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
