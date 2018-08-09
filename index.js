//Code your solution here
function getFirstSelector(selector) {
  const first = document.querySelector(selector);
  return first; 
}

function nestedTarget() {
  const nested = document.querySelector('#nested .target');
  return nested; 
}


function deepestChild() {
  const deepest = document.querySelector('#grand-node div div div div')
  return deepest; 
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
    let original = lis[i].innerHTML;
    lis[i].innerHTML = (original.parseInt() + 4).toString();
  }
}
