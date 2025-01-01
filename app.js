console.log('Muncul pertama');

setTimeout(() => {
    console.log('Ini sudah masuk memory, dijalankan setelah 3 detik');
}, 3000);

console.log('Muncul kedua');

//javascript itu single thread, tapi di browser dibuat oleh C++ yang multithread, jadi yaa javascript jadi seolah2 multithread di browser.