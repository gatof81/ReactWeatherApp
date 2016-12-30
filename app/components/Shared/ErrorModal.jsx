var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function(){
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  propTypes: {
    errorMessage: React.PropTypes.string.isRequired
  },
  render: function(){
    var {errorMessage} = this.props;
    return(
      <div className="reveal tiny text-center" id="error-modal" data-reveal>
        <h4>Sorry!</h4>
        <p>{errorMessage}</p>
        <p>
          <button className="button hollow" data-close="">Okay</button>
        </p>
      </div>
    )
  }
});

module.exports = ErrorModal
