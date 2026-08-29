function getPoints() {
    const saved = localStorage.getItem("points");
    return saved ? Number(saved) : 0;
}

function addPoints(amount) {
    const total = getPoints() + amount;
    localStorage.setItem("points", total);
    showPoints();
}

function showPoints() {
    const display = document.getElementById("pointsDisplay");
    if (display) {
        display.textContent = getPoints();
    }
}

function buyOutfit(name, cost) {
    if (getPoints() >= cost) {
        addPoints(-cost);
        localStorage.setItem("owns_" + name, "yes");
        alert("Unlocked " + name + "!");
    } else {
        alert("Not enough points!");
    }
}

showPoints();