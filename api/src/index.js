const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Configuración del body parser para manejar datos en formato JSON
app.use(bodyParser.json());

app.use(
  cors({
    origin: ['http://example.com', 'http://localhost:8080'],
  })
);

// Configuración de CORS
app.use(cors());

// Importar las rutas
const especiesRoutes = require('./routes/especiesRoutes');
const variedadesRoutes = require('./routes/variedadesRoutes');
const coloresRoutes = require('./routes/colorRoutes');
const referenciasRoutes = require('./routes/referenciaRoutes');
const proveedoresRoutes = require('./routes/proveedorRoutes');
const fincasRoutes = require('./routes/fincasRoutes');
const siembresRoutes = require('./routes/simbraRoutes');
const contenidoSiembras = require('./routes/contenidoSiembraRoutes');

// Configurar las rutas
app.use('/especies', especiesRoutes);
app.use('/variedades', variedadesRoutes);
app.use('/colores', coloresRoutes);
app.use('/referencias', referenciasRoutes);
app.use('/proveedores', proveedoresRoutes);
app.use('/fincas', fincasRoutes);
app.use('/siembras', siembresRoutes);
app.use('/contenidoSeimbras', contenidoSiembras);

// Configuración de otras rutas y middleware de tu aplicación...

// Ruta de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a Dgreen!');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
