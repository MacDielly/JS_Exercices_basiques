// Ben's method
function pyramid(input){
  const hash = "#"
  const space = " "
  var number = Number(input);
  let hashes = ""
  let symetry = ""
  let spaces = ""
  console.log("Et voilà le travail !");
  for(let x = 1; x <= number; x++){
    hashes = hash.repeat(x);
    symetry = (number + 1) - x ;
    spaces = space.repeat(symetry) ;
    console.log(spaces + hashes)
  }
}

input = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?") ;
pyramid(input)

// Jordan's method
// let star = "*";
// let space = " ";

// nombre=parseInt(prompt("Combien veux-tu d'étages ?"));

// for(var count = 1; count <= nombre; count++) {
//   let multistar = star.repeat(count)
//   let multispace = space.repeat(nombre - count);
//   console.log(multispace + multistar)
// }