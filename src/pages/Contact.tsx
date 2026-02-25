import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  }

  return (
    <div className="max-w-full mx-auto px-4 py-16 bg-slate-900">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="dark:bg-slate-800 p-8 rounded shadow-md grid gap-6"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-secondary"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-secondary"
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
          rows={5}
          className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:ring-secondary"
        />
        <button
          type="submit"
          className="bg-secondary text-white py-3 rounded font-semibold hover:bg-amber-800 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm text-center mt-2">{status}</p>}
      </form>
    </div>
  );
}


