export function getInfo(date, symbol){
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey=N6SXUAOK8ABQZ1H2";
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    var json = JSON.parse(response);
    return json["Time Series (Daily)"][date]
}

export function getOpen(date, symbol){
    let pre = getInfo(date, symbol);
    let ans = undefined;
    if(pre !== undefined){
      ans = pre["1. open"];
    }
    var i = 0;
    const days = 1000*60*60*24;
    while(pre === undefined || ans === undefined){
      console.log(1);
      var date1 = new Date(date);
      var xx = date1.getTime()-day*i; //subtract one day
      var yy = new Date(xx);

      var year = yy.getFullYear();
      // console.log(year);
      var year_string = year.toString();
      if(year < 10) {
        year_string = "0" + year.toString();
      }
      console.log(year);

      var month = yy.getMonth()+1;
      // console.log(month);
      var month_string = month.toString();
      if(month < 10) {
        month_string = "0" + month.toString();
      }

      var day = yy.getDate();
      // console.log(day);
      var day_string = day.toString();
      if(day < 10) {
        day_string = "0" + day.toString();
      }

      var new_date = year_string+"-"+month_string+"-"+day_string;
      pre = getInfo(new_date, symbol);
      if(pre !== undefined) {
        ans = pre["1. open"];
      }
      i+=1;
    }
    return ans;
}

export function getClose(date, symbol){
    return getInfo(date, symbol)["4. close"]
}

// getClose("2017-10-16", "VOO")
