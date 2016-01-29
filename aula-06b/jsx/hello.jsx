
import React from "react";
import ReactDOM from "react-dom";
import Title from './title.jsx';
import Form from './form.jsx';

var TitleBox = Title.TitleBox;
var Formulario = Form.Formulario;

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
    		    <TitleBox corLetra="red">
    		        Textoooooo
    		    </TitleBox>
	    		<CommentBox />
    		    <Formulario />
    		</div>
    	);
    }
});

ReactDOM.render(
  <BodyBox />,
  document.getElementById('content')
);