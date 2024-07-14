const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/add-new-campingPlace", (req, res) => {
    res.send(`
        <div style="margin-top:100px; display:flex; flex-direction:column; align-items:center">
            <h1 style="text-align:center">ADD new 'Camping Place'</h1>
            <form action="/campingPlace" method="POST" style="background-color: #f2f2f2; display: flex; flex-direction: column; gap: 20px; width: 400px; padding: 20px; ">
                <input type="text" name="name" placeholder="Name" style="padding: 10px;"/>
                <input type="text" name="location" placeholder="location" style="padding: 10px;"/>
                <div>
                <input type="number" name="from" placeholder="from" style="padding: 10px;"/>
                <input type="number" name="to" placeholder="to" style="padding: 10px;"/>
                </div>
                <input type="number" name="phoneNumber" placeholder="Phone Number" style="padding: 10px;"/>
                <input type="text" name="homePage" placeholder="Home Page" style="padding: 10px;"/>
                <input type="text" name="description" placeholder="Description" style="padding: 10px;"/>
                <input type="submit" value="Add" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer"/>
            </form>
        </div>
    `);
});

app.use("/campingPlace", (req, res) => {
    console.log(req.body);
    res.send(`
        <div style="display:flex; justify-content:center; width:100%; margin-top:200px; ">
            <div style="background:#8080801a; padding:20px; box-shadow:rgb(0 0 0 / 35%) 0px 0px 5px 0px; border-radius:20px">
                <h1>camping Place has been added</h1>
                <p>Name: '${req.body.name}'</p>
                <p>Location: '${req.body.location}'</p>
                <div>
                    <p>Time:</p>
                    <div style="margin-left:30px">
                        <p>from: '${req.body.from}'</p>
                        <p>to: '${req.body.to}'</p>
                    </div>
                </div>
                <p>Phone Number: '${req.body.phoneNumber}'</p>
                <p>Home Page: '${req.body.homePage}'</p>
                <p>Description: '${req.body.description}'</p>
            </div>
        </div>
        `);
});

app.use("/", (req, res) => {
    console.log("middleware...");
    res.send(`<h1>home</h1>`);
});

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
    console.log(`Server running on port:`, PORT);
});
