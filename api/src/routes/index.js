const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const CountryRoutes = require('./CountryRoutes');
const ActivityRoutes = require('./ActivityRoutes');
const router = Router();
const bodyParser = require('body-parser')

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(bodyParser.json())

router.use('/countries', CountryRoutes);
router.use('/activity', ActivityRoutes)

module.exports = router;
