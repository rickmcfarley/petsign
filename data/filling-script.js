// This script fills the fields of a petition if it finds them
self.port.on("sign", function(fname, lname, email, ccode, address, pcode, message, public_, share){

// Preference values
    var user_fname = fname
    var user_email = email
    var user_lname = lname
    var user_ccode = ccode
    var user_address = address
    var user_pcode = pcode
    var user_message = message
    var user_public = public_
    var user_share = share
  
// Convert bools for checkboxes
    if (user_public == true){
        user_public == "checked";
    }
    if (user_public == false){
        user_public == "unchecked";
    }
    if (user_share == true){
        user_share == "checked";
    }
    if (user_share == false){
        user_share == "unchecked";
    }
   
// Common fields from petitions on websites
    var form_fname = document.getElementsByName("first_name")[0]
    var form_lname = document.getElementsByName("last_name")[0]
    var form_email = document.getElementsByName("email")[0]
    var form_ccode = document.getElementsByName("country_code")[0]
    var form_address = document.getElementsByName("address")[0]
    var form_pcode = document.getElementsByName("postal_code")[0]
    var form_message = document.getElementsByName("message")[0]
    var form_public = document.getElementById("public")
    var form_share = document.getElementById("share_info")
    var form_FName = document.getElementsByName("First_Name")[0]
    var form_LName = document.getElementsByName("Last_Name")[0]
    var form_Email = document.getElementsByName("Email")[0]
    var form_Zip = document.getElementsByName("Zip")[0]

// Check for form fields and fill with preference data
    if (form_FName != null){
        form_FName.value = user_fname;
    }
    if (form_LName != null){
        form_LName.value = user_lname;
    }
    if (form_Email != null){
        form_Email.value = user_email;
    }
    if (form_Zip != null){
        form_Zip.value = user_pcode;
    }
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
