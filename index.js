const fs = require('fs');
const path = require("path");
const Fastify = require('fastify');
const app = Fastify({
  logger: true
})

app.register(require('@fastify/static'), {
  root: path.join(__dirname, 'api'),
})

app.get('/', async (req, res) => {
const timeApi = require('./api/timeApi.js');
  const gmtOffset = req.query.gmt;
  const timeData = await timeApi(req);
  res.send(timeData);
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server running on port : ${port}`);
});
