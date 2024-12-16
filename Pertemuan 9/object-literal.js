// object literal
const user = {
    nama: "Muhammad Nizar Al-Faiq",
    umur: 19,
    alamat: "Depok",
};

// const nama = user.nama;
// const umur = user.nama;
// const alamat = user.alamat;

// console.log(nama, umur, alamat);


// melakukan destructing object 
const { nama, umur, alamat } = user;

console.log(nama, umur, alamat);