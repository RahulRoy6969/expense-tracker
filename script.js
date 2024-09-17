const expenseInput = document.getElementById('expense-description');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const transactionList = document.getElementById('transaction-history');
const totalExpense = document.getElementById('total-expense');
const totalIncome = document.getElementById('total-income');
const balance = document.getElementById('balance');
const notification = document.getElementById('notification');
const balanceIndicator = document.getElementById('balance-indicator');

document.addEventListener('DOMContentLoaded', loadTransactionsFromLocalStorage);

function addExpense() {
    const description = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value.trim());
    const category = categoryInput.value;

    if (description === '' || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid expense description and amount.', 'error');
        return;
    }

    addTransaction(description, amount, category, 'Expense');
    updateSummary();
    clearInputs();
    showNotification('Expense added successfully!', 'success');
    saveToLocalStorage(description, amount, category, 'Expense');
}

function addIncome() {
    const description = document.getElementById('income-description').value.trim();
    const amount = parseFloat(document.getElementById('income-amount').value.trim());

    if (description === '' || isNaN(amount) || amount <= 0) {
        showNotification('Please enter a valid income description and amount.', 'error');
        return;
    }

    addTransaction(description, amount, 'Income', 'Income');
    updateSummary();
    clearInputs();
    showNotification('Income added successfully!', 'success');
    saveToLocalStorage(description, amount, 'Income', 'Income');
}

function addTransaction(description, amount, category, type) {
    const transactionRow = document.createElement('tr');
    transactionRow.innerHTML = `
        <td>${description}</td>
        <td>${category}</td>
        <td>${amount.toFixed(2)}</td>
        <td>${type}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    transactionList.appendChild(transactionRow);

    transactionRow.querySelector('.delete-btn').addEventListener('click', function () {
        transactionRow.remove();
        updateSummary();
        removeFromLocalStorage(description, amount, category, type);
        showNotification(`${type} deleted successfully.`, 'success');
    });
}

function updateSummary() {
    let incomeTotal = 0;
    let expenseTotal = 0;

    document.querySelectorAll('#transaction-history tr').forEach((row) => {
        const amount = parseFloat(row.cells[2].textContent);
        const type = row.cells[3].textContent;

        if (type === 'Income') {
            incomeTotal += amount;
        } else {
            expenseTotal += amount;
        }
    });

    totalIncome.textContent = incomeTotal.toFixed(2);
    totalExpense.textContent = expenseTotal.toFixed(2);
    
    const balanceValue = incomeTotal - expenseTotal;
    balance.textContent = balanceValue.toFixed(2);

    // Change balance text color based on balance value
    if (balanceValue > 0) {
        balance.classList.remove('balance-negative', 'balance-neutral');
        balance.classList.add('balance-positive');
    } else if (balanceValue < 0) {
        balance.classList.remove('balance-positive', 'balance-neutral');
        balance.classList.add('balance-negative');
    } else {
        balance.classList.remove('balance-positive', 'balance-negative');
        balance.classList.add('balance-neutral');
    }
}

function clearInputs() {
    document.getElementById('income-description').value = '';
    document.getElementById('income-amount').value = '';
    expenseInput.value = '';
    amountInput.value = '';
    categoryInput.value = 'Housing';
}

function clearAll() {
    transactionList.innerHTML = '';
    totalIncome.textContent = '0';
    totalExpense.textContent = '0';
    balance.textContent = '0';
    balanceIndicator.classList.remove('positive', 'negative');
    balanceIndicator.classList.add('neutral');
    localStorage.removeItem('transactions');
    showNotification('All transactions cleared successfully.', 'success');
}

function showNotification(message, type) {
    notification.textContent = message;
    notification.classList.add('show');

    if (type === 'error') {
        notification.classList.add('error');
    } else {
        notification.classList.remove('error');
    }

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Local Storage Functions
function saveToLocalStorage(description, amount, category, type) {
    const transactions = getTransactionsFromLocalStorage();
    transactions.push({ description, amount, category, type });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function getTransactionsFromLocalStorage() {
    return localStorage.getItem('transactions') ? JSON.parse(localStorage.getItem('transactions')) : [];
}

function loadTransactionsFromLocalStorage() {
    const transactions = getTransactionsFromLocalStorage();

    transactions.forEach((transaction) => {
        addTransaction(transaction.description, transaction.amount, transaction.category, transaction.type);
    });

    updateSummary();
}

function removeFromLocalStorage(description, amount, category, type) {
    let transactions = getTransactionsFromLocalStorage();

    transactions = transactions.filter((transaction) => 
        transaction.description !== description || 
        transaction.amount !== amount || 
        transaction.category !== category || 
        transaction.type !== type
    );

    localStorage.setItem('transactions', JSON.stringify(transactions));
}
