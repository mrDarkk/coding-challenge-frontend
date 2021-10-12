import React from "react";

// Styles
import "./style.scss";

const DataTable = props => {
  var d;
  return (
   
    <div className="table-wrapper">
      <table className="data-table">
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> Gender </th>
            <th> Surveys </th>
            <th> DOB </th>
            <th> DOR </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length ? (
            props.users.map(user => (
              
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.surveys}</td>
                
                <td>{ user.dateOfBirth}</td>
                <td>{user.registeredAt}</td>
                {/* <td>{user.last_name}</td> */}
                <td className="field-actions">
                  <button
                    className="primary-btn"
                    onClick={() => {
                      props.updateRow(user);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="field-actions__delete"
                    onClick={() => props.deleteRow(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">
                <div className="no-record-message">No Record!</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
