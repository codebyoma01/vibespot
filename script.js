const form = document.getElementById('vibe-form');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const mood = form.mood.value.trim();

  if (!name || !mood) {
    message.textContent = "Please enter your name and vibe.";
    message.style.color = "red";
    return;
  }

  message.textContent = `Thanks, ${name}! Your vibe "${mood}" has been received 🎵`;
  message.style.color = "#00d4ff";
  form.reset();
});
