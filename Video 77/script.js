// function createCard(title, cName, views, monthsOld, duration, thumbnail) {
//     const container = document.querySelector(".container");

//     // Format views (e.g., 560000 → 560K)
//     let viewStr;
//     if (views >= 1000000) {
//         viewStr = (views / 1000000).toFixed(1) + "M";
//     } else if (views >= 1000) {
//         viewStr = (views / 1000).toFixed(1) + "K";
//     } else {
//         viewStr = views;
//     }

//     const box = document.createElement("div");
//     box.classList.add("box");

//     box.innerHTML = `
//         <div class="thumbnail">
//             <img src="${thumbnail}" alt="Thumbnail">
//             <span class="duration">${duration}</span>
//         </div>
//         <div class="video-info">
//             <h3>${title}</h3>
//             <p class="channel">${cName}</p>
//             <p class="meta">${viewStr} views • ${monthsOld} months ago</p>
//         </div>
//     `;

//     container.appendChild(box);
// }

// createCard(
//     "Introduction to Backend | Sigma Web Dev video #2",
//     "CodeWithHarry",
//     560000,
//     7,
//     "31:22",
//     "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
// );

// console.log("Script.js initializing");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
  // console.log(`Creating card with:`);
  // console.log(`Title: ${title}`);
  // console.log(`Channel: ${cName}`);
  // console.log(`Views: ${views}`);
  // console.log(`Months Old: ${monthsOld}`);
  // console.log(`Duration: ${duration}`);
  // console.log(`Thumbnail: ${thumbnail}`);

  // Finish this function
  let viewStr;
  if (views < 1000) {
    // viewnumber = views;
    viewStr = (views / 1000).toFixed(1) + "K";
  } else if (views >= 1000000) {
    // viewnumber = views;
    viewStr = (views / 1000000).toFixed(1) + "M";
  } else {
    // viewnumber = views;
    viewStr = views / 1000000 + "K";
  }

  let html = `
        <div class="card">
            <div class="img">
                <img src="${thumbnail}" alt="">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} • ${viewStr} views • ${monthsOld} months ago</p>
            </div>
        </div>
    `;

  document.querySelector(".container").innerHTML += html;
}

createCard(
  "Introduction to Backend | Sigma Web Dev video #2",
  "CodeWithHarry",
  560000,
  7,
  "31:22",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
);
