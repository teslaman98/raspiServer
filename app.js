const express = require('express');
const app = express();
const path = require('path');
const xkcd = require('./xkcd')
const logger = require('./middleware/logger')



app.use(logger)


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


// Gets api
app.get('/api', (req, res) => {
	res.setHeader('Content-Type', 'text/html')
	res.end('<a href="10.0.0.6:5000/api/xkcd>XKCD API</a>"')
})

app.get('/api/xkcd', (req, res) => {
  res.json(global.xkcd);
});

app.get('/api/photo', (req,res) => {
  res.sendFile('/home/pi/Documents/node/nodeExpress/public/10-19-20/domek,mary.jpg');
  console.log('Sending...')
});

app.get('/api/video', (req,res) => {
    res.sendFile('/home/pi/Documents/node/nodeExpress/public/videos/timpool.mp4');
    console.log('Sending...')
});

app.get('/api/music', (req,res) => {
	res.sendFile('/home/pi/Documents/node/nodeExpress/public/music/music.html');
});
app.get('/api/music/ellieGoulding/ellie-goulding-tessellate.mp3', (req,res) => {
    res.sendFile('/home/pi/Documents/node/nodeExpress/public/music/ellieGoulding/ellie-goulding-tessellate.mp3');
    console.log('Sending...');
});


// app.get('/',function(req,res) {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });
// Set Static Folder

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
