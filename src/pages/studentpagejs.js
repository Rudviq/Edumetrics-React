/*const chatContainer = document.querySelector(".chat-container");
const toggleChatButton = document.getElementById("toggleChatButton");
const closeChatButton = document.getElementById("closeChatButton");

// Add an event listener to the toggle button
function toggleChatContainer() {
    // Toggle the display of the chat container
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block";
        toggleChatButton.style.display = "none";
    } else {
        chatContainer.style.display = "none";
        toggleChatButton.style.display = "block";
    }

}

toggleChatButton.addEventListener("click", toggleChatContainer);
closeChatButton.addEventListener("click", toggleChatContainer);*/

//expading the upcoming schedule
document.addEventListener("DOMContentLoaded", function () {
    // ... (Your existing code)

    // Get the expand button and the expanded schedule container by their IDs
    const expandButton = document.getElementById("expandScheduleButton");
    const expandedSchedule = document.querySelector(".upcoming-schedule");
    const upcomingSchedule = document.querySelector(".upcoming");

    // Add an event listener to the expand button


    expandButton.addEventListener("click", function () {
        // Toggle the display of the expanded schedule
        if (expandedSchedule.style.display === "none" || expandedSchedule.style.display === "") {
            expandedSchedule.style.display = "block";
            expandButton.textContent = "Hide Schedule";
            upcomingSchedule.style.display = "none";
        } else {
            expandedSchedule.style.display = "none";
            expandButton.textContent = "Show Full Schedule";
            upcomingSchedule.style.display = "block";
        }

        // For demonstration, let's assume you have an array of schedule items for the first 7 days
        const scheduleData = [
            "Day 1 Schedule",
            "Day 2 Schedule",
            "Day 3 Schedule",
            "Day 4 Schedule",
            "Day 5 Schedule",
            "Day 6 Schedule",
            "Day 7 Schedule"
        ];

        // Loop through the data and create elements for each day's schedule
        expandedSchedule.innerHTML = ""; // Clear existing content
        scheduleData.forEach((scheduleItem, index) => {
            const scheduleItemElement = document.createElement("div");
            scheduleItemElement.classList.add("upcoming-item");
            scheduleItemElement.innerHTML = `<div class="left"><h3>${scheduleItem}</h3></div>`;
            expandedSchedule.appendChild(scheduleItemElement);
        });

    });
});