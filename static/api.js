function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

response = httpGet("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VOO&apikey=N6SXUAOK8ABQZ1H2")
// response.json()