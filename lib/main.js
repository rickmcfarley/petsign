var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var data = require("sdk/self").data;
var cscript = data.url("filling-script.js")


var button = buttons.ActionButton({
  id: "petition-signer",
  label: "Sign This Petition",
  icon: "./icon-16.png",
  onClick: signPetition
});

function signPetition(state) {
    tabs.activeTab.attach({
      contentScriptFile: cscript
    });
}
