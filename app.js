import express from 'express';
import connectDB from './db.js';
import dotenv from 'dotenv';

// Application routes
import indexRouter from './routes/index.js';
import urlsRouter from './routes/urls.js';

// Connecto to DB 
connectDB();


const app = express();

dotenv.config({ path: './.env' })
const PORT = process.env.PORT || 3333;

// Body Parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', urlsRouter);

// Server 
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})