import requests

def getInfo(date, symbol):
  """
  Gets open, high, low, close and volume information of the date for the symbol
  """
  url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey=N6SXUAOK8ABQZ1H2"

  response = requests.get(url)
  json = response.json()
  return json["Time Series (Daily)"][date]

def getOpen(date, symbol):
  """
  Gets open price of the date for the symbol
  """
  return getInfo(date, symbol)["1. open"]

def getClose(date, symbol):
  """
  Gets close price of the date for the symbol
  """
  return getInfo(date, symbol)["4. close"]