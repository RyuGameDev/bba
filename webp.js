const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

// Fungsi untuk mengubah WebP animasi menjadi MP4
function convertWebpToMp4(webpPath, mp4Path) {
  ffmpeg(webpPath)
    .inputFormat('webp')
    .outputOptions('-movflags faststart')
    .outputOptions('-pix_fmt yuv420p')
    .output(mp4Path)
    .on('end', function() {
      console.log('Conversion finished!');
    })
    .on('error', function(err) {
      console.error('Error: ' + err.message);
    })
    .run();
}

// Contoh penggunaan
const webpPath = path.resolve(__dirname, './stiker/undefined.webp');
const mp4Path = path.resolve(__dirname, 'anjayy.mp4');
convertWebpToMp4(webpPath, mp4Path);
