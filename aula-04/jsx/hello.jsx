
import React from "react";
import ReactDOM from "react-dom";
import Title from './title.jsx';

var TitleBox = Title.TitleBox;

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
    		    <TitleBox text="Texto de titulo!" corLetra="red"/>
	    		<CommentBox />
    		
    		</div>
    	);
    }
});

ReactDOM.render(
  <BodyBox />,
  document.getElementById('content')
);