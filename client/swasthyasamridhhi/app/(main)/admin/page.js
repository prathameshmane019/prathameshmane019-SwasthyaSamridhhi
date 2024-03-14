'use client'
import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from "../../componants/DefaultLayout"
import Compoanants from "../../componants/Admin/cadmin"

function ExampleComponent() {
  const [formData, setFormData] = useState({ name: '', age: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/patient-register', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };

  return (
    <div>
      <DefaultLayout>
          <Compoanants></Compoanants>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
