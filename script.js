const print = (text) => {
  if (typeof window !== "undefined") {
    window.document.write(text);
  }

  console.log(text);
};

const name = "butdam israel";
const age = "24";
const height = "1.76m";
Const country = "nigeria";

print(`
    Name: ${name}
    Age: ${age}
    Height: ${height}
    Country: ${nigeria}
`);
