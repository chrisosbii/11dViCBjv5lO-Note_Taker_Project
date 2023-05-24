# 11dViCBjv5IO-Note_Taker_Project

## Description
    
This is an application that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
    
You will need to download the files localy from Gighub and run 'npm install' in the source directory of the files which will then download the packages you need.
    
## Usage
    
After inquirer has been downloaded all the user needs to do to run the project is type 'npm start' and then it will start the server.

Navigate to http://localhost:3001/ to get to the landing page

Project is currently deployed at [link](https://shielded-atoll-41922.herokuapp.com/)

Screenshots for proof of usability:

UI endpoint checks:
![get landing page](./images/noteTaker_landingPage.JPG)
![get notes page](./images/noteTaker_NotesPage.JPG)

API endpoint checks:
1. get all:
![get all notes](./images/noteTaker_GET_api_notes.JPG)
2. post a new note:
![post a new note](./images/noteTaker_POST_api_notes.JPG)
3. get all to check in new one was added:
![verify post worked](./images/noteTaker_GET_api_notes_validate_post.JPG)
4. delete the new note:
![delete a note](./images/noteTaker_DELETE_api_notes.JPG)
5. check that the deleted one is no longer in the database:
![verify delete worked](./images/noteTaker_GET_api_notes_validate_delete.JPG)

## Credits
- https://akhromieiev.com/req-body-undefined-express/ for help with making sure data is not undefined
- https://akhromieiev.com/req-body-undefined-express/ for some things on deleting from an array
- https://stackoverflow.com/questions/68236597/what-is-a-good-way-to-generate-a-random-32-byte-buffer-in-node-js-javascript for help with the crypto uuid input

    
## License
    
[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)
    
## Tests
no tests

    
## Questions
    
Ran into issues with the notes page not loading as the path was having issues. Found out that you can remove the path value and it was able to get to the page just fine.

Ran into another issue with body being undefined. Was able to be fixed by adding a middle ware call

Ids where made using crypto's uuid generator
