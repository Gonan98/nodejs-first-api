const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);
const URI = 'mongodb://localhost/storedb';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos exitosa');
});