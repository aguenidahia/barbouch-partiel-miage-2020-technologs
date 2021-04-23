// ---- EXPRESS JS - Framework
let express = require("express"),
  app = express();

// --- Config Express
// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require("body-parser"),
  busboy = require("connect-busboy"),
  helmet = require("helmet");

// -- Recommandation secu d'expressJs
app.use(helmet());
app.disabled("x-powered-by");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(busboy());

// Connection base de donnée
let mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
let database = mongoose.connect("mongodb://mongo/demo", {
  promiseLibrary: require("bluebird"),
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Charger le model
const JeuxModel = require("./jeuxvideos");
const Jeux = mongoose.model("Jeux");

// LIST ROUTE ou EndPoint
// ------------------------
// -- Listes des jeux
app.get("/jeux", function (req, res) {
  Jeux.find({}).then(
    (jeu) => {
      res.status(200).json(jeu);
    },
    (err) => {
      res.status(400).send(err);
    }
  );
});

// -- Consulter un jeu
app.get("/jeux/:idJeu", function (req, res) {
  Jeux.findOne({ id: req.params.idJeu }).then(
    (jeu) => {
      if (jeu) {
        res.status(200).json(jeu);
      } else {
        res
          .status(404)
          .json({ message: "Game not found - " + req.params.idJeu });
      }
    },
    (err) => {
      res.status(400).send(err);
    }
  );
});

// -- Upload Jeu
app.post("/jeux", function (req, res) {
  // -- Create Classique
  let myGame = new Jeux(req.body);
  myGame.id = myGame._id;

  myGame.save().then(
    (jeu) => {
      res.status(200).json(jeu);
    },
    (err) => {
      res.status(400).send(err);
    }
  );
});

// ------------------------
// START SERVER
// ------------------------

// -- Gestion 404
app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});

app.listen(3000, function () {
  console.info("HTTP server started on port 3000");
});
