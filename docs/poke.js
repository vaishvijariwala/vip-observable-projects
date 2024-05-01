function CancerInputs(data){
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
}

async function fetchData() {
    try {
        console.log("Clicked!!!!");
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase(); // Corrected to `.value`
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`; // Corrected the template literal for URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error(error);
    }
}
