const Express = require('express');
const Cors = require('cors');
const Chokidar = require('chokidar');

const PORT = 3500;


const app = Express();

app.use(Cors());

app.listen(PORT, ()=> console.log('Server is running on PORT 3500'));

