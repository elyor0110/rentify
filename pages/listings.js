import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";
import useSWR from "swr";

const fetcher = url => fetch(url).then(r => r.json());

export default function Listings() {
  // Use internal API route for CORS and serverless secret usage
  const { data, error } = useSWR("/api/listings", fetcher, { refreshInterval: 5000 });

  if (error) return <Layout><p>Error loading</p></Layout>;
  if (!data) return <Layout><p>Loading...</p></Layout>;

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">E'lonlar</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map(item => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img src={item.image || "/placeholder.jpg"} alt="" className="h-40 w-full object-cover rounded"/>
            <h3 className="mt-3 font-bold text-indigo-600">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
            <p className="mt-2 font-bold">${item.price}</p>
            <div className="mt-3 flex gap-2">
              <a className="px-3 py-1 bg-indigo-600 text-white rounded" href={`/listing/${item.id}`}>Details</a>
              <a className="px-3 py-1 border rounded" href={`/contract/${item.id}`}>Contract</a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
