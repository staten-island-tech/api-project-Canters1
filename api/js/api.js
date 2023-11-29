async function error(status) {
  const codes = {
    401: "Unauthorized Missing or incorrect API token in header.",
    422: "Un-processable Entity meaning something with the message isn’t quite right, this could be malformed JSON or incorrect fields. In this case, the response body contains JSON with an API error code and message containing details on what went wrong.",
    500: "Internal Server Error Issue with Calendarific's servers processing your request. Parameters of input are likely wrong",
    503: "Service Unavailable During planned service outages",
    429: "Too many requests. API limits reached.",
    600: "The Calendarific API is offline for maintenance.",
    601: "Unauthorized Missing or incorrect API token.",
    602: "Invalid query parameters.",
    603: "Authorized Subscription level required."
  }

  return new Promise((resolve, reject) => {
    reject(`Error code ${status}: ${codes[status]}`)
  }); 
}

function nocards(x) {
  console.log(x);

  if (x.length == null) {
    alert("No Holidays Found");
  }
  console.log(x);
}


async function today(x) {
  for (let i = 0; i < 6; i++) {

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i)
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    try {
      const response = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=Zo4vVncf5cZqkcGgXsGbwA6NCP0QMlso&country=US&year=${year}&month=${month}&day=${day}`);
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      const holidays = data.response.holidays; 
      nocards(holidays);
      x(holidays);

    } catch(err) {
      await error(err.message); 
    }

  }
}

async function filter(year, month, day, x) {

  if (year === "" || year < 1) {
    return Promise.reject("please enter a  positive value for year");
  }

  try {

    const response = await fetch(`https://calendarific.com/api/v2/holidays?&api_key=Zo4vVncf5cZqkcGgXsGbwA6NCP0QMlso&country=US&year=${year}&month=${month}&day=${day}`);

    if (!response.ok) {
      throw new Error(response.status); 
    }
      
    const data = await response.json();
    const holidays = data.response.holidays;
    console.log(holidays)
    if (day === "" && month !== "") {
      if (month < 1 || month > 12) {
        return Promise.reject("please enter a value for month between 1 and 12")
      }
      nocards(data.response);
      x(holidays);

    } else if (day === "" && month === "") {
      nocards(data.response); 
      x(holidays);

    } else {
      if (month < 1 || month > 12) {
        return Promise.reject("please enter a value for month between 1 and 12");
      } else if (day < 1 || day > 31) {
        return Promise.reject("please enter a day between 1 and 31");
      }

      nocards(data.response);
      x(holidays);
    }

  } catch (err) {
    await error(err.message);
  }

}

export { filter };
export { today };