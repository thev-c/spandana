function saveMood() {
  const mood = document.getElementById("mood").value;
  localStorage.setItem("mood", mood);
  document.getElementById("savedMood").innerText = `Mood saved: ${mood}`;
}

function clearJournal() {
  const journalBox = document.getElementById("journal");
  const text = journalBox.value.trim();

  if (text === "") {
    document.getElementById("journalStatus").innerText = "Please write something to vent.";
    return;
  }

  journalBox.value = "";
  document.getElementById("journalStatus").innerText = "Your thoughts have been released and are gone forever. 💨";
}
