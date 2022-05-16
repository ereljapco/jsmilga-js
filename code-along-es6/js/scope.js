const scopeBool = true;
var scopeVar = `this is the var variable in global`;
let scopeLet = `this is the let variable in global`;
const SCOPECONST = `this is the const variable in global`;

function hello() {
  scopeVar = `var from function`;
  // console.log(scopeVar);
  // scopeLet = `reassigned let from function`;
  // var scopeLet = `redeclared let from function`;
  const SCOPECONST = `redeclared const from function`;
  // SCOPECONST = `reassigned const from function`;
  console.log(scopeLet);
  console.log(SCOPECONST);

  if (scopeBool) {
    var scopeVar = `var from block within a function`;
    // var scopeLet = `redeclared let from block within a function`;
    scopeLet = `reassigned let from block within a function`;
    const SCOPECONST = `redeclared const from block within a function`;
    // SCOPECONST = `redeclared const from block within a function`;
    // console.log(scopeVar);
    // console.log(scopeLet);
    console.log(SCOPECONST);
  }
}

hello();
// console.log(scopeVar);
// console.log(scopeLet);
console.log(SCOPECONST);

if (scopeBool) {
  scopeVar = `var from block`;
  // let scopeLet = `redeclared let from block`;
  // scopeLet = `reassigned let from block`;
  // SCOPECONST = `reassigned const from block`;
  const SCOPECONST = `redeclared const from block`;
  // console.log(scopeVar);
  // console.log(scopeLet);
  console.log(SCOPECONST);
}

// console.log(scopeVar);
// console.log(scopeLet);
console.log(SCOPECONST);
