const fruits = require("./fruits.js");

const index = () => {
    for (const fruit of fruits) {
        console.log(fruit);
    }
};

const store = (name) => {
    fruits.push(name);
};

const update = (namaLama, namaBaru) => {
    const index = fruits.findIndex(fruit => fruit === namaLama);
    if (index !== -1) {
        fruits[index] = namaBaru;
        console.log('${namaLama} berhasil diperbarui jadi ${namaBaru}');
    } else {
        // nampilin pesan jika nama ga ditemukan
        console.log('${namaLama} tidak ditemukan dalam daftar');
    }
        
}; 

const destroy = (name) => {
    const index = fruits.findIndex(fruit => fruit === name);
    if (index !== -1) {
        fruits.splice(index, 1);
        console.log('${name} berhasil dihapus dari inputan ');
    } else {
        console.log('${name} tidak ditemukan diinputan');
    }
};


module.exports = { index, store, update, destroy };
