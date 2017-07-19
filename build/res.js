var sharp = require('sharp')

sharp('res/icon1024x1024.png')
  .resize(36, 36)
  .toFile('app/platforms/android/res/mipmap-ldpi.png')

sharp('res/icon1024x1024.png')
  .resize(48, 48)
  .toFile('app/platforms/android/res/mipmap-mdpi.png')

sharp('res/icon1024x1024.png')
  .resize(72, 72)
  .toFile('app/platforms/android/res/mipmap-hdpi.png')

sharp('res/icon1024x1024.png')
  .resize(96, 96)
  .toFile('app/platforms/android/res/mipmap-xhdpi.png')
