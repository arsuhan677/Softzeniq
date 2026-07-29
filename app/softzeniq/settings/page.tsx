import { supabase } from "@/lib/supabase";
import SettingsForm from "./SettingsForm";

export default async function SettingsDashboard() {
  const { data: settings } = await supabase
    .from("site_settings")
    .select("*")
    .eq("id", 1)
    .single();

  return (
    <div className="min-h-screen bg-background/50 p-6 md:p-8">
      <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-bold font-display text-foreground">Global Site Settings</h1>
        <p className="text-muted-foreground mt-2">Update your website's header logo, footer logo, and favicon.</p>
      </div>
      
      <SettingsForm initialData={settings || undefined} />
    </div>
  );
}
