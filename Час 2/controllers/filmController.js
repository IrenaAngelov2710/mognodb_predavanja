//* Vo ovoj kod go vcituvame modulot "Film" koj e definiran vo fajlot "filmModel.js"
const Film = require("../model/filmModel");

//* Ovaa f-ja se odnesuva kako da kreirame nov dokument
exports.createFilm = async (req, res) => {
  try {
    // const newFilm = new Film({
    //   naslov: "Avatar",
    //   zanr: "Avanturisticen",
    // });
    // newFilm.save();

    // create e metoda da zacuvame dokument vo edna kolekcija
    const newFilm = await Film.create(req.body);

    // res.status(201).json({
    //   status: "success",
    //   data: {
    //     film: newFilm,
    //   },
    // });

    res.send(newFilm);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

const recenica = "Ucime programiranje";

const vtoraRecenica = `Ucime i logika ${recenica}`;


// 127.0.0.1:10000/films?naslov=Titanik
//* Ovaa f-ja se odnesuva da ni gi prikaze site dokumenti
exports.getAllFilms = async (req, res) => {
  try {
    // pravime kopija od objektot query ne sakame da go modificirame originalnoto query
    const queryObj = { ...req.query };

    // ovoj objekt go konvertirame vo string
    let queryString = JSON.stringify(queryObj);

    // go konvertime vo string poradi sto mozeme da upotrebime metoda replace so koja metoda ke modificirame
    // go modificirame stringot
    queryString = queryString.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `$${match}`
    );

    // odkoga go modificrame go transformirame nazad vo objekt
    const query = JSON.parse(queryString);
    // find e metoda za da gi zememe site dokumenti od edna kolekcija
    // i barame prema toj objjekt
    const films = await Film.find(query);

    res.status(200).json({
      test: "Teeestt",
      status: "success",
      data: {
        films: films,
      },
    });

    // res.send(films);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//* Ovaa f-ja se odnesuva da zememe eden dokument fokusiran od data baza
//* Mozeme da go fokusirame preku id ili prema parametar sto sakame nie
exports.getFilm = async (req, res) => {
  try {
    //
    console.log(req.params);
    // findById e gotova metoda so koja se zema dokumentot koj odgovora na id-to od kolekcijata
    // const film = await Film.findById(req.params.id);

    // findOne metoda e metoda so koja zemame dokument prema paramater koj nas ni odgovara
    const film = await Film.findOne({ naslov: req.params.naslov });

    //Film.findOne({_id: req.params.id})
    //Film.findOne({nalov: req.params.naslov})

    res.status(200).json({
      status: "Success",
      data: {
        film,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//* Ovaa f-ja se odnesuva kako da azurirame informacii vo nekoj dokument
exports.updateFilm = async (req, res) => {
  try {
    const updatedFilm = await Film.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        updatedFilm,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//* Ovaa f-ja se odnesuva kako da izbriseme nekoj dokument
exports.deleteFilm = async (req, res) => {
  try {
    await Film.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

//? ZA DOMASNA DA SE KREIRA DATABAZA BLOGOVI
//? ime na kolekcija blogs
//? da ima create i getall funkcionlanost
//? shemata da e naslov, opis, ocenka, vreme, aftor
//? na ruta "/blogs" da se povikuva i da se kreira blog
//? i da inma najmalce 10 bloga

//? prodolzenie na dosegasnata domasna
//? da se kreira celosen crud sistem
//? za blog
