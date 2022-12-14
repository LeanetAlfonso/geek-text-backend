import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import AuthRoute from './routes/users.js'
import booksRouter from './routes/books.js'
import genresRouter from './routes/genres.js'
import authorsRouter from './routes/authors.js'
import AccountManager from './routes/AccountManager/AccountManger.js';
import LoggingCredentials from './routes/LoggingCredentials/LoggingCredentialsManager.js';
const server = express();
dotenv.config(); 
//============================================Middlewares==========================================
server.use(cors());
server.use(express.json());
//=====================================MongoDb connection & configs===============================
const mongoURI = process.env.mongoURI;
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(mongoURI, connectionOptions, (error) => {
  if (error) {
    return console.log(error);
  }
  console.log(`Connection to MongoDB was succesful`);
});

//=================================================================================================
server.use(AuthRoute)

server.use('/books', booksRouter);

server.use('/genres', genresRouter);

server.use('/authors', authorsRouter);

server.use(AccountManager);

server.use(LoggingCredentials);
//===================================Server connection & Configs===================================
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
