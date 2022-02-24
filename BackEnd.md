# Back End

## Status Page

Freshworks [status](https://www.freshworks.com/website-monitoring/)

### Directory

![image](https://user-images.githubusercontent.com/35849655/155036977-1dcff138-5655-4d5f-8fa4-8c902035326c.png)

Static front-end webpages are now located under the `resources`/`front-end` folder

Server side code is put into its own directory in the `root` directory

Front-end react code still lives witin the `charity-islands` folder

### Running Server

To view the front-end and back end connections both servers must be running at the same time

- To run backend server `cd` into server directory then run `npm start`
- To run frontend react server `cd` into `charity-islands` directory then run `npm start`

Port `3000` will be occupied by the react front end 
Port `3001` will be used when running the back end server

## Express

[express](https://expressjs.com/)

Express is used as the current back end web-framework for this application.

```
// server/index.js
const path = require("path");
const express = require("express");

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../charity-islands/build")));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../charity-islands/build", "index.html")
  );
});
```

[Home](index.md)
