const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

books.forEach(rent_books => {
  if (rent_books.rented > 0){
      console.log("tous les livres ont été au moins empruntés une fois")
    }
  else {
      console.log("tous les livres n'ont pas été au moins empruntés une fois")
    }
  }
);

console.log(`---------------------------------------------------`)


const rentedArray = books.map(book => book.rented); // Place les valeurs "rented" dans un array
const maxRentedValue = Math.max(...rentedArray); // Trouve la plus grande valeur
const maxRentedBook = books.find(book => book.rented === maxRentedValue); // Trouver le livre qui correspond à la plus grande valeur

console.log(`le livre le plus emprunté est "${maxRentedBook.title}" avec ${maxRentedValue} emprunts.`);

console.log(`---------------------------------------------------`)

const rerentedArray = books.map(book => book.rented); // Place les valeurs "rented" dans un array
const minRentedValue = Math.min(...rentedArray); // Trouve la plus grande valeur
const minRentedBook = books.find(book => book.rented === minRentedValue); // Trouver le livre qui correspond à la plus grande valeur

console.log(`le livre le moins emprunté est "${minRentedBook.title}" avec ${minRentedValue} emprunts.`);

console.log(`---------------------------------------------------`)

const book = books.find(book => book.id === 873495);

console.log(`Le livre avec l'id ${book.id} est "${book.title}".`);