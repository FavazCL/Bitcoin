/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },

  //Route Currencies

  // GET route renders the 'list' method of CurrenciesController.
  'GET /v1/currencies': 'CurrenciesController.list',

  // GET route renders the 'get' method of CurrenciesController.
  'GET /v1/currencies/:id': 'CurrenciesController.get',

  // POST route renders the 'create' method of CurrenciesController.
  'POST /v1/currencies': 'CurrenciesController.create',

  // PATCH route renders the 'update' method of CurrenciesController.
  'PATCH /v1/currencies/:id': 'CurrenciesController.update',

  // DELETE route renders the 'delete' method of CurrenciesController.
  'DELETE /v1/currencies/:id': 'CurrenciesController.delete',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
