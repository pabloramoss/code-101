const variableName = prompt('Ingrese el nombre de la variable que quiere convertir a camelcase');
let dashIndex = variableName.indexOf('-');
let underscoreIndex = variableName.indexOf('_');

console.log(dashIndex)
console.log(underscoreIndex)

const toCamelCase = ()=>{
  if(dashIndex>0){
    let variableWithoutDash = variableName.split('-').join('')
    let camelCase = `${variableWithoutDash[dashIndex]}`.toUpperCase();
    let newVariableName = variableWithoutDash.replace(variableWithoutDash[dashIndex], camelCase);

    console.log(`La variable ${variableName} ahora se llama ${newVariableName}`)

  }if(underscoreIndex>0){
    let variableWithoutDash = variableName.split('_').join('')
    let camelCase = `${variableWithoutDash[underscoreIndex]}`.toUpperCase();
    let newVariableName = variableWithoutDash.replace(variableWithoutDash[underscoreIndex], camelCase);

    console.log(`La variable ${variableName} ahora se llama ${newVariableName}`)

  }
}
//Esta funcion pasa a camelCase variables con solo un guion o guinbajo, no funciona con mas :(
