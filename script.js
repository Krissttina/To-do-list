const myInput = document.getElementById('myInput');
const ul = document.getElementById('list');

document.getElementById('addBtn').addEventListener('click', () => {
  //check for empty field
  if (myInput.value == '') {
    return;
  } 
  
  const li = document.createElement('li');
  ul.appendChild(li);

  //checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  li.appendChild(checkbox)
  
  //create p elements
  const p = document.createElement('p');
  p.textContent = myInput.value;
  li.appendChild(p);

  myInput.value = '';

  //create delete cross icon
  const delBtn = document.createElement("button"); //cross
  delBtn.textContent = "\u00D7";
  delBtn.className = "delete";
  li.appendChild(delBtn);
  //make it delete
  delBtn.addEventListener('click', () => {
    li.remove();
  });
});