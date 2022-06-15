import React, {Component} from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componenetDidCatch(error, info) {
        this.setState({hasError:true});
    }
    
    render(){
        const {hasError} = this.state;

        if (hasError) {
            return <h1> Oops. That is not good</h1>
        }
        return this.props.children; 
    }
}


export default ErrorBoundary;