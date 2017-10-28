
function search(query){
  var xmlHttp = new XMLHttpRequest();
  var theUrl = "http://d.yimg.com/aq/autoc?query="+query+"&region=US&lang=en-US;
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  var response = xmlHttp.responseText;
  var json = JSON.parse(response);
  return json["Time Series (Daily)"][date]
http://d.yimg.com/aq/autoc?query=google&region=US&lang=en-US
}