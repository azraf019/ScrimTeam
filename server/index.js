const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const router = require('./router');
const bodyParser = require('koa-bodyparser');


app.use(cors());
app.use(bodyParser());
app.use(router.routes());




const port = 3030;
app.listen(port);
console.log(`Server listening on port ${port}`);
