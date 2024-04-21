const express = require('express');
const app = express();
const { createCanvas, loadImage } = require('canvas');
const tf = require('@tensorflow/tfjs-node');

var start = false;

app.get('/image', (req, res) => {
    //sample url format: /image?num=0000
    if (start) {
        const num64 = req.query.num;
        convert(num64);
    }

});

app.get('/startButton', (req, res) => {
    start = true;
});

app.get('/fps', (req, res) => {
    //sample url format: /fps?frames=1
    const frames = req.query.frames;
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log('Server is running on port ${PORT}');
});

async function convert(base64){
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const img = await loadImage(buffer);
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imageTensor = tf.browser.fromPixels(canvas);
    const tensor3d = imageTensor.expandDims(0);
    
    res.json({ tensor3d: tensor3d.arraySync() });
}