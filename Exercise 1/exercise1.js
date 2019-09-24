function passCheck() {
  var p1 = document.getElementById("pass1").value;
  var p2 = document.getElementById("pass2").value;
  var ok = true;
  if(p1 != p2){
    alert("The passwords do not match!");
    ok = false;
  }
  if(p1.length < 8){
    alert("Password is too short! Must be 8 characters long.");
    ok = false;
  }

  if(ok == false){
    return false;
  } else {
    alert("Passwords match and are long enough!");
  }
}
