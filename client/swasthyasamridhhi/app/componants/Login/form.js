'use client'
import React, { useState } from 'react';
import LoginForm from './Loginfrom';

const FormComponent = () => {
  const [userType, setUserType] = useState('admin'); // Default to admin

  const handleUserTypeChange = (newUserType) => {
    setUserType(newUserType);
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">

<div className="w-1/2 h-screen hidden lg:block ">
  <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat" alt="Placeholder Image" class="object-cover w-full h-full"></img>
</div>

<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2 ">
<h2></h2>
      <button onClick={() => handleUserTypeChange('admin')} className='w-10 bg-blue m-1'>Admin</button>
      <button onClick={() => handleUserTypeChange('patient')}>Patient</button>
      <button onClick={() => handleUserTypeChange('doctor')}>Doctor</button>

      {userType === 'admin' && <AdminForm />}
      {userType === 'patient' && <PatientForm />}
      {userType === 'doctor' && <DoctorForm />}
</div>
</div>
   
  );
};

const AdminForm = () => {
  // Render admin-specific form fields here
  return <div><LoginForm type="Admin" /></div>;
};

const PatientForm = () => {
  // Render patient-specific form fields here
  return <div><LoginForm type="Patient" /></div>;
};

const DoctorForm = () => {
  // Render doctor-specific form fields here
  return <div><LoginForm type="Doctor" /></div>;
};

export default FormComponent;



