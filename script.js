const percentageEl = document.getElementById("indicator__bar__percentage");
const cowEl = document.getElementById("cow");

/**
 * Get the bar's percentage (0% - 100%).
 * @returns {number}
 */
function getBarPercentage() {
  return Number(percentageEl.style.width.replace("%", ""));
}

/**
 * Set the bar's percentage (0% - 100%).
 * @param {number} percentage
 */
function setBarPercentage(percentage) {
  percentage = Math.min(Math.max(percentage, 0), 100);
  percentageEl.style.width = `${percentage}%`;
}

let isMouseDown = false;

document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

setInterval(() => {
  if (isMouseDown) {
    setBarPercentage(getBarPercentage() + 1);
  } else {
    setBarPercentage(getBarPercentage() - 1.25);
  }

  cowEl.style.rotate = `${getBarPercentage() * 0.1}deg`;

  percentageEl.style.backgroundColor = `hsl(110, ${getBarPercentage()}%, 50%)`;
}, 1);
