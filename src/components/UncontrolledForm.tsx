import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };
    console.log('Form submitted:', formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-1/2 mx-auto bg-white p-6
      rounded shadow-lg p-4"
    >
      <h2 className="text-lg font-semibold mb-4">Uncontrolled form</h2>
      <label className="block mb-2">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          ref={nameRef}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter name"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          ref={emailRef}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter email"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Message</span>
        <textarea
          ref={messageRef}
          className="mt-1 block w-full border-gray-300 rounded p-2"
          placeholder="Enter message"
          required
        />
      </label>

      <button
        type="submit"
        className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default UncontrolledForm;
