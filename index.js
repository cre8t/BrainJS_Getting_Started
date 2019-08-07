// Dependencies
const imageToAscii = require("image-to-ascii");


// Passing options
imageToAscii("/home/daniel/Documents/BrainJS_Getting_Started/data/trainingSet/0/img_1.jpg", {
    colored: false,
    pixels:' #'
}, (err, converted) => {
    console.log(converted);
 var imageConverted=converted;
 console.log(imageConverted);

});
