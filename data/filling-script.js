var user_fname = "Rick"
var form_fname = document.getElementsByName("first_name")[0]
var user_lname = "McFarley"
var form_lname = document.getElementsByName("last_name")[0]
var user_email = "rickmcfarley@gmail.com"
var form_email = document.getElementsByName("email")[0]
var user_ccode = "US"
var form_ccode = document.getElementsByName("country_code")[0]
var user_address = "50 Lang Pond rd"
var form_address = document.getElementsByName("address")[0]
var user_pcode = "03894"
var form_pcode = document.getElementsByName("postal_code")[0]
var user_message = ""
var form_message = document.getElementsByName("message")[0]
var user_public = false
var form_public = document.getElementById("public")
var user_share = false
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
