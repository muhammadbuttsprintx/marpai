import React from 'react';
import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import DoctorsSpecialist from 'pages/doctors-specialists';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <ReactRoutes>
          <Route path="/doctors" element={<DoctorsSpecialist />} />
        </ReactRoutes>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
