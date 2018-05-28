// function validateInput(emailAddress, phoneNumber)

function validateNumber(e, lenght = 10) {
    var re = "^[() 0-9]{0,"+lenght+"}$";
    var objectStringValue = "" + e.value; //convert to string
    if(objectStringValue.search(re)<0) {
        e.value = e.oldValue ? e.oldValue + "" : "";
    }
    e.oldValue = "" + e.value;
}