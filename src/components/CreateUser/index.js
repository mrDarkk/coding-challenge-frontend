import React, { useState } from "react";

const CreateUser = props => {
  const initialData = { id: null, name: "", email: "" , gender: "" ,surveys: "" , dateOfBirth: ""};
  const [user, setUser] = useState(initialData);

  const onInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  const cancel = event => {
    event.preventDefault();
    props.setActiveModal({ active: false });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.email ) return;
        props.createUser(user);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          value={user.name}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email@gmail.com"
          required
          value={user.email}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>gender</label>
        <input
          type="text"
          name="gender"
          
          required
          value={user.gender}
          onChange={onInputChange}
        />
      </div>
      <div className="form-group">
        <label>dateOfBirth(DD/MM/YYYY)</label>
        <input
          type="text"
          name="dateOfBirth"
          required
          placeholder="DD/MM/YYYY"
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
        <button className="primary-btn">Create</button>
        <button className="cancel-btn" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CreateUser;
