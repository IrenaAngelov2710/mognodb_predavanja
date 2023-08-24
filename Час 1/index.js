//* Database - an organized collection of data; a structured set of data in a computer especially one that is accurate in various ways.
// Se sto gledame na net se e povleceno od database; pr na youtube videata, na website site statii
// Dizajnot go pravime so html, css, react, a site statii se povlekuvaat od nekoja databaza
// Databazata sluzi da obezbedi strukturiran nacin na spravuvanje so informaciite

//* 2 glavni tipovi: relaciona i nerelaciona; SQL i NoSQL

//! Relaciona (SQL) databaza
// se osnovaat na relacioniot model, se skladiraat vo tabeli, vo redovi i koloni
// SQL - strukturen query language za manipulacija na podatoci
// sekoj podatok ima svoj kluc, ID

//! Nerelaciona (NoSQL) baza
// obezbeduva nekolku prednosti; no ima i nedostatoci
// fleksibilen model na podatoci, se osnova na dokument na mongo, ovozmozuva fleksibilen dizajn na sema
// ni ovozmozuva nas lesno da gi menuvame podatocite

//! MongoDB databaza ovozmozuva samite dokumenti da se skladiraat vo databaza
// poddrzuva vertikalno struktuiranje; podatocite se kreiraat vo realno vreme
// baziran na dokumenti, lesno za ucenje i koristenje
// MQL - mongodb query language

//* AGREGACIJA vo databaza e statistika za nekoja databaza sto klientot ke go bara od nas
// pr. turisticka agencija databaza, 30 turi, bara da im kazeme koj mesec ima najveke prodazbi, od kade se lugeto itn

// Ke go ucime Mongoose; framework na MongoDB
// Se koristi MongoDB deka e slicen na json file; se vika kolekcija
// bso file - se vika kaj mongodb

// Vo edna kolekcija se sodrzat poveke dokumenti (poveke studenti)
// Vo dokumentit imame primaren kluc, unique ID so vrednost za toj kluc: Isto taka imame other fileds with values