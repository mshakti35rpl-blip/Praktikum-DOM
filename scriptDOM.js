// 1. Memilih elemen
const judul = document.getElementById("judul");
const sapaan = document.getElementById("sapaan");
const kelas = document.getElementsByClassName("kelas");

// 2. Melihat elemen di Console
console.log(judul);
console.log(sapaan);
console.log(kelas)

 
// 3. Mengubah isi teks
judul.textContent = "Judul Sudah Diubah!";
kelas[0].textContent = "X RPL 5";
 
// 4. Mengubah warna
judul.style.color = "crimson";
kelas[0].style.fontSize = "30px";
// 5. Mengubah isi dengan tag HTML
sapaan.innerHTML = "Halo, saya sedang <b>belajar DOM</b>!";
 
// 6. Mencoba id yang tidak ada
const hantu = document.getElementById("tidakada");
console.log(hantu);
