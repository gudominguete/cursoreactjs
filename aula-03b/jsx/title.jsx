
import React from "react";

var TitleBox = React.createClass({
     render: function(){
     	return (
     		<div className="titleBox">
     		    <h1>
     		    Hello, world! I am a TitleBox
     		    </h1>
     		</div>
     	);
     }
});


export default {
	TitleBox: TitleBox
};