const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hi from server using code Deploy" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
