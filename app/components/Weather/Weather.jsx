var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherInfo = require('WeatherInfo');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    handleWeatherForm: function(loc) {

      this.setState({
        isLoading:true
      });

      OpenWeatherMap.getTemp(loc).then( temp => {
        this.setState({
          loc: loc,
          temp: temp,
          isLoading:false,
          errorMessage: false
        })
      }, err => {
        this.setState({
          loc:loc,
          isLoading:false,
          errorMessage: true
        })
      })
    },
    getDefaultProps: function() {
        return{
          isLoading: false,
          errorMessage:false
        }
    },
    getInitialState: function() {
        return {
          loc: this.props.loc,
          temp: this.props.temp
        }
    },
    render: function() {

        var {loc, temp, isLoading, errorMessage} = this.state;

        function renderMessage () {
          if(isLoading){
            return <h3>Fetching Weather...</h3>
          }else if(errorMessage){
              return <WeatherInfo loc={loc} errorMessage={errorMessage}/>
          }else if(temp && location ){
            return <WeatherInfo loc={loc} temp={temp}/>
          }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSetWeather={this.handleWeatherForm}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
