import { useState } from 'react';
// import { supabase } from '../lib/supabaseClient';

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
    <div id="contact" className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      <h2 className="text-5xl font-bold mb-6">Contact Me</h2>
      {success && <p className="text-green-500 mb-4">Message sent!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
        <input value={form.name} onChange={e => setForm({...form,name:e.target.value})} placeholder="Name" required className="border p-2"/>
        <input value={form.email} onChange={e => setForm({...form,email:e.target.value})} placeholder="Email" type="email" required className="border p-2"/>
        <textarea value={form.message} onChange={e => setForm({...form,message:e.target.value})} placeholder="Message" required className="border p-2"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition relative">
          Send
        </button>
      </form>
    </div>
  );
}
