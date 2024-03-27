function toggle2(buttonSpecifier) {
  const button = document.querySelector(`.ten-g .${buttonSpecifier}`);

  if(!button.classList.contains('on')) {
    turnOffOtherButtons();
    button.classList.add('on');
  } else {
    button.classList.remove('on');
  }
}

function turnOffOtherButtons() {
  const onButton = document.querySelector('.ten-g .on');

  if(onButton)
    onButton.classList.remove('on');
} 

