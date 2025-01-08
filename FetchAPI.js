// API = Application programming interface
const URL = "https://cat-fact.herokuapp.com/facts";
// Fetch API provides an interface for fetching resourcing.
// let promise = fetch(url, [options]);

// let promise = fetch(URL);
// console.log(promise);

const para = document.querySelector("#facts"); // Selecting the paragraph element to display the facts
const btn = document.querySelector("#buton"); // Selecting the button element to trigger fetching facts

// Function to fetch and display cat facts
const getFacts = async () => {
    console.log("Getting Data...........\n"); // Logging message to indicate fetching process

    para.innerHTML = "Loading..."; // Show a loading message while fetching data

    try {
        let response = await fetch(URL); // Fetch the data from the given URL
        console.log(response); // Logs the Response object

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle non-2xx responses
        }

        let data = await response.json(); // Parse the JSON data
        console.log(data); // Logs the full array of data

        // Display a random fact from the fetched data
        const randomIndex = Math.floor(Math.random() * data.length); // Get a random index
        const randomFact = data[randomIndex].text; // Access the random fact text
        para.innerHTML = randomFact; // Display the random fact in the paragraph
    } catch (error) {
        console.error("Error fetching data:", error); // Log errors if any
        para.innerHTML = "Failed to load cat facts. Please try again."; // Show error message in the UI
    }
};

// Adding an event listener to the button
btn.addEventListener("click", getFacts);
