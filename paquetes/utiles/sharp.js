const sharp = require('sharp');
sharp('./logo.png').resize(120).grayscale().toFile('resize.png');
