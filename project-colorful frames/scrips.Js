const frames = document.querySelectorAll('.frame');

frames.forEach(frame => {
  frame.addEventListener('click', () => {
    const color = frame.classList[1];
    window.location.href = `index.html?color=${color}`;
  });
});