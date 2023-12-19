function toggleButtonSize() {
    const buttons = document.querySelectorAll('[id^="responsiveButton"]');
    const isSmallScreen = window.innerWidth <= 700; // You can adjust this value as needed
  
    buttons.forEach((button) => {
      if (isSmallScreen) {
        button.classList.remove('btn-lg');
        button.classList.add('btn-sm');
      } else {
        button.classList.remove('btn-sm');
        button.classList.add('btn-lg');
      }
    });
  }
  // Call the function on page load and whenever the window size changes
  window.onload = toggleButtonSize();
  window.addEventListener('resize', toggleButtonSize);
  const classListArray = Array.from(button.classList);
console.log(classListArray);