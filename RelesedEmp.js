import React, { Component } from 'react';
import AddEmp from './AddEmp'
class RelesedEmp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            stateObj: []
        }
        this.delEmp = this.delEmp.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        return {
            list: props.empDetails
        }
    }

    delEmp = (evt) => {

        const { onAddEmpClick } = this.props;
        let objValues = {
            letEmpId: evt.target.id,
            letEmpName: document.getElementById(evt.target.id).children[1].innerHTML,
            letEmpSalary: document.getElementById(evt.target.id).children[2].innerHTML,
            letEmpAge: document.getElementById(evt.target.id).children[3].innerHTML,
            letTempFlag: true
        }
        this.state.list.map((item, index) => {

            let tempObjStore = objValues.letEmpId
            if (item.letEmpId == tempObjStore) {
                let letTempList = this.state.list
                letTempList.splice(index, 1);
                this.setState({
                    list: letTempList
                })
            }
        })
        onAddEmpClick(objValues);

    }
    render() {
        return (
            <div>
                <div>

                    <div className="delEmp">
                        <h3>
                            Released Employees List
                         </h3>
                        {
                            this.state.list.length == 0 &&
                            <li>Sorry no data found</li>
                        }
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
                                        <tr key={item.letEmpId} id={item.letEmpId} className={"delClass"}>
                                            <td>{item.letEmpId}</td>
                                            <td>{item.letEmpName}</td>
                                            <td>{item.letEmpSalary}</td>
                                            <td>{item.letEmpAge}</td>
                                            <td><button id={item.letEmpId} onClick={this.delEmp}>Add Employee</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default RelesedEmp;