const express = require('express')
const path = require("path")
const app = express()

require("./db/conn")

const create = require("./models/create")
const add = require("./models/add")
const { error } = require('console')
const Create = require('./models/create')

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set("view engine", "hbs")

app.get('/', (req, res) =>{
    res.render('home')
})

app.get('/create', (req, res) =>{
    res.render('create')
})

app.get('/login', (req, res) =>{
    res.render('login')
})

app.get('/viewstudent', async (req,res) => {
    try {
      const results = await add.find({}, {__v: 0, _id: 0})  
      res.send(results)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

app.get('/add', (req, res) =>{
    res.render('add')
})

app.post("/create", async(req,res) =>{
    try{
        const addEmployee = new create ({
            email:req.body.email,
            password:req.body.password
        })       
        console.log(addEmployee)
        const usered = await addEmployee.save()
        res.status(201).render('afterlogin')
    }catch(err){
        res.status(404).send("email can not be duplicate")
        console.log("data can't store")
    }
})

app.post("/login", async(req, res) =>{
    try {
         
             const email = req.body.email;
             const password = req.body.password;
     
             const useremail = await Create.findOne({email:email});
            
             if(useremail.password === password){
                res.render('afterlogin')
             }else{
                res.send("invalid Password Details"); 
             }
         
        } catch (error) {
            res.status(400).send("invalid login Details")
        }
})

app.post("/add", async(req,res) =>{
    try{
        const addstudent = new add ({
            name:req.body.name,
            date:req.body.date,
            school:req.body.school,
            class:req.body.class,
            division:req.body.division,
            status:req.body.status
        })       
        console.log(addstudent)
        const usered = await addstudent.save()
        res.status(201).send('student succesfully add')
    }catch(err){
        res.status(404).send(error)
        console.log(error)
    }
})

app.listen('3000', () =>{
    console.log("i am connect")
})