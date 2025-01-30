function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

console.log(greeter(user)); //This will cause a compile time error because TypeScript can't implicitly convert an array into a string