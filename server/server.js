const express = require('express');  
const app = express();  
const PORT = 5000;  

const mainRoutes = require('./routes/mainRoutes');  

app.use('/api', mainRoutes);  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  
