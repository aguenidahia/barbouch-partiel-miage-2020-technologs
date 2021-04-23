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