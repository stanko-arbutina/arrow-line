const mainContainer = document.getElementById('mainContainer');
for (let i=0; i<25; i++) {
  const newElement = document.createElement('div');
  newElement.className = 'item';
  newElement.id = `item${i}`;
  newElement.innerText = `item${i} innerText`;
  mainContainer.appendChild(newElement);
}