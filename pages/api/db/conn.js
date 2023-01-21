const mongoose = require('mongoose');

const contact = mongoose.createConnection(process.env.DBCONN)

export default contact;