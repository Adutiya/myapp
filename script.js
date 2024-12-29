document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-details');
    const details = document.querySelector('.playlist-details');
  
    toggleButton.addEventListener('click', () => {
      // Toggle visibility of the playlist details
      if (details.style.display === 'none') {
        details.style.display = 'block';
        toggleButton.textContent = 'Show Less';
      } else {
        details.style.display = 'none';
        toggleButton.textContent = 'Show More';
      }
    });
  });