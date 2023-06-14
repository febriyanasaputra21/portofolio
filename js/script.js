const txtElement = ["mahasiswa", "frontand developer"];
let count = 0;
let textIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentText.slice(0, ++txtIndex);
  document.querySelector(",efek-ngetik").textContent = words;

  setTimeout(ngetik, 500);
})();
