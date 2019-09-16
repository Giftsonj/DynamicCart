
import React, { Component, useCallback } from 'react';
import RelesedEmp from './RelesedEmp'
import { Link } from 'react-router-dom'

class AddEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            stateID: '',
            stateName: '',
            stateSalary: '',
            stateAge: '',
            stateObj: [],
            qwe: false,

        }
        // this.addProd = this.addProd.bind(this);
        // this.addCart = this.addCart.bind(this);
        // this.renderHtml = this.renderHtml.bind(this);
        this.addEmp = this.addEmp.bind(this);
        // this.releaseEmp = this.releaseEmp.bind(this);
    }

    componentDidMount() {
        let url = 'http://dummy.restapiexample.com/api/v1/employees';
        fetch(url).then(response => response.json()).then(this.jsonData).catch();
    }

    jsonData = (data) => {
        let tempId = data.letEmpId;
        // console.log(data)
        if (tempId != undefined) {
            let objValues = {
                id: data.letEmpId,
                employee_name: data.letEmpName,
                employee_salary: data.letEmpSalary,
                employee_age: data.letEmpAge
            }
            this.setState({
                list: this.state.list.concat(objValues)
            })
            // console.log("hii" + this.state.list)
        }
        else {
            this.setState({
                list: data
            })
        }
    }
    addEmp = (evt) => {

        let trId = "";
        let objValues = {
            letEmpId: evt.target.id,
            letEmpName: document.getElementById(evt.target.id).children[1].innerHTML,
            letEmpSalary: document.getElementById(evt.target.id).children[2].innerHTML,
            letEmpAge: document.getElementById(evt.target.id).children[3].innerHTML
        }
        this.setState({
            stateObj: [...this.state.stateObj, objValues]
        }, () => {
            this.state.list.map((item, index) => {
                let tempObjStore = objValues.letEmpId;
                if (tempObjStore == item.id) {
                    let letTempList = [...this.state.list]
                    letTempList.splice(index, 1);
                    this.setState({
                        list: letTempList
                    })
                }
            })
            // console.log(this.state.list)
        });
        // console.log(this.state.list)

    }

    render() {
        // const {list} = this.state;
        return (
            <div>

                {
                    this.state.list.length == 0 &&
                    <li>Sorry no data found</li>
                }
                <div className="addEmp">
                    <h3>

                        Employees List
        </h3>
                    <table>
                        <tbody>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Age</th>
                                <th>Action</th>
                            </tr>
                            {
                                this.state.list.length > 0 && this.state.list.map((item) => (
                                    <tr key={item.id} id={item.id} className={"liClass"}>
                                        <td>{item.id}</td>
                                        <td>{item.employee_name}</td>
                                        <td>{item.employee_salary}</td>
                                        <td>{item.employee_age}</td>
                                        <td><button id={item.id} onClick={this.addEmp}>Release Employee</button></td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>
                <div>
                    {
                        this.state.stateObj ? <RelesedEmp empDetails={this.state.stateObj} onAddEmpClick={this.jsonData}></RelesedEmp> : <div></div>
                    }

                </div>
            </div >
        )
    }
}

export default AddEmp;