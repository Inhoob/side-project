import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ handleSubmit, onChange, form }) {
  const { userFirstname, userLastname, userPhone } = form;
  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={onChange}
        value={userFirstname}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={onChange}
        value={userLastname}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={onChange}
        value={userPhone}
      />
      <br />

      <button style={style.form.submitBtn} className="submitButton" type="submit" value="Add User">
        Add User
      </button>
    </form>
  );
}

function InformationTable(props) {
  const userData = props.userData;
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {userData?.map((user, idx) => (
          <tr key={idx}>
            <th style={style.tableCell}>{user.userFirstname}</th>
            <th style={style.tableCell}>{user.userLastname}</th>
            <th style={style.tableCell}>{user.userPhone}</th>
          </tr>
        ))}
      </thead>
    </table>
  );
}

function Application(props) {
  const [userData, setUserData] = useState([]);
  const [form, setForm] = useState({
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(
      [...userData, form].sort(function (a, b) {
        let nameA = a.userLastname.toUpperCase();
        let nameB = b.userLastname.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
    setForm({ userFirstname: "", userLastname: "", userPhone: "" });
  };
  console.log(userData);

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
    console.log(form);
  };

  return (
    <section>
      <PhoneBookForm handleSubmit={handleSubmit} onChange={onChange} form={form} />
      <InformationTable userData={userData} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
