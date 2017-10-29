// WAZWO7ZKZYT8TQQE



function search(){
  var StockSymbolLookup = require('stock-symbol-lookup');
  var response = StockSymbolLookup.search("g");
  console.log(response);

  // var xmlHttp = new XMLHttpRequest();
  // var theUrl = "http://d.yimg.com/aq/autoc?query=g&region=US&lang=en-US&callback=YAHOO.util.ScriptNodeDataSource.callbacks";
  // xmlHttp.open( "GET", theUrl, true ); // false for synchronous request
  // xmlHttp.setRequestHeader(
  //   'Access-Control-Allow-Origin', 'true');
  // // if (!xmlHttp) {
  // //   alert('CORS not supported');
  // //   return;
  // // }
  // var response = xmlHttp.responseText;
  // console.log(response);
  // // xmlHttp.onload = function() {
   
  // // }
  // xmlHttp.send();``
  
  // // var json = JSON.parse(response);
  // // return json;
}

window.addEventListener("message", receiveMessage, false);
function receiveMessage(event)
{
    // do something with event.data;
}

// search("google")