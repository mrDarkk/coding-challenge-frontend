import React, { useState, useEffect } from "react";

const UpdateUser = props => {
  const [user, setUser] = useState(props.currentUser);

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={onInputChange}
        />
      </div>
    
      <div className="form-group">
        <label>E-Mail</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>gender</label>
        <input
          type="text"
          name="gender"
          value={user.gender}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>dateOfBirth</label>
        <input
          type="text"
          name="dateOfBirth"
          value={user.dateOfBirth}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>surveys</label>
        <input
          type="text"
          name="surveys"
          value={user.surveys}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group form-group--actions">
        <button className="primary-btn">Update</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateUser;
