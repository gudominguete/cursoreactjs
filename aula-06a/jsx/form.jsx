import React from "react";

var Formulario = React.createClass({
    getInitialState(){
    	return {
    		autor:"",
    		texto:""
    	}
    },
    handleAuthorChange(e){
    	this.setState({
    		autor:e.target.value
    	});
    },
    handleTextChange(e){
    	console.log(e);
    	this.setState({
    		texto:e.target.value
    	});
    },
    render: function(){
     	return(
     		<div className="formBox">
	     	    <form className="commentForm">
			        <input type="text" 
			            placeholder="Your name" 
	                    onChange={this.handleAuthorChange} />
			        <input type="text" 
			            placeholder="Say something..."
			            onChange={this.handleTextChange} />
			        <input type="button" value="Post" />
	            </form>

	            Autor:{this.state.autor}<br />
	            Texto:{this.state.texto}
            </div>
     		);
     }
});

export default {
	Formulario: Formulario
};