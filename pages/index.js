import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl font-bold text-indigo-700">Rentify — Onlayn mashina va uy ijarasi</h1>
          <p className="mt-4 text-gray-700">Tez, ishonchli va rasmiy MyID orqali tasdiqlangan ijaralar.</p>
          <div className="mt-6 space-x-3">
            <Link href="/listings"><a className="px-4 py-2 bg-indigo-600 text-white rounded">Ko‘rish</a></Link>
            <Link href="/add"><a className="px-4 py-2 border rounded">E'lon joylashtirish</a></Link>
          </div>
        </div>
        <div>
          <img src="/hero.png" alt="hero" className="rounded shadow" />
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">🚗 Mashina</h3>
          <p className="mt-2 text-gray-600">Kunlik/oylik ijaralar.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">🏡 Uy</h3>
          <p className="mt-2 text-gray-600">Qisqa va uzoq muddatli uy ijaralari.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold">📄 Shartnoma</h3>
          <p className="mt-2 text-gray-600">Onlayn shartnoma va to‘lov demo integratsiyasi.</p>
        </div>
      </section>
    </Layout>
  );
}
