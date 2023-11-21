function error(status){
  const codes = {
    401 : "Unauthorized Missing or incorrect API token in header.",
    422 : "Un-processable Entity meaning something with the message isn’t quite right, this could be malformed JSON or incorrect fields. In this case, the response body contains JSON with an API error code and message containing details on what went wrong.",
    500 : "Internal Server Error Issue with Calendarific's servers processing your request. Parameters of input are likely wrong",
    503 : "Service Unavailable During planned service outages",
    429 : "Too many requests. API limits reached.",
    600 : "The Calendarific API is offline for maintenance.",
    601 : "Unauthorized Missing or incorrect API token.",
    602 : "Invalid query parameters.",
    603 : "Authorized Subscription level required."
  }
  alert(codes[status])
}

function nocards(x){
  console.log(x)
  if(x.length==0){
    alert("No Holidays Found");
    return;
  }
}


function today(x){
  for (let i = 0; i < 6; i++) {  
    const currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() + i)
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear();


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://calendarific.com/api/v2/holidays?&api_key=Zo4vVncf5cZqkcGgXsGbwA6NCP0QMlso&country=US&year=${year}&month=${month}&day=${day}`);
    xhr.responseType = 'json'; 
    xhr.send();

    xhr.onload = function() {
      if(xhr.status!==200){
        console.log("test")
        error(xhr.status)
        return
      }
      const response = xhr.response.response;
      const holidays = response.holidays;
      x(holidays); 
    }
}
}

function filter(year, month, day, x) {
  const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://calendarific.com/api/v2/holidays?&api_key=Zo4vVncf5cZqkcGgXsGbwA6NCP0QMlso&country=US&year=${year}&month=${month}&day=${day}`);
    xhr.responseType = 'json';
    xhr.send();
  if (year === "" || year<1) {
    alert("please enter a  positive value for year");
    return
  } 

  else if (day === "" && month !== "") {
    if(month <1 || month>12){
      alert("please enter a value for month between 1 and 12")
      return
    }
    xhr.onload = function() {
      console.log(xhr)
      console.log(xhr.status)
      if(xhr.status!==200){
        console.log("test")
        error(xhr.status)
        return
      }
      const response = xhr.response.response;
      const holidays = response.holidays;
      nocards(response)
      console.log("y, m ")
      x(holidays); 
    }

  } else if (day === "" && month === "") {
    xhr.onload = function() {
      console.log(xhr)
      console.log(xhr.status)
      if(xhr.status!==200){
        console.log("test")
        error(xhr.status)
        return
      }
      const response = xhr.response.response;
      const holidays = response.holidays;
      console.log(response)
      nocards(response)
      console.log(y)
      x(holidays); 
    }

  } else {
    if(month <1 || month>12){
      alert("please enter a value for month between 1 and 12")
      return
    }
    else if(day<1 || day>31){
      alert("please enter a day between 1 and 31")
      return
    }
    xhr.onload = function() {
      console.log(xhr)
      console.log(xhr.status)
      if(xhr.status!==200){
        console.log("test")
        error(xhr.status)
        return
      }
      const response = xhr.response.response;
      const holidays = response.holidays;  
      console.log(response)
      nocards(response)
      console.log("y, m, d")
      x(holidays);
    }
  } 
}

export {filter}
export {today}