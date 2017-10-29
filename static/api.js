export function getInfo(symbol){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey=N6SXUAOK8ABQZ1H2";
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    var json = JSON.parse(response);
    return json["Time Series (Daily)"]
}


export function getOpen(date, symbol, api_data){
    let pre = api_data[date];
    let ans = undefined;
    const date1 = new Date(date);
    let xx = 0;
    let yy = 0;

    if(pre !== undefined){
      ans = pre["1. open"];
    }
    var i = 0;
    const days = 1000*60*60*24;
    while(i < 5 && (pre === undefined || ans === undefined)){
      xx = date1.getTime()+days*i; //subtract one day
      yy = new Date(xx);

      var year = parseInt(yy.getFullYear());
      var year_string = year.toString();
      if(year < 10) {
        year_string = "0" + year.toString();
      }

      var month = parseInt(yy.getMonth())+1;

      var month_string = month.toString();
      if(month < 10) {
        month_string = "0" + month.toString();
      }

      var day = parseInt(yy.getDate());
      var day_string = day.toString();
      if(day < 10) {
        day_string = "0" + day.toString();
      }

      var new_date = year_string+"-"+month_string+"-"+day_string;
      pre = api_data[new_date];
      if(pre !== undefined) {
        ans = pre["1. open"];
      }
      i+=1;
    }
    if (ans !== undefined){
      return ans;
    }
    return "0";
}

export function getClose(date, symbol){
    return getInfo(date, symbol)[date]["4. close"]
}

// getClose("2017-10-16", "VOO")
