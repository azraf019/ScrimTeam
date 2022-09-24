const express = require('express')
const app = express();
const cors = require('cors');
const router = require('./routes');



app.use(cors());
app.use(express.json());
app.use(router);


(async () => {
    const PORT = 3030;
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
})();
