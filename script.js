// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item - not working
const list = document.querySelector('ul');
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  }
}, false); //add radio button for checking

// Create new list item when Add button is clicked
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);

  if (inputValue == '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }

  document.getElementById("myInput").value = ""; //empty imput fields

  const span = document.createElement("span");
  const cross = document.createTextNode("\u00D7"); //cross
  span.className = "close";
  span.appendChild(cross);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}