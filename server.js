import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
// import messageRoutes from './routes/messages';

dotenv.config();


const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;
const dbConnectionString = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const app = express();
const port = 3001;


mongoose.connect(dbConnectionString)
  .then(() => {
    console.log("The connection was successful");
  })
  .catch((error) => {
    console.error("The connection failed:", error);
  });

app.use(express.json());
app.use('/api/users', userRoutes);
// app.use('/api/messages', messageRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
