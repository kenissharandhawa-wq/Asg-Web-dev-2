const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

let sampleEvent = [
    { title: "Web dev", date: "4-6-2026", category: "Workshop", description: "Learning DOM manipulation." },
    { title: "Web dev2", date: "4-7-2026", category: "Conference", description: "Advanced CSS layout demo." }
];

function createEventCard(eventData) {
    const card = document.createElement("div");
    card.className = "event-card";
    card.innerHTML = `
        <button class="delete-btn">X</button>
        <h3>${eventData.title}</h3>
        <div>${eventData.date}</div>
        <span class="category-badge">${eventData.category}</span>
        <p>${eventData.description}</p>
    `;

    card.querySelector(".delete-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        card.remove();
        if (eventContainer.children.length === 0) showEmptyState();
    });

    return card;
}

function showEmptyState() {
    eventContainer.innerHTML = '<div id="empty-state" class="empty-state">No events yet. Add your first event!</div>';
}

function addEvent(eventData) {
    const emptyState = document.getElementById("empty-state");
    if (emptyState) emptyState.remove();
    eventContainer.appendChild(createEventCard(eventData));
}

eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    };
    addEvent(eventData);
    eventForm.reset();
});

addSampleBtn.addEventListener("click", () => {
    sampleEvent.forEach(event => addEvent(event));
});

clearAllBtn.addEventListener("click", () => {
    eventContainer.innerHTML = "";
    showEmptyState();
});

window.addEventListener("keydown", (e) => {
    const keyPressed = document.getElementById("keyPressed");
    const demoContent = document.getElementById("demoContent");
    keyPressed.textContent = e.key === " " ? "Space" : e.key;
    
    const testStr = "<strong>DOM Demo</strong>   ";
    demoContent.innerHTML = `
        <p><strong>innerHTML:</strong> ${testStr} (Renders tags)</p>
        <p><strong>innerText:</strong> ${testStr} (Collapses space)</p>
        <p><strong>textContent:</strong> ${testStr} (Keeps space)</p>
    `;
});