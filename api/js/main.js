const xhr = new XMLHttpRequest();

// Set the request method and API endpoint URL
xhr.open('GET', 'https://calendarific.com/api/v2/holidays?&api_key=FwtJjJUkjlmYLzrga2IHDnlcafMzUffk&country=US&year=2019');

// Set the response type to JSON
xhr.responseType = 'json'; 

// Send the request
xhr.send();

// Define a callback function to handle the response
xhr.onload = function() {
  // Access the response data
  const response = xhr.response;
  
  // Do something with the response
  console.log(response); 
}