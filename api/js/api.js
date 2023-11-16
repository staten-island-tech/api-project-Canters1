function today(){
    const today = new Date();
const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear();
console.log(day, month, year)
const xhr = new XMLHttpRequest();

// Set the request method and API endpoint URL
xhr.open('GET', `https://calendarific.com/api/v2/holidays?&api_key=FwtJjJUkjlmYLzrga2IHDnlcafMzUffk&country=US&year=${year}&month=${month}&day=${day}`);

// Set the response type to JSON
xhr.responseType = 'json'; 

// Send the request
xhr.send();

// Define a callback function to handle the response
xhr.onload = function() {
  // Access the api data
  const response = xhr.response.response;
  const holidays=response.holidays
console.log(holidays)
  // Do something with the response
  return(holidays)
}
}



export {today}