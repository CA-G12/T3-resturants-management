const { join } = require('path');
const compression = require('compression');
const helmet = require('helmet');

const express = require('express');
const router = require('./routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.disable('x-powered-by');

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"]
    }
  })
)

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, '..', 'public'));
// });
app.use(express.static(join(__dirname,'..','public')))
app.use(router);

app.use((req, res) => {
  res.status(404).json({ message: 'The page you are looking for is not found !!' });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;
