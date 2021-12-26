import app from './server';

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
