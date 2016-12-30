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
                    <input type="search" ref="loc" placeholder="Search Weather by city"/>
                    <button className="button expanded hollow">Get Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
