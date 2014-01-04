/* A 7-segment converter is basically a fancy way of saying a component that turns a number into instructions for a digital clock display.
Each segment is turned on or off to form a number from 0 to 9. The instruction it takes is in the form of a single binary stream that looks something like this: 1011010. Each bit tells the display if the corresponding segment should be on or off.

The bits for each segment are in the following order, from right to left:

Top Horizontal
Middle Horizontal
Bottom Horizontal
Top-Left Vertical
Top-Right Vertical
Bottom-Left Vertical
Bottom-Right Vertical */

function sevenSegmentNumber(number) {
  switch (number){
    case 0:
      return parseInt("1111101",2);
    case 1:
      return parseInt("1010000",2);
    case 2:
      return parseInt("0110111",2);
    case 3:
      return parseInt("1010111",2);
    case 4:
      return parseInt("1011010",2);
    case 5:
      return parseInt("1001111",2);
    case 6:
      return parseInt("1101111",2);
    case 7:
      return parseInt("1010001",2);
    case 8:
      return parseInt("1111111",2);
    case 9:
      return parseInt("1011111",2);
  }
}

// some concise versions:
// return [125, 80, 55, 87, 90, 79, 111, 81, 127, 95][number];
// return parseInt((['1111101','1010000','0110111','1010111','1011010','1001111','1101111','1010001','1111111','1011111'])[number],2);