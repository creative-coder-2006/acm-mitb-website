let synth = window.speechSynthesis;
let utterance = null;
let isPaused = false;
let hasEnded = false;

if (!synth) {
  alert('Speech synthesis is not supported in your browser. Please try a modern browser like Chrome or Edge.');
}

// Show controls when audio button is clicked
function showControls() {
  document.getElementById('audio-button').classList.add('hidden');
  document.getElementById('play-pause-button').classList.remove('hidden');
  document.getElementById('restart-button').classList.remove('hidden');
  startReading();
}

// Start reading the page content
function startReading() {
  let textContent = document.body.innerText;

  // Fix pronunciation issues: "U.S." or "US" -> "us"
  textContent = textContent.replace(/\bU\.S\b/g, "us").replace(/\bUS\b/g, "us");

  utterance = new SpeechSynthesisUtterance(textContent);

  // Handle speech end
  utterance.onend = () => {
    isPaused = false;
    hasEnded = true; // Mark that the audio has ended
    document.getElementById('play-pause-button').classList.replace('pause-button', 'play-button');
  };

  synth.speak(utterance);
  hasEnded = false; // Reset end marker when speech starts
}

// Restart audio from the beginning
function restartAudio() {
  synth.cancel();
  utterance = null;
  document.getElementById('play-pause-button').classList.replace('play-button', 'pause-button');
  startReading();
}

// Toggle between pause and play
function togglePause() {
  const playPauseButton = document.getElementById('play-pause-button');
  if (hasEnded) {
    // Restart if audio has ended
    restartAudio();
  } else if (isPaused) {
    synth.resume();
    playPauseButton.classList.replace('play-button', 'pause-button');
    isPaused = false;
  } else {
    synth.pause();
    playPauseButton.classList.replace('pause-button', 'play-button');
    isPaused = true;
  }
}

// Stop audio when the page is about to unload (reload or close)
window.addEventListener('beforeunload', () => {
  if (synth.speaking) {
    synth.cancel(); // Stop the speech synthesis
  }
});
