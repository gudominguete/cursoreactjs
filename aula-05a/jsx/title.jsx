
import React from "react";

var TitleBox = React.createClass({
	getDefaultProps() {
		return {
			text: "",
			corLetra:""
		};
	},
	getInitialState(){
		return{
			hide: false
		}
	},
	trocaValor(){
		this.setState({
			hide:!this.state.hide
		});
	},
    render: function(){
     	return (
     		<div className="titleBox" >
     		    <h1 style={{color: this.props.corLetra}}>
     		        {this.props.children}
     		    </h1>
     		    Valor de hide: {this.state.hide.toString()}
     		    <button onClick={this.trocaValor} 
     		            title="Trocar valor">
     		            Trocar Valor
     		    </button>
     		</div>
     	);
     }
});

export default {
	TitleBox: TitleBox
};