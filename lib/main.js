var preferences = require("sdk/simple-prefs").prefs;
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var cscript = data.url("filling-script.js");
var contextMenu = require("sdk/context-menu");
var fname = preferences["fname"]
var lname = preferences["lname"]
var email = preferences["email"]
var ccode = preferences["ccode"]
var pcode = preferences["pcode"]
var address = preferences["address"]
var message = preferences["message"]
var public_ = preferences["public_"]
var share = preferences["share"]

function signPetition(state) {
    signer = tabs.activeTab.attach({
      contentScriptFile: cscript
    });
    signer.port.emit("sign", fname, lname, email, ccode, address, pcode, message, public_, share)
}

var menuItem = contextMenu.Item({
  label: "Fill\\Sign Petition",
  contentScript: "self.on('click', function (){ self.postMessage(); });",
  onMessage: function () {
	  signPetition();
  }
});

