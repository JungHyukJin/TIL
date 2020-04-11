let reader = new FileReader();

reader.onload = (readerEvent) => {
  document.querySelector("#selected-img").setAttribute('src', readerEvent.target.result);
};

document.querySelector("#select-image").addEventListener("change", (changeEvent) => {

  let imgFile = changeEvent.target.files[0];
  reader.readAsDataURL(imgFile);
});

function getFile() {
  document.getElementById("select-image").click();
}