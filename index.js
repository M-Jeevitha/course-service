const express = require('express');
const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({status: 'ok', service: 'course-service'}));

app.get('/courses', (req, res) => {
  res.json([{id: 1, title: 'Intro to CS'}]);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('course-service running on port', process.env.PORT || 3000);
});
