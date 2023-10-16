function myFunction() {
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    if (
      (input1 == "archana" && input2 == "hello") ||
      (input1 == "rachana" && input2 == "hello") ||
      (input1 == "ricky" && input2 == "hello")
    ) {
      location.href = "index2.html";
    } else {
      console.log("use right credential");
    }
   
  }