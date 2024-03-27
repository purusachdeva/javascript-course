function toggle(buttonSpecifier) {
  const button = document.querySelector(`.ten-d-e .${buttonSpecifier}`);

  if(!button.classList.contains('on')) {
    button.classList.add('on');
  } else {
    button.classList.remove('on');
  }
}

