const { index, store } = require("./modules-FruitController.js");

const main = () => {
    index();
    store("Apple");
};


main();