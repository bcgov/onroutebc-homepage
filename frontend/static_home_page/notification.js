// Notification
const notification = {
  // true | false (no quoation marks)
  show: false,
  // "red" | "blue" | "green" | "gold"
  color: "red",
  // "Your header text here"
  header: "Important Notice ",
  // "Your content text here" (tip: insert "\n" for new line and "\t" for tabs)
  content: "onRouteBC is undergoing scheduled maintenance on [Date] from [Start Time] to [End Time]. During this period, you may experience temporary disruptions. We apologize for any inconvenience and appreciate your understanding."
};


// Script
const notificationContainer = document.querySelector("#notification");

const notificationSection = document.createElement("div");
notificationSection.className = "box notification"

const header = document.createElement("div");
header.className = `box-header notification__header notification__header--${notification.color}`;
header.innerHTML = `<h2>${notification.header}</h2>`;

const content = document.createElement("div");
content.className = `box-content notification__content notification__content--${notification.color}`;
content.innerHTML = `<p>${notification.content}</p>`;

notificationSection.appendChild(header)
notificationSection.appendChild(content)

if (notificationContainer && notification.show) {
  notificationContainer.appendChild(notificationSection);
}
