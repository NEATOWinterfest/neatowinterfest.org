
function modalizeImage(url, description, attribute) {
  var modal             = document.getElementById('myModal');
  var modalImg          = document.getElementById('modalImg');
  var closeModal        = document.getElementById('closeModal');
  var captionText       = document.getElementById('modalCaption');
  var attributeText     = document.getElementById('modalAttribute');

  modal.style.display   = 'block';
  modalImg.src          = url;
  captionText.innerHTML = description;
  attributeText.innerHTML = attribute;
} // img.onclick


function closeModal() {
  var modal             = document.getElementById('myModal');
  modal.style.display   = 'none';
} // closeModal
