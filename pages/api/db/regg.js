const mongoose = require('mongoose');

const register = mongoose.createConnection(process.env.DBREGG)

export default register;