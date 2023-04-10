import React, { useState, useEffect } from "react";
import "./index.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  // const [age, setAge] = useState('');
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  // const [Country, setCountry] = useState('');
  const [address, setAddress] = useState("");
  // const [interests, setInterests] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!telephone) {
      errors.telephone = "Tel is required";
    } else if (telephone.length < 10 || telephone.length > 10) {
      errors.telephone = "telephone must be 10 digits";
    }
    if (!address) {
      errors.address = "Address is required";
    }
    setErrors(errors);
  }, [name, email, telephone, address]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (Object.keys(errors).length !== 0) {
      console.log(errors);
      return;
    }

    console.log("Form submitted");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h1>User Registration Form</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            {isSubmitted && errors.name && (
              <span className="error">{errors.name}</span>
            )}
          </div>
          {/* <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="inputrange"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
            {errors.age && <span>{errors.age}</span>}
          </div> */}

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {isSubmitted && errors.email && <span>{errors.email}</span>}
          </div>
          <div>
            <label htmlFor="telephone">Tel</label>
            <input
              id="tel"
              placeholder="Tel No."
              maxLength={10}
              type="number"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
            />
            {isSubmitted && errors.telephone && <span>{errors.telephone}</span>}
          </div>
          {/* <div>
            <label htmlFor="State">State</label>
            <input
              id="sta"
              type="text"
              value={sta}
              onChange={(event) => setState(event.target.value)}
            />
            {errors.sta && <span>{errors.sta}</span>}
          </div> */}
          {/* <div>
            <label htmlFor="Country">Country</label>
            <input
              id="cou"
              type="text"
              value={cou}
              onChange={(event) => setCountry(event.target.value)}
            />
            {errors.cou && <span>{errors.cou}</span>}
          </div> */}

          <div>
            <label htmlFor="Add">Address</label>
            <input
              id="add"
              placeholder="Address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
            {isSubmitted && errors.address && <span>{errors.address}</span>}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default RegistrationForm;
