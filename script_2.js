let user_entry = "";
user_entry = prompt("De quel nombre veux-tu calculer la factorielle ?");
function fact(user_entry){
  var i, user_entry, f = 1;

  for(i = 1; i <= user_entry; i++)  
  {
    f = f * i;   // ou f *= i;
  }  
  return f;
}

console.log(`Le résultat est : ${fact(user_entry)}`);