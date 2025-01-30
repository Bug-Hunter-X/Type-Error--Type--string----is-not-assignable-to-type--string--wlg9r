function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

//Solution 1: Join the array elements into a single string
console.log(greeter(user.join(" "))); // Output: Hello, Jane Doe

//Solution 2: Modify the greeter function to accept an array of strings
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));// Output: Hello, Jane Doe