import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();



mongoose.connect('mongodb+srv://careerkingsconsult:shuttingdown@careerkingsestate.wngcdny.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to db')
})
.catch((err) => {
    console.log(err)
}); 

const app = express();
app.use(express.json())

app.listen(3000, () => {
    console.log('server is running on port 300')
});

app.use('/Backend/user', userRouter)
app.use('/Backend/auth', authRouter)


