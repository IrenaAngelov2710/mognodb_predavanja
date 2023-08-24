//* Ovaa linija na kod go vcituva modulot "express" vo Node.js aplikacijata
const express = require("express");
//* Ovaa linija na kod go vcituva modulot "mongoose" vo Node.js aplikacijata
const mongoose = require("mongoose");
//* Mongoose e biblioteka za modeliranje na podatoci vo MongoDB baza, koja e bazirana vrz MongoDb i obezbeduva povisoko nivo na apstrakcija slicno kako sto e express za Node.js

//* Vo ovaa linija na kod se vcituva modulot "filmController" od lokalnata direktorija na Node.js aplikacijata
const filmController = require("./controllers/filmController");

//* Ovaa linija kreira nova ekspress aplikacija so pomos na f-jata "express()"
const app = express();

//* Se parsiraat informaciite sto gi prakame od forma od frontend
app.use(express.urlencoded({ extended: true }));

//* So metodot connect vospostavuvame konekcija so bazata na podatoci MongoDB
//* 1 prviot argument e urlto do nasata data baza
//* 2 vtoriot argument e konfiguracijata za taa data baza
mongoose
  .connect(
    "mongodb+srv://kitanovskairena93:IrenaAngelov@cluster0.ivregad.mongodb.net/bazaFilmovi?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    //* se povikuva then metodot so koj metod ako e uspesno povrzana konzoilirame "Succesfull connection!"
    console.log("Succesfull connection!");
  })
  .catch((err) => {
    //* ili ako ima greska go pisuvame metodot catch so koj metod kje konzolirame greskata
    console.log(err);
  });
  
//* Ova oznacuva kako ke odgovori aplikacijata na razlicni HTTP baranja koi doagaat na odredeni pateki na serverot
//* Koga ke se napravi GET baranje na patekata "/films", se povikuva f-jata "filmController.getAllFilms" koja treba da gi vrati site filmovi
//* Koga ke se napravi POST baranje na patekata "/films", se povikuva f-jata "filmController.createFilm" koja treba da kreira nov film
//* Koga ke se napravi GET baranje na patekata "/films/:naslov", kade ":naslov" e parametar za naslovot na filmot, se povikuva f-jata "filmController.getFilm" koja treba da go vrati filmot so odreden naslov
//* Koga ke se napravi PATCH baranje na patekata "/films/:id", kade ":id" e parametar za identifikacija na filmot, se poavikuva f-jata "filmController.updateFilm" koja treba da azurira informacii za filmot
//* Koga ke se napravi DELETE baranje na patekata "/films/:id", kade ":id" e parametar za identifikacija na filmot, se povikuva f-jata "filmController.deleteFilm" koja treba da go izbrise filmot
app.get("/films", filmController.getAllFilms);
app.post("/films", filmController.createFilm);
app.get("/films/:naslov", filmController.getFilm);
app.patch("/films/:id", filmController.updateFilm);
app.delete("/films/:id", filmController.deleteFilm);

//* Ovaa linija ja startuva ekspress aplikacijata da slusa na porta 10000
//* Ako ima greska pri startuvanje na serverot, se prikazuva greska na konzolata. Vo sprotivno se ispisuva porakata "Application running", znaci deka serverot e uspesno startuvan i e spremen da gi prima baranjata od klientite
app.listen(10000, () => {
  console.log("Application running");
});

// so metodot Schema definirame sablon so struktura na nasata data baza
// sozdavame primerok od toj objekt sto mozeme da go koristime za da definirame sema
// const filmSchema = new mongoose.Schema({
//   naslov: {
//     type: String,
//     required: [true, "Mora da ima naslov"],
//   },
//   zanr: {
//     type: String,
//     required: [true, "Mora da ima zanr"],
//   },
//   ocenka: {
//     type: Number,
//     default: 3,
//   },
//   vreme: {
//     type: Date,
//     default: Date.now,
//   },
// });

//* Metodot mongoose.model() zema dva argumenti: imeto na kolekcijata i objektot na semata so koja ja definiravme strukturata na kolekcijata
// const Film = mongoose.model("Film", filmSchema);

// kreirame nova instanca od Film modelot
// const testFilm = new Film({
//   naslov: "Avatar",
//   zanr: "Avanturisticen",
// });

// async function saveFilm() {
//   try {
//     await testFilm.save();
//     console.log("Film saved successfully");
//   } catch (err) {
//     console.log(err);
//   }
// }

// saveFilm();
