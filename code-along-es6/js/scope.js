const scopeBool = true;
var scopeVar = `this is the var variable in global`;
let scopeLet = `this is the let variable in global`;

function hello() {
  scopeVar = `var from function`;
  // console.log(scopeVar);
  scopeLet = `reassigned let from function`;
  // var scopeLet = `redeclared let from function`;
  console.log(scopeLet);

  if (scopeBool) {
    var scopeVar = `var from block within a function`;
    // var scopeLet = `redeclared let from block within a function`;
    scopeLet = `reassigned let from block within a function`;
    // console.log(scopeVar);
    console.log(scopeLet);
  }
}

hello();
// console.log(scopeVar);
console.log(scopeLet);

if (scopeBool) {
  // scopeVar = `var from block`;
  // let scopeLet = `redeclared let from block`;
  scopeLet = `reassigned let from block`;
  // console.log(scopeVar);
  console.log(scopeLet);
}

// console.log(scopeVar);
console.log(scopeLet);
