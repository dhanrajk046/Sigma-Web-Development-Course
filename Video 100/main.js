const fs = require("fs");

function createCard(title, channel, views, monthsOld, duration, thumbnail) {
    return `
    <div class="flex gap-4 bg-zinc-900 p-4 rounded-lg m-4 w-[1100px]">

        <div class="relative shrink-0">
            <img src="${thumbnail}" class="w-64 rounded-md">

            <span class="absolute bottom-1 right-1 bg-black text-white px-1 text-sm rounded">
                ${duration}
            </span>
        </div>

        <div class="flex flex-col justify-center">
            <h2 class="text-white text-2xl font-bold">
                ${title}
            </h2>

            <p class="text-gray-400 mt-2">
                ${channel} • ${views} views • ${monthsOld} ago
            </p>
        </div>

    </div>
    `;
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>YouTube Card</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-black min-h-screen">

    ${createCard(
        "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
        "CodeWithHarry",
        "931K",
        "3 months",
        "31:20",
        "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
    )}

</body>
</html>
`;

fs.writeFileSync("index.html", html);

console.log("index.html generated successfully");