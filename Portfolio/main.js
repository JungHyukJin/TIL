let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  printAnother();

  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }

  console.log(childMessage);
}
printMessage();