import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EmployeeRow from './EmployeeRow';
import { Table } from 'react-bootstrap';

export default class EmployeeTable extends Component {
  render() {
    const employeeRows = this.props.employees.map(employee => {
      return (
        <EmployeeRow employee={employee} key={employee._id} />
      );
    });

    return (
      <Table striped bordered condensed hover>
        <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Admin</th>
        </tr>
        </thead>
        <tbody>
          {employeeRows}
        </tbody>
      </Table>
    );
  }
}

EmployeeTable.defaultProps = {
  employees: [],
};

EmployeeTable.propTypes = {
  employees: PropTypes.array.isRequired,
};
