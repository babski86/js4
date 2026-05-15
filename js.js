import { data } from "./meorejs.js";
console.log("                  davaleba1");
const davaleba1 = {
  elementebi: [
    {
      name: "babuci",
      age: 20,
      height: 180,
      misShesaxeb: "",
    },
    {
      name: "babuci2",
      age: 210,
      height: 1280,
      misShesaxeb: "",
    },
    {
      name: "babuci3",
      age: 320,
      height: 1810,
      misShesaxeb: "bla bla bla",
    },
    {
      name: "babuci4",
      age: 220,
      height: 1580,
      misShesaxeb: "",
    },
    {
      name: "babuci5",
      age: 2120,
      height: 15840,
      misShesaxeb: "blu blu blu",
    },
  ],
};

const isStringEmpty = (text) => {
  if (text.length === 0) {
    return true;
  } else {
    return false;
  }
};
davaleba1.elementebi.forEach((item) => {
  const shedegi = isStringEmpty(item.misShesaxeb);
  console.log(shedegi);
});
console.log("                  davaleba2");

const cursi = 2.76;
const davaleba2 = {
  products: [
    {
      kamputeri: "lenovo",
      price: 1000,
    },
    {
      kamputeri: "asus",
      price: 2000,
    },
    {
      kamputeri: "acer",
      price: 3000,
    },
  ],
};
const convertToGel = (dolari, kursi) => {
  return kursi * dolari;
};
const kursiLarshi = davaleba2.products.map((product) => {
  return convertToGel(product.price, cursi);
});
console.log(kursiLarshi);

console.log("                  davaleba3");
const davaleba3 = {
  ragaceebi: [
    {
      country: "georgia",
      localCurrency: "GEL",
    },
    {
      country: "russia",
      localCurrency: "RUB",
    },
    {
      country: "usa",
      localCurrency: "USD",
    },
    {
      location: "europian union",
      localCurrency: "EUR",
    },
  ],
};
const currencies = (code) => {
  if (code === "GEL") {
    return "Georgia";
  }

  if (code === "USD") {
    return "United States";
  }
  if (code === "EUR") {
    return "European Union";
  } else {
    return "Unknown currency";
  }
};
const davalebaSami = davaleba3.ragaceebi.map((valuta) => {
  return currencies(valuta.localCurrency);
});
console.log(davaleba3);
console.log("                  davaleba4");
const didiAsoebi = {
  characters: [
    {
      name: "BADRI",
      yearOfBirth: 1980,
    },
    {
      name: "SERGO",
      yearOfBirth: 1990,
    },
    {
      name: "JAMBULI",
      yearOfBirth: 2000,
    },
    {
      name: "DODO",
      yearOfBirth: 2010,
    },
  ],
};
const patalaAsoebi = (uppercase) => {
  const alphabet = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "ჯ",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "ს",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "ყ",
    Z: "z",
  };

  let axaliSaxeli = "";
  for (let i = 0; i < uppercase.length; i++) {
    axaliSaxeli += alphabet[uppercase[i]];
  }
  return axaliSaxeli;
};
const shedegi = didiAsoebi.characters.map((character) => {
  return patalaAsoebi(character.name);
});
console.log(shedegi);
console.log("                  davaleba5");
const davaleba5 = [500, 100, 200, 32, 564, 32, 4123, 642, 4321, 23, 5, 32, 52, 35];
const filtriRicxvebis = (sia) => {
  return sia.filter((number) => {
    return number > 100;
  });
};
const shedegi2 = filtriRicxvebis(davaleba5);
console.log(shedegi2);
console.log("                  davaleba6");

function lowPrice(sia) {
  let pirveliElementi = sia[0];
  sia.forEach((element) => {
    if (element.price < pirveliElementi.price) {
      pirveliElementi = element;
    }
  });
  return pirveliElementi;
}
const result = lowPrice(data.products);
console.log(result);
console.log("                  davaleba7");
const users = [
  { id: "user_101", name: "Anu", age: 20 },
  { id: "user_102", name: "Badri", age: 25 },
  { id: "user_103", name: "Giorgi", age: 30 },
];
const findById = (masivi, iditDzebna) => {
  return masivi.find((elementi) => {
    return elementi.id === iditDzebna;
  });
};
console.log(findById(users, "user_103"));
