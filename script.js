function paintBox() {
  const color = document.getElementsByClassName('color');
  color[0].style.backgroundColor = 'black';
  color[1].style.backgroundColor = 'red';
  color[2].style.backgroundColor = 'green';
  color[3].style.backgroundColor = 'blue';
  color[0].addEventListener('click', clickColor);
  color[1].addEventListener('click', clickColor);
  color[2].addEventListener('click', clickColor);
  color[3].addEventListener('click', clickColor);

}
paintBox();

function clickColor () {
    const color = document.getElementsByClassName('color');
    for (let i = 0; i < color.lenght; i += 0) {
        color[i].className = 'color';
    }
    clickColor.target.className = 'color selected';
    let activeColor = clickColor.target.style.backgroundColor;
}
