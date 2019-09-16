import React, { Component } from 'react'
import AddEmp from './AddEmp';
import ReleaseEmp from './RelesedEmp';
class Parent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <AddEmp></AddEmp>
                </div>
                <div>
                    <ReleaseEmp></ReleaseEmp>
                </div>
            </div>
        )
    }
}

export default Parent;