const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/bfhl", (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post("/bfhl", (req, res) => {
    const { data } = req.body;
    
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input format" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length ? [alphabets.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "rahul_sharma_01011999",  // Replace with your name and DOB
        email: "rahul@example.com", // Replace with your email
        roll_number: "ABCD123", // Replace with your roll number
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
