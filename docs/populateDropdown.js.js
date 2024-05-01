const fs = require('fs');

// Path to the JSON file
const filePath = 'data.json';

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Access the document from Node.js - usually not possible, you would need a DOM library like JSDOM
    // This is just conceptual as Node.js does not have a native document object
    const JSDOM = require('jsdom').JSDOM;
    const dom = new JSDOM(`<!DOCTYPE html><body><select id='biopsyDropdown'></select></body>`);
    const document = dom.window.document;

    // Extract 'site_of_resection_or_biopsy' from each diagnosis and append to the dropdown
    const select = document.getElementById('biopsyDropdown');
    jsonData.forEach(record => {
        record.diagnoses.forEach(diagnosis => {
            if (diagnosis.site_of_resection_or_biopsy) {
                const option = document.createElement('option');
                option.value = diagnosis.site_of_resection_or_biopsy;
                option.textContent = diagnosis.site_of_resection_or_biopsy;
                select.appendChild(option);
            }
        });
    });

    // Log the HTML to see the output - in a real scenario, this should manipulate the actual DOM in a browser
    console.log(document.body.innerHTML);
});

