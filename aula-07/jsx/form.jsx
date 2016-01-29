import React from "react";

var Formulario = React.createClass({
    getInitialState(){
    	return {
    		comentarios: [],
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
    	this.setState({
    		texto:e.target.value
    	});
    },
    handleButtonClick(){
    	var comentario = {
    		autor:this.state.autor,
    		texto: this.state.texto
    	}
		this.setState({ 
		    comentarios: this.state.comentarios.concat([comentario])
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
			        <input type="button" value="Post" onClick={this.handleButtonClick}/>
	            </form>
	            {this.state.comentarios.map(comentario =>{
	            	return (
	            		<div className="comentarioBox">
			            	Autor:{comentario.autor}<br />
			                Texto:{comentario.texto}
		                </div>
	                )
	            })
	            }
            </div>
     		);
     }
});

export default {
	Formulario: Formulario
};