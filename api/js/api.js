function today(x){
  for (let i = 0; i < 6; i++) {  
    const currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() + i)
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear();


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://calendarific.com/api/v2/holidays?&api_key=FwtJjJUkjlmYLzrga2IHDnlcafMzUffk&country=US&year=${year}&month=${month}&day=${day}`);
    xhr.responseType = 'json'; 
    xhr.send();

    xhr.onload = function() {
      const response = xhr.response.response;
      const holidays=response.holidays
      console.log(holidays)
      console.log(day, month, year)
      x(holidays)
    }
}
}

function filter(year,month,day, x){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://calendarific.com/api/v2/holidays?&api_key=FwtJjJUkjlmYLzrga2IHDnlcafMzUffk&country=US&year=${year}&month=${month}&day=${day}`);
    xhr.responseType = 'json'; 
    xhr.send();

    xhr.onload = function() {
      const response = xhr.response.response;
      const holidays=response.holidays
      console.log(holidays)
      x(holidays)
    }
}


export {filter}
export {today}