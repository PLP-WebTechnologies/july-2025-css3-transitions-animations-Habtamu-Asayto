


/**With Parameter */
function anotherAnimation(num1, num2) {
  var sum = num1 + num2;
  console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);
  return sum;
}
anotherAnimation(5, 10); /**can display 'The sum of 5 and 10 is: 15' */

/**With local variable */
function withLocalVar() {
  var localVar = " Sample for local variable in javascript";
  console.log(localVar);
}
/** */
withLocalVar(); /**can display 'Sample for local variable in javascript' */
/*console.log(localVar); /** Error: localVar is not defined */

/**With global variable */
var globalVar =
  " On Javascript which is the most popular language in the world";
function withGlobalVar() {
  const varr = document.getElementById("varr");
  varr.innerHTML = varr.innerHTML + globalVar;
  if (varr.style.display === "none") {
    varr.style.display = "block";
  } else varr.style.display = "none";
}