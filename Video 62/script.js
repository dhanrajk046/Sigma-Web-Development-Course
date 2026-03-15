// Add event listener to button
document.getElementById("generateBtn").addEventListener("click", generateNames);

function getRandomPrefix() {
    const num = Math.floor(Math.random() * 8);

    switch (num) {
        case 0:
            return "Neo";
        case 1:
            return "Hyper";
        case 2:
            return "Ultra";
        case 3:
            return "Next";
        case 4:
            return "Bright";
        case 5:
            return "Smart";
        case 6:
            return "Prime";
        case 7:
            return "Nova";
        default:
            return "Pro";
    }
}

function getRandomSuffix() {
    const num = Math.floor(Math.random() * 8);

    switch (num) {
        case 0:
            return "Labs";
        case 1:
            return "Tech";
        case 2:
            return "Solutions";
        case 3:
            return "Hub";
        case 4:
            return "Works";
        case 5:
            return "Systems";
        case 6:
            return "Forge";
        case 7:
            return "AI";
        default:
            return "Corp";
    }
}

function generateNames() {
    const keywordInput = document.getElementById("keyword");
    const categoryInput = document.getElementById("category");
    const resultsContainer = document.getElementById("results");

    const keyword = keywordInput.value.trim();
    const category = categoryInput.value;

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Validation
    if (keyword === "") {
        alert("Please enter a business keyword!");
        return;
    }

    // Generate 12 names without arrays
    let count = 0;

    while (count < 12) {
        const prefix = getRandomPrefix();
        const suffix = getRandomSuffix();

        const businessName = prefix + keyword + suffix;

        // Create div element
        const nameCard = document.createElement("div");
        nameCard.className = "name-card";
        nameCard.textContent = businessName + " (" + category + ")";

        // Copy to clipboard on click
        nameCard.addEventListener("click", function () {
            navigator.clipboard.writeText(businessName);
            alert("Copied: " + businessName);
        });

        // Append to results
        resultsContainer.appendChild(nameCard);

        count++;
    }
}
