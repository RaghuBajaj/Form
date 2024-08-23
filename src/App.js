import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [onSubmit, setOnSubmit] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    url: "",
    select: "",
    about: "",
  });
  const blankForm = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: "",
    url: "",
    select: "",
    about: "",
  };

  const validateName = (names) => {
    const valName = /^[A-Za-z\s]+$/;
    return valName.test(names) ? "" : "Name must not contain number.";
  };
  const validateEmail = (email) => {
    const valEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return valEmail.test(email) ? "" : "Email is not valid.";
  };
  const validateContact = (contact) => {
    const valContact = /^\+?[0-9\s\-()]{10,15}$/;
    return valContact.test(contact) ? "" : "Contact is not valid.";
  };
  const validatePassword = (password) => {
    const valPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return valPassword.test(password) ? "" : "Password is not valid.";
  };

  useEffect(() => {
    let formString = localStorage.getItem("form");
    if (formString) {
      let form = JSON.parse(localStorage.getItem("form"));
      setForm(form);
    }
  }, []);
  const saveToLS = (params) => {
    localStorage.setItem("form", JSON.stringify(form));
  };

  var finalForm = form;
  function check(form) {
    (form.lastName === "")(form.email === "")(form.contact === "")(
      form.url === ""
    );
  };

  function handleSubmit() {
    finalForm = form;
    saveToLS();
    setOnSubmit(true);
  };
  function handleReset() {
    setForm(blankForm);
    localStorage.clear();
    saveToLS();
    setOnSubmit(false);
  };
  function handleFirstName(e) {
    setForm((prevState) => {
      return { ...prevState, firstName: e.target.value };
    });
    saveToLS();
  };
  function handleLasttName(e) {
    setForm((prevState) => {
      return { ...prevState, lastName: e.target.value };
    });
    saveToLS();
  };
  function handleEmail(e) {
    setForm((prevState) => {
      return { ...prevState, email: e.target.value };
    });
    saveToLS();
  };
  function handleContact(e) {
    setForm((prevState) => {
      return { ...prevState, contact: e.target.value };
    });
    saveToLS();
  };
  function handleURL(e) {
    setForm((prevState) => {
      return { ...prevState, url: e.target.value };
    });
    saveToLS();
  };
  function handleAbout(e) {
    setForm((prevState) => {
      return { ...prevState, about: e.target.value };
    });
    saveToLS();
  };

  function handlePassword(e) {}

  return (
    <div className="App">
      <div className="form">
        <div className="head">Form in React</div>

        <div className="section">
          <label className="label">First Name</label>
          <input
            type="text"
            placeholder="Enter First Name"
            className="input"
            value={form.firstName}
            onChange={handleFirstName}
            id="firstName"
          ></input>
          {onSubmit && form.firstName === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' First Name can not be empty '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Last Name</label>
          <input
            type="text"
            placeholder="Enter Last Name"
            className="input"
            onChange={handleLasttName}
            value={form.lastName}
          ></input>
          {onSubmit && form.lastName === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' Last Name can not be empty '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Enter Email</label>
          <input
            type="text"
            placeholder="Enter Email"
            className="input"
            onChange={handleEmail}
            value={form.email}
          ></input>
          {onSubmit && form.email === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' Email Id is required '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Contact</label>
          <input
            type="text"
            placeholder="Enter Mobile number"
            className="input"
            onChange={handleContact}
            value={form.contact}
          ></input>
          {onSubmit && form.contact === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' Contact no. is required '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Gender</label>
          <div className="selection">
            <input
              type="radio"
              name="gender"
              checked={form.gender === "Male"}
              onClick={() => {
                setForm({ ...form, gender: "Male" });
              }}
            ></input>
            <label className="gap"> Male</label>
            <input
              type="radio"
              name="gender"
              checked={form.gender === "Female"}
              onClick={() => {
                setForm({ ...form, gender: "Female" });
              }}
            ></input>
            <label className="gap">Female</label>
            <input
              type="radio"
              name="gender"
              checked={form.gender === "Other"}
              onClick={() => {
                setForm({ ...form, gender: "Other" });
              }}
            ></input>
            <label className="gap">Other</label>
          </div>
        </div>

        <div className="section">
          <label className="label">Your best Subject</label>
          <div className="selection">
            <input
              type="radio"
              name="subject"
              checked={form.subject === "English"}
              onClick={() => {
                setForm({ ...form, subject: "English" });
              }}
            ></input>
            <label className="gap"> English</label>
            <input
              type="radio"
              name="subject"
              checked={form.subject === "Maths"}
              onClick={() => {
                setForm({ ...form, subject: "Maths" });
              }}
            ></input>
            <label className="gap">Maths</label>
            <input
              type="radio"
              name="subject"
              checked={form.subject === "Physics"}
              onClick={() => {
                setForm({ ...form, subject: "Physics" });
              }}
            ></input>
            <label className="gap">Physics</label>
          </div>
        </div>

        <div className="section">
          <label className="label">Upload Resume</label>
          <input
            type="text"
            placeholder="No file selected"
            className="input"
          ></input>
          {onSubmit && form === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' Resume is required '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Enter URL</label>
          <input
            type="text"
            placeholder="Enter URL"
            className="input"
            onChange={handleURL}
            value={form.url}
          ></input>
          {onSubmit && form.url === "" && (
            <div style={{ color: "red", fontSize: "10px" }}>
              ' URL is required '
            </div>
          )}
        </div>

        <div className="section">
          <label className="label">Select your choice</label>

          <select
            type="option"
            placeholder="Select your Ans"
            className="input"
            onChange={(e) => {
              setForm({ ...form, select: e.target.value });
            }}
          >
            <option value="">Select Your Ans</option>

            <option className="subOpt" type="radio" name="select" value="Maths">
              Maths
            </option>
            <option
              className="subOpt"
              type="radio"
              name="select"
              value="Physics"
            >
              Physics
            </option>
            <option
              className="subOpt"
              type="radio"
              name="select"
              value="Sanskrit"
            >
              Sanskrit
            </option>
            <option className="subOpt" type="radio" name="select" value="Hindi">
              Hindi
            </option>
          </select>
        </div>

        <div className="section">
          <label className="label">About</label>
          <textarea
            itemType="text"
            placeholder="About your selection"
            className=" abt"
            value={form.about}
            onChange={handleAbout}
          ></textarea>
        </div>

        <div className="section">
          <label className="label">Password</label>
          <div className="">
            <input
              type="text"
              className="input"
              onChange={handlePassword}
              placeholder="Password"
            ></input>
          </div>
        </div>

        <div className="section">
          <label className="label">Submit OR Reset</label>
          <div className="button">
            <button className="btn" type="reset" onClick={handleReset}>
              Reset
            </button>
            <button className="btn" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className="section">
          {onSubmit && (
            <div className="result">
              {" "}
              <div>Your Submited Entries</div>
              <ul>
                {Object.entries(finalForm).map(([key, value]) => (
                  <li key={key} className="li">
                    <strong>{key} : </strong>
                    <span style={{ color: "orange" }}>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
