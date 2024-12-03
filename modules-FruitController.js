const fruits = require("./modules-data.js");


const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
};


// keyword namanya module
module.exports = { index, store};