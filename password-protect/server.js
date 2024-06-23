const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const PASSWORD = 'JL1234';

app.post('/check-password', (req, res) => {
    const { password } = req.body;
    if (password === PASSWORD) {
        return res.status(200).json({ authenticated: true });
    }
    return res.status(401).json({ authenticated: false });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
