//DATA SECTION

const fieldCodes = [
  'W', 'U', 'B', 'R', 'G'
];

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
];

const optionsAvailable = [
  'All',0 , 1, 2, 3, 4, 5
];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

}

//array di oggetti
const cards = [
  //oggetto 1 = card 1
  {
    cardName: 'Grizzly Bears',
    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },

    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',

    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    }
  },
    //oggetto 2 = card 2
  {

    cardName: 'Sviluppatore guerriero',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

    score: {
      power: 5,
      toughness: 3
    }

  },
  //oggetto 3 = card 3
  {

    cardName: 'Anaba Shaman',

    cost: {
      genericCostNumber: 3,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Minotaur  Shaman',

    editionType: editions['SP'],

    description: 'Anaba Shaman infligge danno 1 verso un bersaglio creatura o giocatore',
    story: 'Prova a prendere questo toro per le corna',

    score: {
      power: 2,
      toughness: 2
    }

  },
  //oggetto 4 = card 4
  {

    cardName: 'Dancing Scimitar',

    cost: {
      genericCostNumber: 4,
      costFields: [],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[3],
    cardObject: 'Spirit',

    editionType: editions['BL'],

    description: 'Vola (questa creautare non può essere fermata eccetto da una creatura volante )',
    story: 'Una spada che non ha mai conosciuto il fodero, un\'impugnatura che non ha mai conosciuto mano',

    score: {
      power: 1,
      toughness: 5
    }

  },
  //oggetto 5 = card 5
  {

    cardName: 'Bloodfire Colossus',

    cost: {
      genericCostNumber: 6,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },

    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Giant',

    editionType: editions['BL'],

    description: 'Sacrifica Bloodfire Colossus: Bloodfire Colossus infligge danno 6 ad ogni creatura e ad ogni giocatore.',
    story: 'Ha messo tutta la forza per contenere il fuoco',

    score: {
      power: 5,
      toughness: 5
    }

  },
];


//LOGICAL SECTION

//filtro array attraverso la proprietà power
function filterByPower(powerValue, array){
  const filteredArray = array.filter((element) =>{
    return element.score.power === powerValue
  });
  return filteredArray;
};


//funzione per stampare una lista di elementi nel DOM
function printListItemById(DOMElementId, array){
  let listItem = document.getElementById(DOMElementId);
  array.forEach((element, index) => {
    listItem.innerHTML += `<li>${element.cardName}</li>`
  });
};

//funzione per stampare le option dell'utente
function printOptionsByClass(className, classIndex, arrayOption){
  const options = document.getElementsByClassName(className)[classIndex];
  arrayOption.forEach((element, index) => {
    options.innerHTML += `<option value="element">${element}</option>`
  });
};





//OUTPUT SECTION

printOptionsByClass("select-by-power", 0, optionsAvailable);
