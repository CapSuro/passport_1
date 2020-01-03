const Express = require('express');
const Cors = require('cors');
const bodyParser = require('body-parser');
const provinceServer = require('./provincesServer')();
const Database = require('./Database');

let passportcount = 0;


const PORT = 3500;


const app = Express();
const db = new Database();

app.use(Cors()); app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(PORT, () => console.log('Server is running on PORT 3500'));

app.get('/', (request, response) => {
    response.send('Hello Motherf*cker!');
});

app.post('/passport/post', (request, response) => {
    let addprovince = request.body.params.addprovince;
    let addprovincename = provinceServer.filter(p => p.value === addprovince)[0].name;
    let birthday = request.body.params.birthday.substring(0, 10);
    let fullname = request.body.params.fullname;
    let birthplace = request.body.params.birthplace;
    let gender = request.body.params.gender;
    let nation = request.body.params.nation;
    let religion = request.body.params.religion;
    let phonenumber = request.body.params.phonenumber;
    let adddetail = request.body.params.adddetail;
    let fathername = request.body.params.fathername || '';
    let mothername = request.body.params.mothername || '';
    let recievingorganization = request.body.params.recievingorganization;
    let receivingaddress = request.body.params.receivingaddress;
    let STATE = 'CN';
    let result = db.runSQL('PASSPORT', 'PASSPORT', 'SELECT * FROM FORM ');
    result.then(res => console.log(res));
    response.send('OK Man!');
});