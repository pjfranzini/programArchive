function processImage(imageData, height, width, weights){
  var imageA = new Array();
  for (var i = 0; i < height; i++) {
    imageA[i]=new Array();
    for (var j = 0; j < width; j++) {
      x = i * width * 3 + j * 3;
      imageA[i][j] = [imageData[x], imageData[x+1], imageData[x+2]];
    }
  }

  var processedA = new Array();
  for (var i = 0; i < height; i++) {
    processedA[i]=new Array();
    for (var j = 0; j < width; j++) {
      x = i * width * 3 + j * 3;
      processedA[i][j] = [0,0,0];
    }
  }

  if (weights.length === 1) {
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        for (var k = 0; k < 3; k++) {
          processedA[i][j][k] = imageA[i][j][k] * weights[0][0];
        }
      }
    }
  }

  else  {
    for (var i = 0; i < height; i++) {
      for (var j = 0; j < width; j++) {
        for (var k = 0; k < 3; k++) {
          for (var x = 0; x < weights.length; x++) {
            for (var y = 0; y < weights.length; y++) {
                    a = i+y-Math.floor(weights.length/2);
                    b = j+x-Math.floor(weights.length/2);
                    if (a <= -1) a = 0;
                    if (a >= height) a = height-1;
                    if (b <= -1) b = 0;
                    if (b >= width) b = width-1;
                    processedA[i][j][k] += imageA[a][b][k] * weights[x][y];
            }
          }
          if (processedA[i][j][k] < 0) processedA[i][j][k] = 0;
          if (processedA[i][j][k] > 255) processedA[i][j][k] = 255;
        }
      }
    }
  }
  var finalImage = new Array(imageData.length);
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      x = i * width * 3 + j * 3;
      finalImage[x] = processedA[i][j][0];
      finalImage[x+1] = processedA[i][j][1];
      finalImage[x+2] = processedA[i][j][2];
    }
  }
  return finalImage;
}