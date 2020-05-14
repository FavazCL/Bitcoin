/**
 * CurrenciesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  //List all currencies.
  list: (req, res) => {
    Currencies.find().exec((err, currencies) => {
      if (err) { return res.send(500, err); }

      return res.send({ currencies: currencies });
    });
  },

  //List a specific currency.
  get: (req, res) => {
    Currencies.findOne({ _id: req.params.id }).exec((err, currency) => {
      if (err) { return res.send(500, { err: err }); }

      return res.send({ currency: currency });
    });
  },

  //Create a currency.
  create: (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const code = req.body.code;
    const price = req.body.price;
    const lastUpdate = req.body.lastUpdate;

    Currencies.create({
      name: name, description: description, code: code, price: price,
      lastUpdate: lastUpdate
    }).exec((err) => {
      if (err) { return res.send(500, { err: err }); }

      return res.send({ 'status': 'Created successfully' });
    });
  },

  //Update a currency.
  update: (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const code = req.body.code;
    const price = req.body.price;
    const lastUpdate = req.body.lastUpdate;

    Currencies.update({ _id: req.params.id }, {
      name: name, description: description,
      code: code, price: price, lastUpdate: lastUpdate
    }).exec((err) => {
      if (err) { return res.send(500, { err: err }); }

      return res.send({ 'status': 'Successfully updated' });
    });
  },

  //Delete a currency.
  delete: (req, res) => {
    Currencies.destroy({ id: req.params.id }).exec((err) => {
      if (err) { return res.send(500, { err: err }); }

      return res.send({ 'status': 'Successfully deleted' });
    });
  }
};
