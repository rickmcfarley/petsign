// This script fills the fields of a petition if it finds them

self.port.on("sign", function(fname, lname, email, ccode, address, pcode, message, public_, share){

  var user_fname = fname
  var user_email = email
  var user_lname = lname
  var user_ccode = ccode
  var user_address = address
  var user_pcode = pcode
  var user_message = message
  var user_public = public_
  var user_share = share
  var form_fname = document.getElementsByName("first_name")[0]
  var form_lname = document.getElementsByName("last_name")[0]
  var form_email = document.getElementsByName("email")[0]
  var form_ccode = document.getElementsByName("country_code")[0]
  var form_address = document.getElementsByName("address")[0]
  var form_pcode = document.getElementsByName("postal_code")[0]
  var form_message = document.getElementsByName("message")[0]
  var form_public = document.getElementById("public_")
  var form_share = document.getElementById("share_info")
  
  if (form_fname != null) {
      form_fname.value = user_fname;
  }
  if (form_lname != null) {
      form_lname.value = user_lname;
  }
  if (form_email != null) {
      form_email.value = user_email;
  }
  if (form_ccode != null) {
      form_ccode.value = user_ccode;
  }
  if (form_address != null) {
      form_address.value = user_address;
  }
  if (form_pcode != null) {
      form_pcode.value = user_pcode;
  }
  if (form_message != null) {
      form_message.value = user_message;
  }
  if (form_public != null) {
      form_public.checked = user_public;
  }
  if (form_share != null) {
      form_share.checked = user_share;
  }
});
