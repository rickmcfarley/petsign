var fname_field = document.getElementById("fname");
var lname_field = document.getElementById("lname");
var email_field = document.getElementById("email");
var address_field = document.getElementById("address");
var postalcode_field = document.getElementById("postalcode");
var message_field = document.getElementById("message");
var share_info_field = document.getElementById("share_info");
var public_field = document.getElementById("public");
var save_button = document.getElementById("save_settings");
save_button.addEventListener('click', function saveSettings() {
  new_fname = fname_field.value;
  new_lname = lname_field.value;
  new_email = email_field.value;
  new_address = address_field.value;
  new_postalcode = postalcode_field.value;
  new_message = message_field.value;
  new_share_info = share_info_field.value;
  new_public = public_field.value;
  self.port.emit("text-entered", new_fname, new_lname, new_email, new_address, new_postalcode, new_message);
}, false);

self.port.on("show", function onShow() {
  fname_field.focus();
});
