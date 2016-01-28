
import React from "react";
import ReactDOM from "react-dom";

var TitleBox = React.createClass({
     render: function(){
     	return (
     		<div className="titleBox">
     		    <h1>Hello, world! I am a TitleBox</h1>
     		</div>
     	);
     }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

var BodyBox = React.createClass({
    render: function(){
    	return(
    		<div className="bodyBox">
	    		<TitleBox />
	    		<CommentBox />
    		</div>
    	);
    }
});

ReactDOM.render(
  <BodyBox />,
  document.getElementById('content')
);