const PORT = process.env.PORT || 5555;
const userInput = "";

export const inputObject = {
  js: "JAVASCRIPT",
  frontEnd: "FRONT-END",
  backEnd: "BACK-END",
  testing: "TESTING",
  db: "DATABASES",
  er: "EXTERNAL-RESOURCES",
};

export async function fetchResources() {
  // Make a HTTP GET request with the fetch method
  // HTTP METHOD: GET
  // Address: http://localhost:port
  // Header: Accept: application/json

  // Declare a variable to store the HTTP response

  const response = await fetch(
    `http://localhost:${PORT}/resources/${userInput}`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  // If the request fails log out an error
  if (!response.ok) {
    console.error(`Status: ${response.status}`);
    console.error(`Text: ${await response.text()}`);
    return;
  }

  // Use the json method that parses the reponses body as JSON.
  const data = await response.json();

  // Log out our parsed data
  console.log(typeof data, data);
}

// change userInput to let
// const jsbutton = document.getElementById("js icon"); do this for each icon
// jsbutton.addEventListener("click", function to set userInput to inputObject.js){
// topic1Location.textContent = javascript topic 1
// }; do this for each icon

// to do: list of functions to set each version of userInput to be specific topic
// eg: setJS(){ userInput = inputObject.js }
