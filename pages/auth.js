import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Layout from "../components/Layout";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function signIn(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setMsg("Xatolik: " + error.message);
    else setMsg("Emailga link yuborildi (demo).");
  }

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Kirish / Ro'yxatga olish</h2>
      <form onSubmit={signIn} className="bg-white p-6 rounded shadow max-w-md">
        <label className="block">Email<input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 mt-1 border rounded"/></label>
        <div className="mt-4"><button className="px-4 py-2 bg-indigo-600 text-white rounded">Kirish</button></div>
        {msg && <p className="mt-3 text-green-600">{msg}</p>}
      </form>
    </Layout>
  );
}
