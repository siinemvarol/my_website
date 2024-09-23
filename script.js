function smallerText() {

}

function biggerText() {

}

function randomColors() {

}

function smallerPicture() {

}

function formSubmit() {
    let elem_first_name = document.getElementById("first_name").value;
    let elem_last_name = document.getElementById("last_name").value;
    let elem_email_address = document.getElementById("email_address").value;

    //console.log(elem_first_name);
    //console.log(elem_last_name);
    //console.log(elem_email_address);

    alert(`Hello ${elem_first_name} ${elem_last_name}. Your email ${elem_email_address} has been added to the mailing list.`);
}