// Function to fetch data from GDC API
//async function fetchGDCData() {
//    const url = 'https://api.gdc.cancer.gov/files';
  
    // Example filters for fetching data related to a specific project
 //   const filters = {
 //     op: 'in',
   //   content: {
 //       field: 'cases.project.project_id',
  //      value: ['TCGA-GBM']
  //    }
  //  };

 /**function CancerInputs(data){
      const selectElement = document.createElement('select');
      const lines = data.split('\n');
      
      // Iterate over each line and create an option element
      lines.forEach(line => {
          if (line.trim().length > 0) { // Make sure line is not empty
              const option = document.createElement('option');
              option.value = line.trim();
              option.textContent = line.trim();
              selectElement.appendChild(option);
          }
      });
  
      selectElement.addEventListener('change', function(event) {
          //add fetch data 
          console.log(`You selected: ${event.target.value}`);
      });
      document.getElementById('CancerTypes').appendChild(selectElement);
  }**/
  
    // Constructing the query parameters

  
  // Usage of the fetchGDCData function
  fetchGDCData().then(data => {
    if (data) {
      // The data has been successfully fetched and parsed
      console.log('GDC Data:', data);
      // Process the data here
    }
  });


  async function fetchCancerData() {
    const url = 'rest/disease/latest';
    const params = new URLSearchParams({
      type: 'HEMATO',
      q: 'Burkitt',
      api_key: 'dbe3ba51409a44fba1b9eef4ea609690'
    });
  
    try {
      const response = await fetch(`${url}?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let output = '';
      data.results.forEach(val => {
        output += `${val.id} - ${val.name}\n`;
      });
      return output;
    } catch (error) {
      console.error('Error fetching Cancer data:', error);
      throw error; // Rethrow to handle it in the calling code
    }
  }
  
  // Function to handle both GDC and Cancer data fetching
  async function handleDataFetching() {
    try {
      const cancerDataOutput = await fetchCancerData();
      console.log('Cancer Data:', cancerDataOutput);
    } catch (error) {
      // Error handling logic for when either fetch fails
      console.error('Data fetching failed:', error);
    }
  }
  
  // Calling the function to handle data fetching
  handleDataFetching();
  

  