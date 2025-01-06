
const movieInput = document.getElementById('movie_name');
const updateButton = document.getElementById('update_btn');
const iframe = document.getElementById('movie_iframe');
const stopButton = document.getElementById('stop-animation-btn');
const startButton = document.getElementById('start-animation-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

updateButton.addEventListener('click', () => {
    const movieCode = movieInput.value.trim();
    if (movieCode) {
        iframe.src = `https://vidsrc.xyz/embed/movie?imdb=${movieCode}`;
    } else {
        alert('Please enter a valid movie code.');
    }
});

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = 
        document.body.classList.contains('dark-mode') ? 'Disable Dark Mode' : 'Enable Dark Mode';
});

stopButton.addEventListener('click', () => {
    document.body.style.animation = 'none';
    stopButton.style.display = 'none';
    startButton.style.display = 'inline-block';
});

startButton.addEventListener('click', () => {
    document.body.style.animation = '';
    startButton.style.display = 'none';
    stopButton.style.display = 'inline-block';
});