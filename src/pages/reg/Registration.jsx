import React from 'react';
import './registration.css'
const RegistrationForm = () => {
  return (
    
    <div className="formContainer" id='formReg'>
      <h1>Registration Form</h1>
      <p className='ppp'>Please fill out this form with the required information</p>
      <form action="https://register-demo.freecodecamp.org" method="post">
        <fieldset>
          <label htmlFor="first-name">Enter Your First Name: <input id="first-name" type="text" name="first-name" required /></label>
          <label htmlFor="last-name">Enter Your Last Name: <input id="last-name" type="text" name="last-name" required /></label>
          <label htmlFor="fname">Enter Your Father Name: <input id="fname" type="text" name="fname" required /></label>
          {/* <label htmlFor="email">Enter Your Email: <input id="email" type="email" name="email" required /></label> */}
          <label for="dateOfBirth">Date of Birth:</label>
    <input type="date" id="dateOfBirth" name="dateOfBirth" required />
         </fieldset>
         <label htmlFor="age">what is your age in(years): <input id="age" type="number" name="age" min="13" max="120" /></label>

    <fieldset className='add'>
          <label htmlFor="referrer">Gender
            <select id="referrer" name="referrer">
            <option value="">Select</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
            </select>
          </label>  
         
         
         
       
          {/* <label htmlFor="new-password">Create a New Password: <input id="new-password" type="password" name="new-password" pattern="[a-z0-5]{8,}" required /></label> */}
        </fieldset>
       
        <fieldset>
          <label htmlFor="profile-picture">Upload a profile picture: <input id="profile-picture" type="file" name="profile-picture" /></label>
          <label htmlFor="age">Input your age (years): <input id="age" type="number" name="age" min="13" max="120" /></label>
          <label htmlFor="referrer">How did you hear about us?
            <select id="referrer" name="referrer">
              <option value="">(select one)</option>
              <option value="1">freeCodeCamp News</option>
              <option value="2">freeCodeCamp YouTube Channel</option>
              <option value="3">freeCodeCamp Forum</option>
              <option value="4">Other</option>
            </select>
          </label>
          <label htmlFor="bio">Provide a bio:
            <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
          </label>
        </fieldset>
        <fieldset>
    <legend>Contact Information:</legend>
    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" required />

    <label for="phoneNumber">Phone Number:</label>
    <input type="tel" id="phoneNumber" name="phoneNumber" />

    <label for="address">Address:</label>
    <input type="text" id="address" name="address" />
  </fieldset>

        <fieldset>
          <label htmlFor="referrer">what is your education
            <select id="referrer" name="referrer">
              <option value="">(select one)</option>
              <option value="1">Matric</option>
              <option value="2">Inter</option>
              <option value="3">Graduate</option>
              <option value="4">Other</option>
            </select>
          </label>
          <label htmlFor="bio">Provide a bio:
            <textarea id="bio" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
          </label>
        </fieldset>
        <fieldset>
    <legend>Terms and Conditions:</legend>
         
    <label for="terms">
      <input type="checkbox" id="terms" name="terms" required />
      I accept the terms and conditions
    </label>
  </fieldset>

        <input className='bbb' type="submit" value="Submit" />
      </form>
      </div>
  );
}

export default RegistrationForm;
