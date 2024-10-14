// let namaSekolah = "Alfa Centauri",
//   tingkatLantai = 5,
//   statusKeberadaanHalaman = "tidak memiliki halaman,";

// document.write(
//   `Saya bersekolah di ${namaSekolah} dan sekolah saya memiliki ${String(
//     tingkatLantai
//   )} tingkat lantai, meskipun begitu, sekolah saya ` +
//     statusKeberadaanHalaman +
//     ` ya begitulah.`
// );

// let number = Math.floor(Math.random() * 100);
// document.write(number);

// if (number % 2 == 0) {
//   document.write(" genap");
// } else {
//   document.write(" ganjil");
// }

// for (let i = 0; i < 22; i += 2) {
//   document.write(`${i}`);
// }

// var i = 0;
// while (i <= 22) {
//   document.write(`<br> ${i}`);
//   i += 2;
// }

// nama = prompt(`siapa namamu?`);
// document.write(`halo ${nama}`);

// if (nama == `dum bass`) {
//   document.write(`</br> how rude!`);
// }

// var alas = prompt("masukan data panjang"),
//   tinggi = prompt("masukan tinggi");
// luasSegitiga = (1 / 2) * alas * tinggi;

// document.write(`maka luas segitiga adalah ${luasSegitiga}`);

// var ruang = 1,
//   totalRuang = 7;

// while (ruang <= 5) {
//   document.write(`</br>ruang di kelas ${ruang} berfungsi dengan baik`);
//   ruang++;
// }

// for (ruang; ruang <= totalRuang; ruang++) {
//   document.write(
//     `</br> sedang ruang di kelas ${ruang} tidak berfungsi dengan baik`
//   );
// }

// for (let i = 22; i > 0; i -= 2) {
//   text = `${i * 2} `;
//   document.write(text);
// }
// while (i < 3) {
//   document.write(i);
//   i++;
// }

// document.write(`sa`);

// var ruang = 1,
//   totalRuang = 7;

// for (ruang; ruang <= 7; ruang++) {
//   if (ruang <= 3) {
//     document.write(`Ruang nomor ${ruang} berfungsi dengan baik </br>`);
//   } else if (ruang == 4) {
//     document.write(`Ruang nomor ${ruang} sedang diperbaiki </br>`);
//   } else {
//     document.write(`Ruang nomor ${ruang} tidak berfungsi dengan baik </br>`);
//   }
// }

// var angka = prompt("Masukan angka:");

// if (angka % 2 == 0) {
//   alert("angka genap");
// } else if (angka % 2 == 1) {
//   alert("angka ganjil");
// } else {
//   alert("ini bukan angka");
// }

let nilai = prompt("Nilaimu berapa?");

if (nilai < 101 && nilai > -1) {
  if (nilai >= 85) {
    document.write(`Nilai ${nilai} adalah A`);
  } else if (nilai >= 70) {
    document.write(`Nilai ${nilai} adalah B`);
  } else if (nilai >= 55) {
    document.write(`Nilai ${nilai} adalah C`);
  } else if (nilai < 55) {
    document.write(`Nilai ${nilai} adalah D`);
  }
} else {
  document.write("ERROR!");
}

// do {
//   nilai = prompt("Nilaimu berapa?");

//   if (nilai >= 85) {
//     document.write(`Nilai ${nilai} adalah A`);
//   } else if (nilai >= 70) {
//     document.write(`Nilai ${nilai} adalah B`);
//   } else if (nilai >= 55) {
//     document.write(`Nilai ${nilai} adalah C`);
//   } else if (nilai < 55) {
//     document.write(`Nilai ${nilai} adalah D`);
//   }
// } while (nilai > 100 || nilai < 0);
