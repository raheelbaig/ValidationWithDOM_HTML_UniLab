function myFunction() {
    let x = document.getElementById("numb").value;
    let text;
    if (x="") {
      text = "Input not valid";
    } else {
      text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
  }