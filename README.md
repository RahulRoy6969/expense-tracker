
# Expense Tracker

A simple web-based application to track your income and expenses, calculate the balance, and display a transaction history. This app also supports local storage, so your data persists even after refreshing the page.

## Features

- **Add Income/Expenses**: Users can input income and expenses, along with a description, category, and amount.
- **Balance Display**: Displays the total balance, with color-coded feedback:
  - **Green** for a positive balance
  - **Red** for a negative balance
  - **Black/Neutral** for zero balance
- **Transaction History**: All transactions (income/expenses) are logged in a table with the option to delete specific entries.
- **Popup Notifications**: Visual notifications appear in the bottom-right corner to indicate actions like successful additions or deletions.
- **Local Storage**: All transactions are saved in the browser's local storage to persist data across sessions.
- **Clear All Transactions**: Users can clear all the transactions with a single click.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Contributing](#contributing)

## Installation

No installation is required. Simply clone this repository and open the `index.html` file in any modern web browser.

### Clone the repository

```bash
git clone https://github.com/RahulRoy6969/expense-tracker.git
```

## Usage

1. **Open** the `index.html` file in a web browser.
2. **Enter** your income or expense details (description, amount, category).
3. Click the **Add Income** or **Add Expense** button.
4. Check the **Transaction History** table for all recorded transactions.
5. See your **total balance** and the **summary** of income and expenses.
6. **Delete** individual transactions from the table or **clear all** transactions with a button click.
7. **Notifications** will appear in the bottom-right corner of the screen for added or deleted transactions.

### Screenshots

#### 1. Main Interface
![Main Interface](screenshot1.png)

#### 2. Adding a Transaction
![Adding a Transaction](screenshot2.png)

#### 3. Summary and Balance Display
![Balance Display](screenshot3.png)

## Technologies Used

- **HTML5**: Structuring the application.
- **CSS3**: Styling the layout and making it responsive.
- **JavaScript**: For handling user interactions and managing the local storage.
  
## File Structure

```bash
.
├── index.html          # Main HTML file
├── styles.css          # CSS for styling
├── script.js           # JavaScript for the app functionality
├── README.md           # Project documentation
```

## Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

