function showMsg() {
    var str = "Patient Registration Information:<br>"

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var name = "Name: " + fname + " " + lname + "<br>";

    var dobm = document.getElementById('dobmonth').value;
    var dobd = document.getElementById('dobday').value;
    var doby = document.getElementById('dobyear').value;
    var dob = "Date of Birth: " +dobm + "/" + dobd + "/" + doby + "<br>";

    var addr1 = document.getElementById('housenum').value;
    var addr2 = document.getElementById('apptnum').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zipcode').value;
    var country = document.getElementById('country').value;
    var addr = "Street Address: " + addr1 + " " + addr2 + "<br>" + city + ", " + state + " " + zip + "<br>" + country + "<br>"

    var email = document.getElementById('email').value;
    var hphone = document.getElementById('homep').value;
    var mphone = document.getElementById('mobilep').value;
    var aphone = document.getElementById('addp').value;
    var contact = "Email: " + email + "<br>Home Phone: " + hphone + "<br>Mobile Phone: " + mphone + "<br>Additional Phone: " + aphone + "<br>";


    document.getElementById("show").innerHTML = str + name + dob + addr + contact;

}