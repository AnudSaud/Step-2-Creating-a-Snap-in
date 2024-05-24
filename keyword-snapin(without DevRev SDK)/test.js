// test.js

const snapin = require('./hello-world-snapin');

// Simulated event and context
const event = {
    timeline_entry_created: {
        content: "This is a test timeline entry with the keyword DevRev.",
        owner_id: 12345
    }
};

const context = {
    inputs: {
        keyword: "Snap"
    }
};

// Execute the snap-in function
snapin(event, context).then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
