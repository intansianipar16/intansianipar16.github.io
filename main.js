function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Name and Email must be filled out");
    return false;
  } else {
    alert("Form submitted successfully!");
    return true;
  }
}
