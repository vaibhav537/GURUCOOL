const mongoose = require('mongoose');

const category = mongoose.createConnection(process.env.DBADDCATE)

export default category