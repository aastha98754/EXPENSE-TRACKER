
let income = 30000;
let expense = 5000;

document.getElementById("transactionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    if (type === "income") {
        income += amount;
    } else {
        expense += amount;
    }

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${type}</td>
        <td>${date}</td>
        <td class="${type}">
            ${type === "income" ? "+" : "-"}₹${amount}
        </td>
    `;

    document.getElementById("transactionList").appendChild(row);

    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
    document.getElementById("balance").innerText = "₹" + (income - expense);

    document.getElementById("transactionForm").reset();
});
