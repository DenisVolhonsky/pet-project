import React, { useState } from 'react';

const ControlledForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 mx-auto bg-white p-6 rounded shadow-lg p-4"
    >
      <h2 className="text-lg font-semibold mb-4">Controlled form</h2>

      <label className="block mb-2">
        <span className="text-gray-700">Имя</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter name"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter email"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter message"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default ControlledForm;
