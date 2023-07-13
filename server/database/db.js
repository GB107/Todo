import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const Connection = () => {

mongoose.connect('mongodb://localhost:27017/todolist');
var db=mongoose.connection;
db.on('error', console.log.bind(console, 'connection error'));
db.once('open', function(callback){
 console.log('connection succeeded');
})
}

export default Connection;