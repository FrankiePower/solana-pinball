"use strict";

// Mock data for leaderboard
const leaderboardData = [
  { address: "9x72...4df8", score: 2000 },
  { address: "5a19...8f3c", score: 1850 },
  { address: "3d4b...1a2e", score: 1700 },
  { address: "8e62...9b7d", score: 1500 },
  { address: "0f92...7d65", score: 1400 },
];

// Function to display leaderboard
function displayLeaderboard() {
  const leaderboardContainer = document.getElementById("leaderboard");
  leaderboardContainer.innerHTML = "<h2>Leaderboard</h2>";

  leaderboardData.forEach((player, index) => {
    const playerElement = document.createElement("div");
    playerElement.classList.add("leaderboard-entry");
    playerElement.innerHTML = `<span>${index + 1}. ${
      player.address
    }</span> <span>Score: ${player.score}</span>`;
    leaderboardContainer.appendChild(playerElement);
  });
}

// Wait for the DOM to load before displaying the leaderboard
document.addEventListener("DOMContentLoaded", displayLeaderboard);
