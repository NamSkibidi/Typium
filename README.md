# Typium

A small library for people who want a simple type safe for variables.
Here is how to use:
```JavaScript
const Typium = require("typium");
Typium.add({
  name: "A", // Required, must be string.
  type: String, // Class name.
  value: "Hello World!" // Set the value.
})
// Now that you has succcessfully create a value now let's get it.
let value = Typium.get("A");
console.log(value); // "Hello World!"
// But what if I gave it the wrong type?
// It'll do nothing.
// So how do I change the value?
// There is 2 way:
// 1:
Typium.set("A", "Lorem Ipsum");
console.log(Typium.get("A"); // "Lorem Ipsum"
// 2:
Typium.add({
  name: "A",
  value: "dolor amet",
  overrideValue: true, 
  type: Window // Type will be ignored if `overrideType` enable, but you still need to add it as any class or it won't work.
});
console.log(Typium.get("A"); // "dolor amet"
// What about changing the type?
// Use `overrideType` (boolean) in Typium.add() along with `overrideValue` and `value` having the exact type, this will make  overrideValue do not ignore `type`.
```

> I made this for myself but I wanna publish it for people who in need. I only update this whenever I want to so don't expect me to update constantly.
