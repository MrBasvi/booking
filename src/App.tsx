import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingForm from './BookingForm';
import DestinationPage from './DestinationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DestinationPage />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
