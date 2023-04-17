import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://gabriel:123@project.g8i94jr.mongodb.net/alura-node');

// Connection para a aplicacao
let db = mongoose.connection;

export default db;