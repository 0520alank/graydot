// Get the source and target containers
const sourceContainer = document.querySelector('.source-container');
const targetContainer = document.querySelector('.target-container');

// Add event listeners for drag events
sourceContainer.addEventListener('dragstart', dragStart);
targetContainer.addEventListener('dragover', dragOver);
targetContainer.addEventListener('drop', drop);

// Store the dragged item
let draggedItem;

// Drag start event handler
function dragStart(event) {
  // Store the dragged item
  draggedItem = event.target;
  
  // Add a class to the dragged item for visual feedback
  draggedItem.classList.add('dragging');
  
  // Set the data being dragged (required for Firefox)
  event.dataTransfer.setData('text/plain', '');
}

// Drag over event handler
function dragOver(event) {
  // Prevent default behavior to allow drop
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  // Prevent default behavior to prevent opening the dragged item's URL (if it has one)
  event.preventDefault();
  
  // Remove the visual feedback class from the dragged item
  draggedItem.classList.remove('dragging');
  
  // Append the dragged item to the target container
  targetContainer.appendChild(draggedItem);
  
  // Display a success message or update the UI as desired
  targetContainer.querySelector('p').textContent = 'Item dropped!';
}

// Reset button click event handler
function resetContainers() {
  // Clear the target container
  targetContainer.innerHTML = '<p>Drop items here</p>';
  
  // Reset the source container to its original state
  const originalItems = sourceContainer.querySelectorAll('.item');
  originalItems.forEach(item => sourceContainer.appendChild(item));
}
