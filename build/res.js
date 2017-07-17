var sharp = require('sharp')

sharp('res/icon1024x1024.png')
  .resize(72, 72)
  .toFile('output.png')
