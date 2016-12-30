var React = require('react');

var WeatherForm = React.createClass({
    getSubmitWeather: function(e) {
        e.preventDefault();
        var loc = this.refs.loc.value;
        if (loc.length > 0) {
            this.refs.loc.value = "";
            this.props.onSetWeather(loc);
        }
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.getSubmitWeather}>
                    <input type="text" ref="loc"/>
                    <button>Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
