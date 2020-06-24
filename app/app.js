const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const handlebars = require('express-handlebars')
const app = express()
const urlencodeParser = bodyParser.urlencoded({ extended: false })
const sql = mysql.createConnection({
    host: 'localhost',
    user: 'patrick',
    password: 'Adm123456',
    port: '3306'
})
sql.query("use bdThrashWiki")

app.engine("handlebars", handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use('/css', express.static('css'))
app.use('/js', express.static('js'))
app.use('/img', express.static('img'))

app.get('/:status?', function (req, res) {
    if (!req.params.status) {
        res.render('index')
    } else {
        res.render('index', { msg: req.params.status })
    }
    // console.log(req.params.id)
})

app.get('/feed/:id/:idPost?', function (req, res) {
    let user;
    let postModal;
    sql.query("select * from tbuser where codUser = ?", [req.params.id], function (err, results, fields) {
        user = results;
    })
    sql.query("select * from tbPost where codPost = ?", [req.params.idPost], function(err, results, fields){
        postModal = results;
    })
    sql.query("select * from tbPost order by codPost desc", function(err, results, fields){
        res.render('feed', { posts: results, usuario: user, materia: postModal});
    })
})

app.post('/controllerCadastro', urlencodeParser, function (req, res) {
    sql.query("insert into tbUser values (null,?,?,?,?)", [
        req.body.user,
        req.body.nome,
        req.body.email,
        req.body.pwd
    ])
    sql.query("select max(coduser) as cod from tbuser", function (err, results, fields) {
        res.render('controllerCadastro', { data: results })
    })
    // console.log(req.body.user)
})

app.post('/controllerPost/:id', urlencodeParser, function(req, res){
    sql.query("insert into tbPost values (null, ?,?,?,?,?)", [
        req.body.title,
        req.body.resumPost,
        req.body.textPost,
        req.body.imgPost,
        req.params.id
    ])
    res.render('controllerPost', {cod: req.params.id})
})

app.post('/controllerLogin', urlencodeParser, function (req, res) {
    sql.query("select * from tbuser where usuario = ? and senha = ?", [req.body.userLogin, req.body.pwdLogin], function (err, results, fields) {
        res.render('controllerLogin', { data: results })
    })
})

app.listen(3000, function (req, res) {
    console.log("Conectado com sucesso")
})