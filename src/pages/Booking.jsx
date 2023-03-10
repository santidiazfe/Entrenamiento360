import React, { useState } from 'react';
import Nav from '../components/Nav';

const Booking = () => {
  const [selectedTime, setSelectedTime] = useState('');
  const [submittedTime, setSubmittedTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const selectedHour = Number(selectedTime.split(':')[0]);

    if (now.getHours() < selectedHour ||
        (now.getHours() === (selectedHour) && now.getMinutes() < 45)) {
      console.log('Enviando formulario...');
      setSubmittedTime(selectedTime);
    } else {
      alert('El horario seleccionado no está disponible.');
    }
  };

  return (
    <div>
      <Nav />
      <form onSubmit={handleSubmit} className='bg-[#0c7034] flex flex-col h-screen text-white justify-start pt-48 px-4'>
        <label className='text-2xl font-bold'>Seleccioná el horario:</label> 
        <select value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} className='h-10 tet-xl text-black rounded-md bg-white font-semibold my-6 pl-4'>
          <option value=''>Seleccione una hora</option>
          <option value='8:00'>8:00</option>
          <option value='9:00'>9:00</option>
          <option value='10:00'>10:00</option>
          <option value='16:00'>16:00</option>
          <option value='17:00'>17:00</option>
          <option value='18:00'>18:00</option>
          <option value='19:00'>19:00</option>
          <option value='20:00'>20:00</option>
        </select>
        <div className='flex justify-center items-center py-4'>
          <button className='bg-[#0d3b1e] w-32 font-bold hover:text-[#009e3a] hover:bg-[#104423]  rounded-md px-5 py-[5px] shadow-md hover:shadow-4xl' type='submit'>Enviar</button>
        </div>
        {submittedTime && <p className='text-white'>Horario seleccionado para las {submittedTime} te esperamos!</p>}
      </form>
    </div>
  );
};

export default Booking;
