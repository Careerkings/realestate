import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO)

const app = express();

app.listen(3000, () => {
    console.log('server is running on port 300')
});




