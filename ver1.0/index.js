const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();
app.set('port', process.env.PORT || 8000);

app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
            (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(ip);
    res.send('Hello, World! : ' + ip + "," + new Date());
});

app.get('/health', (req, res) => {
    res.status(200).send();
});

app.get('/members', (req, res) => {
  connection.query('SELECT * from member', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.get('/members/:name', (req, res) => {
  connection.query('select * from member where name=\'' + req.params.name + '\'', (error, rows) =>{
    if(error) throw error;
    console.log('user detail info is : ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
