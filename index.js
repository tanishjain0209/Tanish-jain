

// function to add class or remove class 



function showOverlay(imgElement) {
    const overlay = imgElement.nextElementSibling;
    if (overlay.classList.contains('d-none')) {
      overlay.classList.remove('d-none');
      setTimeout(() => overlay.classList.add('show'), 5);
    } else {
      overlay.classList.remove('show');
      setTimeout(() => overlay.classList.add('d-none'), 10);
    }
  }
  