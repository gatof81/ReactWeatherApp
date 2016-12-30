var React = require('react');


var WeatherInfo = props => {
  var {temp, loc, errorMessage} = props;

  function renderMessage () {
    if(temp && loc){
      return <div className="textCentered">It's it {temp} in {loc}.</div>;
    }else if(errorMessage){
      return <h3 className="textCentered">couldn't fetch temp for {loc}.</h3>
    }
  }

  return (
    <div>
        {renderMessage()}
    </div>
  );
}

module.exports = WeatherInfo;
