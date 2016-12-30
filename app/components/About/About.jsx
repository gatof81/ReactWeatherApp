var React = require('react');

var About = props => {
  return(
    <div>
      <h1 className="text-centered">About</h1>
      <p>
        This is a wheather application build on React. I build this using The
        complete React web developer course.
      </p>
      <p>
        <ol>
          <li>
            <a href="https://facebook.github.io/react">React</a>
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a>
          </li>
        </ol>
      </p>
    </div>
  );
}
module.exports = About;
