const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dotenv= require('dotenv')
const cors= require('cors')
const mongoose= require('mongoose');
const UserRouter= require('./routes/User')
const jwt= require('jsonwebtoken')


//middleWares
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors());


//Routes
app.use('/users', UserRouter)

//post request for a token
app.post('/jwt',async (req, res) => {
    const user=req.body;
    const token=jwt.sign(user,process.env.SECRET_KEY,{expiresIn: '1h'});
res.send({token:token});
})


//mongodb connection
mongoose.connect(process.env.MONGO_URL).then(console.log('Connected to MongoDB'))
.catch((err) => console.log(err)
)




app.get('/',(req, res) => {
    res.send('Hello World!');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
)