import router from 'koa-router';

const mainRouter = new router();

mainRouter.get('/', async ctx => {
	ctx.body = "Mailing Service v2";
});

export default mainRouter;
