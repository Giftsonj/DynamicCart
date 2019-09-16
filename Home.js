import React, { Component } from 'react';


import { Link } from 'react-router-dom'
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <button><Link to={"/AddEmp"}>AddEmployee</Link></button>
            </div>
        )
    }
}
export default Home;