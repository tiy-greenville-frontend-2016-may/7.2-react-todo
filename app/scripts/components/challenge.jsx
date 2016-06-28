var React = require('react');


var TextComponent = React.createClass({
  render: function(){
      console.log(this.props);

      return (
        <div>
        <p className="aside-text">{this.props.text}</p>
        <p className="aside-text">{this.props.username}</p>
        </div>
      );
  }
});

var Challenge = React.createClass({
  render: function(){
      var username = 'dan';

      return (
        <div>
          <h2>Rob is Awesome!</h2>

          {/* This is how we can render a child component */}
          <TextComponent text="Andy&quot;s Text Here" username={username}/>
          <TextComponent text="Kara Got It!!"/>
        </div>
      );
  }
});

module.exports = {
  'Challenge': Challenge
};
