const app = require("express")();
const List = require("./models/List");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const passport = require("./config/passport")();
const userController = require("./controllers/users.js");

app.use("/users", userController);

app.use(passport.initialize());

app.get("/", (req, res) => {
  List.find({}).then((lists) => {
    res.json(lists);
  });
});

app.get("/:song", (req, res) => {
  List.find({ Song: req.params.song }).then((list) => {
    res.json(list);
  });
  console.log(req.params.song);
});

app.get("/name/:name", (req, res) => {
  List.find({ Name: req.params.name }).then((lists) => {
    res.json(lists);
  });
});

app.post("/", (req, res) => {
  console.log(req.body);
  List.create(req.body).then((list) => {
    res.json(list);
  });
});

app.put("/:id", function (req, res) {
  List.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    (list) => {
      res.json(list);
    }
  );
});

app.delete("/:id", function (req, res) {
  List.findOneAndRemove({ _id: req.params.id }).then((list) => {
    res.json(list);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
