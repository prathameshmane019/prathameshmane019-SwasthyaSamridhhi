'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/DefaultLayout"
import DocotrReg from "../../../componants/Admin/docreg"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <DocotrReg></DocotrReg>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
