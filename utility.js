export function animalPrinter(selector) {
  // Source of ASCII art: https://www.asciiart.eu
  let owlAscii = `  __________\n\ / ___  ___ \\\n/ / @ \\/ @ \\ \\\n\\ \\___/\\___/ /\\\n \\____\\/____/||\n /     /\\\\\\\\\\//\n|     |\\\\\\\\\\\\\n \\      \\\\\\\\\\\\\n   \\______/\\\\\\\\\n    _||_||_`;
  let squirrelAscii = ` (\\__/)  .~    ~. ))\n /O O  ./      .'\n{O__,   \\    {\n  / .  . )    \\\n  |-| '-' \\    }\n .(   _(   )_.'\n'---.~_ _ _&`;

  if(selector == 1) {
      console.log(owlAscii);
  } else if (selector ==2) {
      console.log(squirrelAscii);
  } else {
      console.log("wrong animal dingus");
  }
}
