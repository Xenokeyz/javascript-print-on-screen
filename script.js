const print = (text) => {
  if (typeof window !== "undefined") {
    window.document.write(text);
  }

  console.log(text);
};

const name = "John Doe";
const age = "40";
const height = "1.76m";

print(`
    Name: ${name}
    Age: ${age}
    Height: ${height}
`);
