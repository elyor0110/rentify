import { useState } from "react";
import Layout from "../components/Layout";

export default function Add() {
  const [form, setForm] = useState({ title:"", description:"", price:"", category:"mashina", image:"" });
  const [msg, setMsg] = useState("");

  async function submit(e) {
    e.preventDefault();
    const res = await fetch("/api/listings", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
    const data = await res.json();
    if (res.ok) { setMsg("E'lon qo‘shildi!"); setForm({ title:"", description:"", price:"", category:"mashina", image:"" }); }
    else setMsg("Xatolik: " + (data.error || "unknown"));
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Yangi e'lon qo'shish (demo)</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded shadow max-w-lg">
        <label className="block">Sarlavha<input value={form.title} onChange={e=>setForm({...form,title:e.target.value})} className="w-full p-2 mt-1 border rounded"/></label>
        <label className="block mt-3">Tavsif<textarea value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className="w-full p-2 mt-1 border rounded"/></label>
        <label className="block mt-3">Narx<input value={form.price} onChange={e=>setForm({...form,price:e.target.value})} className="w-full p-2 mt-1 border rounded"/></label>
        <label className="block mt-3">Kategoriya
          <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})} className="w-full p-2 mt-1 border rounded">
            <option value="mashina">Mashina</option><option value="uy">Uy</option>
          </select>
        </label>
        <label className="block mt-3">Rasm URL<input value={form.image} onChange={e=>setForm({...form,image:e.target.value})} className="w-full p-2 mt-1 border rounded"/></label>

        <div className="mt-4">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Joylashtirish</button>
        </div>
        {msg && <p className="mt-3 text-green-600">{msg}</p>}
      </form>
    </Layout>
  );
}
