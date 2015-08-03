'use strict';

import koa from 'koa';
import nunjucksConfig from 'config/initializers/nunjucks';
import middlewaresConfig from 'config/initializers/middlewares';


import Engine from './engine/index';


const engine = new Engine()
engine.start()

const app = engine.app;

middlewaresConfig(app);
nunjucksConfig(app);

// response
app.use(function* () {
  this.body = this.render('application/index.html');
});

export default app;