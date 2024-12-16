
// membuat array fruits berisi datadata buah
const fruits = ["Banana", "Mango", "Durian"];

// membuat controller (Fruit Controller)
// terdapat action index untuk menampilkan buah
// terdapat action store untuk menambah buah

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
};


// membuat fungsi utama main
// fungsi ini yang diakses pertama kali

const main = () => {
    index();
    store("Apple");
};

main();
