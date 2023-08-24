//* Ovaa linija kod se koristi za povrzuvanje i interakcija so MongoDB baza na podatoci koristejki go Mongoose modulot
const mongoose = require("mongoose");

//* Ovoj kod definira Mongoose sema i model za model na podatoci "Film" za koristenje so MongoDB bazata na podatoci. Ova e tipicen nacin za definiranje na model i sema na Mongoose
//* "const filmSchema = new mongoose.Schema({ ... });" - Ovaa linija definira Mongoose sema za "Film" modelot. Semata opisuva kako ke izgledaat podatocite za film vo bazata na podatoci. Sekoj film ima polinja "naslov", "zanr", "ocenka" i "vreme"
//* "type: String" i "type: Number" - se tipovite na podatoci koi gi koristi sekoe pole
//* "required: [true, "Mora da ima naslov"]" i "required: [true, "Mora da ima zanr"]" - definiraat deka polinjata "naslov" i "zanr" se zadolzitelni i dokolku ne se zadade vrednost, ke se vrati greska so poraka "Mora da ima naslov" ili "Mora da ima zanr"
//* "default: 3" - definira standardna vrednost za "ocenka", vo poleto ako ne se zadade specificna vrednost. Vo ovoj slucaj, standardnata vrednost e 3
//* "default: Date.now" - definira standardna vrednost za "vreme", vo poleto ako ne se zadade specificna vrednost. Vo ovoj slucaj, standardnata vrednost e momentalnoto vreme na kreiranje na zapisot
//* "const Film = mongoose.model("Film", filmSchema);" - Ovaa linija definira Mongoose model na baza na definiranata sema "filmSchema"
//* "module.exports = Film;" -  Ovaa linija go eksportira modelot "Film" od modulot
const filmSchema = new mongoose.Schema({
  naslov: {
    type: String,
    required: [true, "Mora da ima naslov"],
  },
  zanr: {
    type: String,
    required: [true, "Mora da ima zanr"],
  },
  ocenka: {
    type: Number,
    default: 3,
  },
  vreme: {
    type: Date,
    default: Date.now,
  },
});

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
