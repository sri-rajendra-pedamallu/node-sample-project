import React, { Component } from "react";
import axios from "axios";
class EmployeeList extends Component {
  constructor() {
    super();
    this.state = { employeeList: [] };
  }
  componentDidMount() {
    axios.get("/employees").then(
      response => {
        this.setState({ employeeList: response.data.employees });
      },
      function(err) {
        console.log(err);
      }
    );
  }
  render() {
    let employeeList = this.state.employeeList.map((employee, index) => {
      return (
        <tr key={employee._id}>
          <td className="text-left" >{index+1}</td>
          <td>{employee.name}</td>
          <td>{employee.gender}</td>
          <td>{employee.company}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.address}</td>{" "}
        </tr>
      );
    });
    return (
      <div className="container">
        <h4 className="text-left">Employees List</h4>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th className="text-center"> Sl No.</th>
              <th className="text-center">Name</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Company</th>
              <th className="text-center">E-mail</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Address</th>
            </tr>
          </thead>
          <tbody>{employeeList}</tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeList;
