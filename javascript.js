// Select color input

// Select size input

// When size is submitted by the user, call makeGrid()

init ();

function init () {
for ( var i = 1; i <= 20; i++ ) {
  var newRow = document.createElement('TR');
  document.querySelector('#pixelCanvas').appendChild(newRow);

  for ( var j = 1; j <= 20; j++ ) {
    var newCell = document.createElement('TD');
    newRow.appendChild(newCell);
  }
}
}

var isDown = false;

function pickColor (event) {
  let chosenElem = event.target;
  if (chosenElem !== event.currentTarget) {
    if(isDown) {
      chosenElem.style.backgroundColor = colorPicker.value;
    }
  }
  event.preventDefault();
}

function defaultColor (event) {
  let chosenElem = event.target;
  if (chosenElem !== event.currentTarget) {
    if(isDown) {
      chosenElem.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
  event.preventDefault();
}

function fillAllCells () {
    if (document.querySelector('tr')) {
      var table = document.querySelector('table');
      table.style.backgroundColor = colorPicker.value;
    }
}

function clearTable () {
  while (document.querySelector('tr')) {
    var elem = document.querySelector('tr');
    elem.parentNode.removeChild(elem);
  }
  document.querySelector('table').removeAttribute('style');
}

function makeGrid (event) {
  var heighthValue = document.querySelector('#inputHeight').value;
  var widthValue = document.querySelector('#inputWeight').value;

clearTable ();

setColor ();

  for ( var i = 1; i <= heighthValue; i++ ) {
    var newRow = document.createElement('TR');
    document.querySelector('#pixelCanvas').appendChild(newRow);

    for ( var j = 1; j <= widthValue; j++ ) {
      var newCell = document.createElement('TD');
      newRow.appendChild(newCell);
    }
  }
   event.preventDefault();
  }

function setErase () {
  return {
    mouseDown: document.querySelector('table').addEventListener('mousedown', function(event) {
      isDown = true;
      defaultColor (event);
    }),
    mouseUp: document.querySelector('table').addEventListener('mouseup', function() {
      isDown = false;
    }),
    mouseMove: document.querySelector('table').addEventListener('mousemove', function (event) {
      defaultColor (event);
    })
  };
}

function setColor () {
  return {
    mouseDown: document.querySelector('table').addEventListener('mousedown', function(event) {
      isDown = true;
      pickColor (event);
    }),
    mouseUp: document.querySelector('table').addEventListener('mouseup', function() {
      isDown = false;
    }),
    mouseMove: document.querySelector('table').addEventListener('mousemove', function (event) {
      pickColor (event);
    })
  };
}

setColor ();

document.querySelector('#sizePicker').addEventListener('submit', function (event) {
    makeGrid (event);
  });

document.querySelector('#sizePicker').addEventListener('reset', function (event) {
    clearTable ();
  });

document.querySelector('.btn_fill').addEventListener('click', function (event) {
    fillAllCells ();
  });

document.querySelector('.btn_erase').addEventListener('click', function (event) {
  setErase ();
});

document.querySelector('.btn_draw').addEventListener('click', function (event) {
  setColor ();
});


// function clearTable () {
//   var table = document.querySelector('table');
//   for ( var t = 1; t <= table.length; t++ ) {
//     var table = document.querySelector('table');
//     table.removeChild(table.firstChild);
//   }
// }


//
// function Change (isDown, isUp, func) {
//   this.isDown = isDown;
//   this.isUp = isUp;
//   this.func = func;
//   this.mouseDown = function () {
//     document.querySelector('table').addEventListener('mousedown', function(event) {
//      return this.isDown, this.func;
//     });
//   }
//
//   this.mouseup = function () {
//     document.querySelector('table').addEventListener('mousedown', function(event) {
//       return this.isUp;
//     });
//   }
//
//   this.mousemove = function () {
//     document.querySelector('table').addEventListener('mousedown', function(event) {
//       return this.isDown, this.func;
//     });
//   }
//
// }
