const express = require('express');
const app = express();
const cors = require('cors');
const fs = require("fs");
const { exec } = require("child_process");

app.use(cors({
    origin: "*",
}));
app.use(express.json());
app.post('/', async (req, res) => {
    const filePath = "data.rsdl";
    const pathToRapid = "C:\\Users\\git\\odata-rapid\\tools\\rsdl\\rapid-cli\\rapid\\rapid.csproj";
    let rsdl = JSON.stringify(req.body.data.state);
    let command = `dotnet run --project ${pathToRapid} ${filePath}`;
    rsdl = rsdl.replace(/\\n/g, "\r\n").replace(/"/g, "");
    console.log("body", rsdl);
    fs.writeFile(filePath, rsdl, (err, data) => {
        if (err) return console.error(err);
        
        exec(command, (err, stdout, stderr) => {
            if (err) return console.error(err);
            if (stderr) return console.error(stderr);

            fs.readFile("data.openapi", "utf8", (err, data) => {

                res.json(data);
            });
        });

    });
});
const server = app.listen(3000, console.log("Waiting..."));
