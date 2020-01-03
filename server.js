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
    let adddistrict = request.body.params.adddistrict;
    let birthday = request.body.params.birthday.substring(0, 10);
    let fullname = request.body.params.fullname;
    let birthplace = request.body.params.birthplace;
    let gender = request.body.params.gender;
    let nation = request.body.params.nation;
    let religion = request.body.params.religion;
    let phonenumber = request.body.params.phonenumber;
    let adddetail = request.body.params.adddetail;
    let fathername = request.body.params.fatherfullname || '';
    let mothername = request.body.params.motherfullname || '';
    let recievingorganization = request.body.params.recievingorganization;
    //let receivingaddress = request.body.params.receivingaddress;
    let STATE = 'CN';
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + dd + yyyy;
    let id = today + passportcount++;
    try {
        db.runSQL('PASSPORT', 'PASSPORT',
            `BEGIN
            INSERT_FORM(:id,:fullname,:gender,:birthday,:birthplace,:nation,
                :religion,:phonenumber,:addprovince,:adddistrict,:adddetail,
                :fathername,:mothername,:apoprovince,:state); COMMIT;
        END;`, [id, fullname, parseInt(gender), birthday, birthplace, nation,
            religion, phonenumber, addprovincename, adddistrict, adddetail,
            fathername, mothername, recievingorganization, STATE]);
        response.send('OK');
    }
    catch (err) {
        response.send(err);
    }
});

app.post('/passport/search', (request, response) => {
    let searchkey = request.body.params.searchkey;
    let forms = undefined;
    try {
        db.runSQL('PASSPORT', 'PASSPORT', 'SELECT * FROM FORM').then(res => {
            const find = res.rows.filter(f => f.FULLNAME.includes(searchkey));
            response.send(JSON.stringify(find));
        });
    }
    catch (err) {
        response.send(err);
    }
});