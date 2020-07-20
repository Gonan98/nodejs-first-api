const mongoose = require('mongoose');

//console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexion a la base de datos');
});