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
      className="py-20 flex flex-col items-center justify-center gap-6 px-6 md:px-20"
      style={{
        background: "linear-gradient(135deg, #0F2027, #203A43, #2C5364)", // same as About Me
      }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
      {success && <p className="text-green-500 mb-4">Message sent!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
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
        <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Send
        </button>
      </form>
    </section>
  );
}