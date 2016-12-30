var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=c62119e3334b0fa55ef7f80f2fd84142&units=metric';

//c62119e3334b0fa55ef7f80f2fd84142

module.exports = {
  getTemp: function(loc) {
    var encodedLocation = encodeURIComponent(loc)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function (res){
      if(res.data.cod && res.data.message){
        throw new Error(res)
      }else{
        return res.data.main.temp;
      }
    },function (res){
      throw new Error("City not found.");
    });
  }
}
