const scopeBool = true;
var scopeVar = `this is the var variable in global`;

function hello() {
  scopeVar = `var from function`;
  console.log(scopeVar);
  if (scopeBool) {
    // var scopeVar = `var from block within a function`;
    scopeVar = `var from block within a function`;
    console.log(scopeVar);
  }
}

hello();
console.log(scopeVar);

if (scopeBool) {
  var scopeVar = `var from block`;
  console.log(scopeVar);
}

console.log(scopeVar);
