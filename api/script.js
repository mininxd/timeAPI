const output = document.getElementById("hasil");
const masukan = document.getElementById("input");

function jumlah() {
  const hasil = masukan.value * 3600;
  output.innerHTML = hasil;
}
