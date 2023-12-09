// src/components/BookAppointment.js

import React, { useState } from 'react';
import Navbar from '../Navbar';

const BookAppointment = () => {
  const [childName, setChildName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [reason, setReason] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the appointment booking, e.g., sending the data to a server.
  };

  return (
    <div className="bg-gray-100 p-4">
        <Navbar />
      <div className="container mx-auto py-8 mt-20">
        <h1 className="text-2xl font-bold mb-4">Book an Appointment</h1>
        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="childName" className="block font-medium mb-2">
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="appointmentDate" className="block font-medium mb-2">
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="reason" className="block font-medium mb-2">
              Reason for Appointment
            </label>
            <textarea
              id="reason"
              name="reason"
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAppointment;
