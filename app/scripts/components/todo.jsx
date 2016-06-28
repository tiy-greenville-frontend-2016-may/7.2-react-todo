var React = require('react');

var TodoListing = React.createClass({
  render: function(){

    var itemList = this.props.items.map(function(todo){
      return <li key={todo.title}>{todo.title}</li>
    });

    return (
      <ul>
        {itemList}
      </ul>
    );
  }
});

var TodoForm = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.props.handleSubmit}>
        <div className="form-group">
          <label htmlFor="todo-item">Todo</label>
          <input
            onChange={this.props.handleChange}
            type="text"
            className="form-control"
            id="todo-item"
            value={this.props.inputText}
            placeholder="Add your todo..." />
        </div>

        <input type="submit" className="btn btn-success" value="Add"/>
      </form>
    );
  }
});

var AppComponent = React.createClass({
  getInitialState: function(){
    return {items: [], text: 'Something Cool Here'};
  },
  handleSubmit: function(event){
    event.preventDefault();
    var todoTitle = this.state.text;
    var newTodo = {
      'title': todoTitle
    };
    this.setState({
      'items': this.state.items.concat([newTodo]),
      'text': ''
    });
  },
  handleChange: function(event){
    event.preventDefault();
    this.setState({'text': event.target.value});
  },
  render: function(){
    return (
      <div>
        <h1>React Todo App</h1>
        <TodoForm inputText={this.state.text} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <TodoListing items={this.state.items}/>
      </div>
    );
  }
});

module.exports = {
  'AppComponent': AppComponent
};
