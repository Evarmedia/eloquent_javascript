/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
*/

 // 8x8 grid
 // newline seperates lines
 // print " " or "#" 

 const grid = 8;
 for (i = 0; i < grid; i++) {
    let row = "";
    for (j = 0; j < grid; j++) {
      if ((i + j) % 2 == 0) {
        row = row + " ";
      } else {
        row = row + "#";
      }
    }
    console.log(row);
  }