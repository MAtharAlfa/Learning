var umur = parseInt(prompt("berapa umur anda?", -1));
tru = "Kelpin";
fales = "Bukan kelpin";

do {
  if (umur < 20) {
    alert(tru);
    document.write(`Umur kamu ${umur} maka kamu ${tru}`);
  } else {
    alert(fales);
    document.write(`Umur kamu ${umur} maka kamu ${fales}`);
  }
} while (umur < 0);

for (let i = 0; i < 100; i += 5) {
  console.log(i);
}
