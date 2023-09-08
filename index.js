// Function to set real time of the current day of the week and UTC time
function realTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const dayOfWeek = daysOfWeek[now.getUTCDay()];
  const utcTime = now.toISOString().slice(11, 19);

  const dayElement = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

  dayElement.textContent = dayOfWeek;
  timeElement.textContent = utcTime;

  setTimeout(realTime, 10000); // Update every 10 seconds
}

// Call updateTime initially to set the initial values
realTime();
