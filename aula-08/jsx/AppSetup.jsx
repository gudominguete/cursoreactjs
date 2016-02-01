
import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, Link} from 'react-router';

import Hello from "./hello.jsx";
import Index from "./index.jsx";
import NotFound from "./notfound.jsx";


ReactDOM.render(
	(
		<Router>
		    <Route path="/" component={Index} />
		    <Route path="/hello" component={Hello} />


  	    	<Route path="*" component={NotFound} />
		</Router>
		),
    document.getElementById('content')
);

module.exports = true;