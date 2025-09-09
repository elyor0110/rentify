import useSWR from "swr";
import { supabase } from "../lib/supabaseClient";
import Layout from "../components/Layout";

const fetcher = url => fetch(url).then(r => r.json());

export default function Profile() {
  // demo: show all ads created (no auth filtering for now)
  const { data } = useSWR("/api/listings", fetcher);
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Mening profilim (demo)</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data?.map(i => <div key={i.id} className="bg-white p-4 rounded shadow"><h3 className="font-bold">{i.title}</h3><p>{i.description}</p></div>)}
      </div>
    </Layout>
  );
}
