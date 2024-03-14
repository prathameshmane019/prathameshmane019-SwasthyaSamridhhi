'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/DefaultLayout"
import PateintReg from "../../../componants/Admin/preg"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <PateintReg type="Pateint"></PateintReg>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
