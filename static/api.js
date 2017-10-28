function getInfo(date, symbol)
{
    var xmlHttp = new XMLHttpRequest();
    var theUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey=N6SXUAOK8ABQZ1H2";
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    var json = JSON.parse(response);
    return json["Time Series (Daily)"][date]
}

function getOpen(date, symbol){
    return getInfo(date, symbol)["1. open"]
}

function getClose(date, symbol){
    return getInfo(date, symbol)["4. close"]
}

// getClose("2017-10-16", "VOO")