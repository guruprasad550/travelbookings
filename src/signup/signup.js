let one = document.querySelector("#sbt");
one.addEventListener("click", form);
function form() {
  let dts = document.querySelector("#table");
  let row = dts.insertRow();
  let names = document.querySelectorAll(
    "#InputFirstName,#inputlastname,#inputemail,#inputpassword,#inputconfirmpassword,input[name='gender']:checked,#DOB,#inputadress,#state,#District"
  );
  for (let i = 0; i < names.length; i++) {
    let n = row.insertCell();
    n.innerText = names[i].value;
  }
}
// let names = document.querySelectorAll(
//   "#inputfirstname,#inputlastname,#inputemail,#inputpassword,#inputconfirmpassword,#inputgender,#inputdateofbirth,#inputadress,#state,#District"
// );
