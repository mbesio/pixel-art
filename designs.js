
//variables that will be updated each time the submit button is pressed
var heightGrid = 1;
var widthGrid = 1;

//Global variables that will be required for this program;
const tableIdentifier = document.querySelector('#pixelCanvas');

//Track the event of the submit button being pushed!
const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();

//start by killing any tr tags that are present here
var element = document.getElementsByTagName('tr'), index;

for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

//Get the grid height and store it in a variable
heightGrid = document.getElementById('inputHeight').value;
//Get the grid width and store it in a variable
widthGrid = document.getElementById('inputWidth').value;


for (let i = 0; i < heightGrid; i++) {
  const newRow = document.createElement('tr');
//  newElement.textContent = 'This is row ' + i;

  for (let j = 0; j < widthGrid; j++) {
    const newCol = document.createElement('td');
//    newElement2.textContent = 'This is column ' + j;

    newCol.addEventListener('click',function respond() {
      paintingColor = document.getElementById('colorPicker');
      newCol.style.backgroundColor = paintingColor.value;
    });
    newRow.appendChild(newCol);
  }
  tableIdentifier.appendChild(newRow);
}
});
