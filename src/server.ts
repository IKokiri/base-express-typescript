import app from './app';

const server = app.listen(3000, () => {
    console.log('alive');
});

export default server;
