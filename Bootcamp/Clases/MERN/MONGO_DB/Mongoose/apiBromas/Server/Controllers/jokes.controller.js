//importamos el modelo que creamos en user.model
const Joke = require("../models/jokes.model");


module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allDaJokes => res.json({ joke: allDaJokes }))
    .catch(err => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.findOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ joke: oneJoke }))
		.catch(err => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newJoke => res.json({joke: newJoke }))
    .catch(err => res.json({ message: "Algo salió mal", error: err}));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Algo salió mal", error: err }));
};
