const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// greet event
myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}!`);
});

// exit event
myEmitter.on("exit", () => {
    console.log("Exiting the program...");
});

// Trigger events
myEmitter.emit("greet", "Shivi");
myEmitter.emit("exit");