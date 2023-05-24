/* Require block */
const express = require('express');
const fs = require('fs');
var notesDB = require('./db/db.json');
const { randomUUID } = require('crypto');

const PORT = 3001;

const app = express();

// Add a static middleware for serving assets in the public folder
app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// GET all the current notes
app.get('/api/notes', (req, res) => {
    // Obtain existing notes
    var currentData;
    
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            currentData = JSON.parse(data);
        }
    })
    const response = {
        status: 'success',
        body: currentData,
    };

    console.log(response);
    res.status(200).json(response);
});

// POST a new note request
app.post('/api/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to add a review`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {
        // Variable for the object we will save
        const newNote = {
        title,
        text,
        id: randomUUID(),
        };

        // Obtain existing notes
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err);
            } else {
            // Convert string into JSON object
            const parsedNotes = JSON.parse(data);

            // Add a new note
            parsedNotes.push(newNote);

            // Write updated notes back to the file
            fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated reviews!')
            );
            }
        });

        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);
    } else {
        res.status(500).json('Error in posting review');
    }
});

app.delete('/api/notes/:id', (req, res) => {
    // Log that a DELETE request was received
    console.info(`${req.method} request received to add a review`);
    // Deconstruct params
    const { id } = req.params;

    // Obtain existing notes
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Convert string into JSON object
            const parsedNotes = JSON.parse(data);

            // check if id is in list of notes
            for (var i = 0; i < parsedNotes.length(); i++){
                if (parsedNotes[i].id == id){
                    parsedNotes = parsedNotes.filter(function(e) {return e !== parsedNotes[i]});
                }
            }

            // Write updated notes back to the file
            fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info(`Successfully deleted id ${id}!`)
            );
        }
        const response = {
            status: 'success',
        };

        console.log(response);
        res.status(204).json(response);
    });

});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);