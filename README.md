# Type Error: Type 'string[]' is not assignable to type 'string'
This repository demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.
The `greeter` function expects a single string argument, but the `user` variable is an array of strings. This results in a type error.
The solution demonstrates how to correctly handle this by either joining the array elements into a single string or by modifying the `greeter` function to accept an array of strings.