"use client";

import { updateSettings } from "@/app/actions/settings";
import { useState } from "react";

export type SiteSettings = {
  header_logo: string | null;
  footer_logo: string | null;
  favicon: string | null;
};

export default function SettingsForm({ initialData }: { initialData?: SiteSettings }) {
  const [loading, setLoading] = useState(false);

  const [logoBase64, setLogoBase64] = useState(initialData?.header_logo || "");
  const [faviconBase64, setFaviconBase64] = useState(initialData?.favicon || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      // Override the formData with our base64 strings
      formData.set("header_logo", logoBase64);
      formData.set("footer_logo", logoBase64); // Same logo for both
      formData.set("favicon", faviconBase64);

      const res = await updateSettings(formData);
      if (!res.success) {
        alert("Error saving settings: " + res.error);
      } else {
        alert("Settings updated successfully! It may take a refresh for changes to fully appear.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="glass rounded-2xl p-6 md:p-8 max-w-3xl">
      <form action={handleSubmit} className="space-y-8">
        
        {/* Universal Logo */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold">Website Logo (Used in Header & Footer)</label>
          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, setLogoBase64)}
                className="w-full bg-background border rounded-lg px-4 py-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer" 
              />
              <p className="text-xs text-muted-foreground mt-2">Upload your main logo from your computer. Leave as is to keep the current one.</p>
            </div>
            {logoBase64 && (
              <div className="h-16 w-32 relative bg-muted rounded border overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                <img src={logoBase64} alt="Logo Preview" className="max-h-full max-w-full object-contain" />
              </div>
            )}
          </div>
        </div>

        {/* Favicon */}
        <div className="space-y-3">
          <label className="block text-sm font-semibold">Favicon (Browser Tab Icon)</label>
          <div className="flex gap-4 items-start">
            <div className="flex-1">
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleFileChange(e, setFaviconBase64)}
                className="w-full bg-background border rounded-lg px-4 py-2.5 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer" 
              />
              <p className="text-xs text-muted-foreground mt-2">Upload a small square image (e.g. 32x32) for the browser tab.</p>
            </div>
            {faviconBase64 && (
              <div className="h-16 w-16 relative bg-muted rounded border overflow-hidden flex-shrink-0 flex items-center justify-center p-2">
                <img src={faviconBase64} alt="Favicon Preview" className="max-h-full max-w-full object-contain" />
              </div>
            )}
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <button type="submit" disabled={loading} className="cursor-pointer w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 disabled:opacity-50 transition-opacity">
            {loading ? "Saving Settings..." : "Save Global Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
