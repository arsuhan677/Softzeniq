const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vbssqprmfsovgqlgpisy.supabase.co';
const supabaseKey = 'sb_publishable_fiQaNy8Fr_eGANicau-Zzw_BT6gRhV9';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkProjects() {
  const { data, error } = await supabase.from('projects').select('id, title, image_url').order('created_at', { ascending: false }).limit(5);
  if (error) {
    console.error("SUPABASE ERROR:", error.message);
  } else {
    console.log("PROJECTS:", data);
  }
}
checkProjects();
