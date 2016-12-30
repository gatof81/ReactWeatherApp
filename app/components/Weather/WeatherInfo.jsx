var React = require('react');


var WeatherInfo = props => {
  var {temp, loc, errorMessage} = props;

  function renderMessage () {
    if(temp && loc){
      return <div className="text-center">It's it {temp}°C in {loc}.</div>;
    }else if(errorMessage){
      return <h3 className="text-center">couldn't fetch temp for {loc}.</h3>
    }
  }

  return (
    <div>
        {renderMessage()}
    </div>
  );
}

module.exports = WeatherInfo;
