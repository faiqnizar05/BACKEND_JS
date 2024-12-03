const { index, store , update, destroy} = require("./FruitController.js");

const main = () => {
    index();
    store("Apple");
    update("Mango", "Apple");
    destroy("Apple");

};

main();