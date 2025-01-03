// JavaScript code for a simple search engine for car year, make, and model

// Sample data for cars
const carDatabase = [
    { year: 2020, make: "Toyota", model: "Camry" },
    { year: 2021, make: "Honda", model: "Civic" },
    { year: 2022, make: "Ford", model: "Mustang" },
    { year: 2019, make: "Tesla", model: "Model 3" },
    { year: 2020, make: "Chevrolet", model: "Malibu" },
  ];
  
  // Function to search for cars based on year, make, and model
  function searchCars(year, make, model) {
    return carDatabase.filter((car) => {
      const yearMatch = year ? car.year === year : true;
      const makeMatch = make ? car.make.toLowerCase() === make.toLowerCase() : true;
      const modelMatch = model ? car.model.toLowerCase() === model.toLowerCase() : true;
      return yearMatch && makeMatch && modelMatch;
    });
  }
  
  // Example usage
  const year = 2020; // Set to null or undefined to ignore year in search
  const make = "Toyota"; // Set to null or undefined to ignore make in search
  const model = "Camry"; // Set to null or undefined to ignore model in search
  
  const results = searchCars(year, make, model);
  console.log("Search Results:", results);
  
  // HTML structure for user input and displaying results
  document.body.innerHTML = `
    <div>
      <h1>Car Search Engine</h1>
      <label>Year: <input type="number" id="yearInput"></label>
      <label>Make: <input type="text" id="makeInput"></label>
      <label>Model: <input type="text" id="modelInput"></label>
      <button onclick="handleSearch()">Search</button>
      <div id="results"></div>
    </div>
  `;
  
  // Function to handle search when button is clicked
  function handleSearch() {
    const yearInput = document.getElementById("yearInput").value;
    const makeInput = document.getElementById("makeInput").value;
    const modelInput = document.getElementById("modelInput").value;
  
    const year = yearInput ? parseInt(yearInput) : null;
    const make = makeInput || null;
    const model = modelInput || null;
  
    const results = searchCars(year, make, model);
    
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = results.length > 0
      ? `<ul>${results.map(car => `<li>${car.year} ${car.make} ${car.model}</li>`).join("")}</ul>`
      : "<p>No cars found.</p>";
  }
  