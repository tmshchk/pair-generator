// возвращаем рандомное значение из массива
Array.prototype.sample = function () {
  return this[Math.floor(Math.random() * this.length)];
};

// перемешать массив
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// отслеживанием нажатие кнопки рандома
document.getElementById('button-random').addEventListener('click', async function (e) {
  e.preventDefault();

  let divResult = document.getElementById('result');
  divResult.innerHTML = '';

  let firstListValues = document.getElementById('firstList').value;
  let secondListValues = document.getElementById('secondList').value;
  let tempFirstListArray = firstListValues.split('\n');
  let tempSecondListArray = secondListValues.split('\n');

  if (tempFirstListArray.length > tempSecondListArray.length) {
    alert('Добавьте данных: второй список должен быть больше или равен первому.');
    return;
  }

  let firstListArray = [];
  for (let i = 0; i < tempFirstListArray.length; i++) {
    if (tempFirstListArray[i] !== '') {
      firstListArray.push(tempFirstListArray[i]);
    }
  }

  let secondListArray = [];
  for (let i = 0; i < tempSecondListArray.length; i++) {
    if (tempSecondListArray[i] !== '') {
      secondListArray.push(tempSecondListArray[i]);
    }
  }

  let cloneFirstList = firstListArray.slice();
  let cloneSecondList = secondListArray.slice();

  const div = document.createElement('div');
  div.className = 'flex flex-col max-w-xs p-4 mb-6';

  for (let i = 0; i < firstListArray.length; i++) {
    let randomValue = cloneSecondList.sample();

    let p = document.createElement('p');

    p.appendChild(document.createTextNode(`${firstListArray[i]}`));
    p.className = 'text-base text-slate-500';
    div.appendChild(p);

    p.appendChild(document.createTextNode(`: ${randomValue}`));
    p.className = 'text-base text-slate-500';
    div.appendChild(p);

    let myIndex = cloneSecondList.indexOf(randomValue);
    if (myIndex !== -1) {
      cloneSecondList.splice(myIndex, 1);
    }

    shuffle(cloneSecondList);

    divResult.appendChild(div);
  }
});
