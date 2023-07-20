import _ from 'lodash';
import './style.scss';
import icon from './icon.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myicon = new Image();
  myicon.src = './icon.png';
  element.appendChild(myicon);

  return element;
}

document.body.appendChild(component());