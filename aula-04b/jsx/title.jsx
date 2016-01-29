
import React from "react";

var TitleBox = React.createClass({
	getDefaultProps() {
		return {
			text: "",
			corLetra:""
		};
	},
     render: function(){
     	return (
     		<div className="titleBox" >
     		    <h1 style={{color: this.props.corLetra}}>
     		        {this.props.children}
     		    </h1>
     		</div>
     	);
     }
});

export default {
	TitleBox: TitleBox
};