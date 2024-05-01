# Biopsy Data Dropdown

This guide demonstrates how to use a JSON file (`data.json`) to populate a dropdown in an HTML file using Node.js.

```js
const data = FileAttachment("data/CancerTypes.txt").text();
```

<div id="CancerTypes"></div>
<script src="gdc.json.js"></script>

```js
// Function to create and populate a dropdown from fetched data
  function createDropdown(data) {
    const selectElement = document.createElement('select');
    const lines = data.split('\n');

    lines.forEach(line => {
      if (line.trim()) {
        const option = document.createElement('option');
        option.value = line.trim();
        option.textContent = line.trim();
        selectElement.appendChild(option);
      }
    });

    selectElement.addEventListener('change', function(event) {
      console.log(`You selected: ${event.target.value}`);
      // Additional actions based on selection can be added here
    });

    // Append the select element to the DOM
    document.getElementById('CancerTypes').appendChild(selectElement);
  }

  // Function to initiate fetching cancer data and creating the dropdown
  async function initiate() {
    try {
      const data = await handleDataFetching(); // You'll need to modify this to receive data from the server
      if (data) {
        createDropdown(data);
      }
    } catch (error) {
      console.error('Error initiating dropdown:', error);
    }
  }

  // Call the initiate function on load, or when appropriate
  initiate();

CancerInputs(data);
async function drawTimeline() {
            const response = await fetch('/gdc-data');
            const data = await response.json();
            
            // Assume data is processed into an array of events for timeline
            const events = data.map(d => ({ date: new Date(d.date), description: d.event }));
            
            const svg = d3.select("#timeline").append("svg")
                .attr("width", 800)
                .attr("height", 600);
            
            // Basic setup for timeline - expand this based on your specific requirements
            svg.selectAll("circle")
                .data(events)
                .enter()
                .append("circle")
                .attr("cx", d => timeScale(d.date))
                .attr("cy", 100)
                .attr("r", 5)
                .attr("fill", "blue");
        }

        drawTimeline();
```

Cancer Treatment Timeline
<script src="https://d3js.org/d3.v6.min.js"></script>
ss<div id="timeline"></div>


