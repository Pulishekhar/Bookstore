// src/components/ContactModal.jsx
import React, { useState } from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (e.g., send the data to a server)
    console.log({ name, email, message });
    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <dialog className="modal" open>
      <form className="modal-box" onSubmit={handleSubmit}>
        <h2 className="font-bold text-lg">Contact Us</h2>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="textarea textarea-bordered"
            required
          />
        </div>
        <div className="modal-action">
          <button type="submit" className="btn">Send</button>
          <button type="button" className="btn" onClick={onClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
};

export default ContactModal;
