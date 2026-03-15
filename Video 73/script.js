function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const container = document.querySelector(".container");

    // Format views (e.g., 560000 → 560K)
    let viewStr;
    if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    } else if (views >= 1000) {
        viewStr = (views / 1000).toFixed(1) + "K";
    } else {
        viewStr = views;
    }

    const box = document.createElement("div");
    box.classList.add("box");

    box.innerHTML = `
        <div class="thumbnail">
            <img src="${thumbnail}" alt="Thumbnail">
            <span class="duration">${duration}</span>
        </div>
        <div class="video-info">
            <h3>${title}</h3>
            <p class="channel">${cName}</p>
            <p class="meta">${viewStr} views • ${monthsOld} months ago</p>
        </div>
    `;

    container.appendChild(box);
}

createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    560000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
);

console.log("Script.js initializing");