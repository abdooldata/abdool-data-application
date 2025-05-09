<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>abdool-data-Application</title>
    <script src="https://js.paystack.co/inline.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.0/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100 font-sans leading-normal tracking-normal">

    <!-- Navbar -->
    <nav class="bg-blue-600 p-4">
        <div class="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" class="text-white text-3xl font-bold">abdool-data-Application</a>
            <div>
                <button id="signup" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
                <button id="login" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div id="main-content" class="p-4 max-w-7xl mx-auto">
        <div id="dashboard" class="hidden">
            <h2 class="text-2xl font-semibold">Welcome to Your Dashboard</h2>
            <!-- Dashboard content -->
            <div class="mt-4">
                <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onclick="buyAirtime()">Buy Airtime</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onclick="buyData()">Buy Data</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onclick="buyCable()">Buy Cable</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700" onclick="payElectricity()">Pay Electricity</button>
                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onclick="complain()">File Complaint</button>
                <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700" onclick="viewHistory()">View History</button>
            </div>
        </div>

        <!-- SignUp/ Login Forms -->
        <div id="signup-form" class="hidden">
            <h2 class="text-2xl font-semibold">Sign Up</h2>
            <form id="signup-form-content">
                <input type="email" id="signup-email" placeholder="Email" class="border p-2 my-2 w-full" required>
                <input type="password" id="signup-password" placeholder="Password" class="border p-2 my-2 w-full" required>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</button>
            </form>
        </div>

        <div id="login-form" class="hidden">
            <h2 class="text-2xl font-semibold">Login</h2>
            <form id="login-form-content">
                <input type="email" id="login-email" placeholder="Email" class="border p-2 my-2 w-full" required>
                <input type="password" id="login-password" placeholder="Password" class="border p-2 my-2 w-full" required>
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-blue-600 p-4 text-center text-white">
        <p>&copy; 2025 abdool-data-Application. All rights reserved.</p>
    </footer>

    <!-- JavaScript -->
    <script>
        // Simulate email verification
        const verifyEmail = (email) => {
            alert(`A verification link has been sent to ${email}`);
        };

        // Show the appropriate form
        document.getElementById('signup').addEventListener('click', () => {
            document.getElementById('signup-form').classList.remove('hidden');
            document.getElementById('login-form').classList.add('hidden');
        });

        document.getElementById('login').addEventListener('click', () => {
            document.getElementById('login-form').classList.remove('hidden');
            document.getElementById('signup-form').classList.add('hidden');
        });

        // Handle sign up
        document.getElementById('signup-form-content').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('signup-email').value;
            verifyEmail(email);
            document.getElementById('signup-form').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        });

        // Handle login
        document.getElementById('login-form-content').addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('dashboard').classList.remove('hidden');
        });

        // Placeholder functions for dashboard actions
        function buyAirtime() { alert('Buying Airtime'); }
        function buyData() { alert('Buying Data'); }
        function buyCable() { alert('Buying Cable'); }
        function payElectricity() { alert('Paying Electricity'); }
        function complain() { alert('Filing Complaint'); }
        function viewHistory() { alert('Viewing History'); }
    </script>

</body>
</html>


# abdool-data-Application

**abdool-data-Application** is a simple all-in-one web app for uploading, managing, and accessing data easily and securely. It supports user registration, login, email verification (simulated), data uploads, and flexible Paystack payments.

## Features

- User Registration and Login  
- Email Verification (Simulated)  
- Upload CSV or JSON Datasets  
- User Dashboard with Data Overview  
- Flexible Paystack Integration  
  - Enter any amount you wish to pay  
  - Not required before accessing features  
- Responsive and Modern UI (TailwindCSS)  
- Fully contained in one HTML file  
- Free and Open Source  

## Live App

You can access the app here:  
[https://abdooldata.github.io/abdool-data-application/](https://abdooldata.github.io/abdool-data-application/)

## How to Deploy (Optional)

To deploy your own version on GitHub Pages:

1. Fork or clone this repository:
   ```bash
   git clone https://github.com/yourusername/abdool-data-application.git
   cd abdool-data-application

2. Push to GitHub if needed:

git add .
git commit -m "Initial commit"
git push origin main


3. On GitHub:



Go to Settings > Pages
Under Source, select the main branch
Select / (root) folder
Click Save

Your app will be live at:
https://abdooo-data-application.github.io/abdool-data-application/


---

Contact

For support or feedback, reach out via:
Email: auh439@gmail.com
Phone: 07065631640