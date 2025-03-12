// Task 1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");
// Task 2: Adding Risk Items Dynamically
const riskForm = document.getElementById("riskForm");

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.setAttribute("class", `riskCard ${riskLevel.toLowerCase()}`);

    const heading = document.createElement("h3");
    heading.textContent = riskName;

    const level = document.createElement("p");
    level.textContent = `Risk Level: ${riskLevel}`;

    const dept = document.createElement("p");
    dept.textContent = `Department: ${department}`;

    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve";

    riskCard.appendChild(heading);
    riskCard.appendChild(level);
    riskCard.appendChild(dept);
    riskCard.appendChild(resolveButton);

    riskDashboard.appendChild(riskCard);
}

riskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const department = document.getElementById("department").value;
    addRiskItem(riskName, riskLevel, department);
    riskForm.reset();
});

// Add sample risks
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");