import cors from 'kcors';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import net from 'net';
import mainRouter from './mainRouter.js';

const app = new koa();
app.use(bodyParser());
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms'));


app.use(mainRouter.routes()).use(mainRouter.allowedMethods());

var server = app.listen(3000, function () {
	let addr = <net.AddressInfo>server.address();
	console.log(`Mailing Service-v2 listening at http://${addr.address}:${addr.port}'`);
});
