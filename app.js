// Function to update the displayed date and time
function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const currentDay = now.toLocaleString("en-US", { weekday: "long" });
    document.querySelector('[data-testid="currentTimeUTC"]').innerText =  utcTime;
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
  }
  
  // Set interval to update the date and time every second
  setInterval(updateDateTime, 1000);


  

  

  