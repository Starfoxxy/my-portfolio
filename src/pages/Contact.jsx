import React, { useState } from 'react';
// import { supabase } from '../supabaseClient';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', message:'' });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = await supabase.from('contacts').insert([form]);
    if (!error) setSuccess(true);
    setForm({ name:'', email:'', message:'' });
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('src/assets/45176473_9155702.jpg')",
      }}
    >
      <h2 className="text-5xl font-bold mb-10 text-white tracking-wide">Contact Me</h2>
      {success && <p className="text-green-500 mb-4">Message sent!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-lg bg-black/40 p-8 rounded-2xl shadow-lg backdrop-blur-md">
        <input 
          value={form.name} 
          onChange={e => setForm({...form,name:e.target.value})} 
          placeholder="Name" 
          required 
          className="border p-2 rounded-md bg-white text-black placeholder-gray-400"
        />
        <input 
          value={form.email} 
          onChange={e => setForm({...form,email:e.target.value})} 
          placeholder="Email" 
          type="email" 
          required 
          className="border p-2 rounded-md bg-white text-black placeholder-gray-400"
        />
        <textarea 
          value={form.message} 
          onChange={e => setForm({...form,message:e.target.value})} 
          placeholder="Message" 
          required 
          className="border p-2 rounded-md bg-white text-black placeholder-gray-400"
        />
        <button type="submit" className="px-6 py-3 bg-fuchsia-600 text-white rounded-lg hover:bg-fuchsia-500 transition">
          Send
        </button>
      </form>
    </section>
  );
}