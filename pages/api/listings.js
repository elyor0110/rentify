import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { data, error } = await supabase.from("listings").select("*").order("created_at", { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }
  if (req.method === "POST") {
    const { title, description, price, category, image } = req.body;
    const { data, error } = await supabase.from("listings").insert([{ title, description, price, category, image }]).select().single();
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }
  res.status(405).json({ error: "Method not allowed" });
}
