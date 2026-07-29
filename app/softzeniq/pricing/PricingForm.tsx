"use client";

import { addPricingPlan, updatePricingPlan } from "@/app/actions/pricing";
import { useRef, useState } from "react";

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight: boolean;
  created_at: string;
};

interface PricingFormProps {
  initialData?: PricingPlan;
  onClose?: () => void;
}

export default function PricingForm({ initialData, onClose }: PricingFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      const res = initialData 
        ? await updatePricingPlan(initialData.id, formData)
        : await addPricingPlan(formData);
        
      if (!res.success) {
        alert("Error saving pricing plan: " + res.error);
      } else {
        alert(initialData ? "Pricing plan updated successfully!" : "Pricing plan added successfully!");
        if (!initialData) formRef.current?.reset();
        if (onClose) onClose();
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
      <div>
        <label className="block text-sm font-medium mb-1">Plan Name</label>
        <input name="name" required defaultValue={initialData?.name} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. Launch" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Price</label>
        <input name="price" required defaultValue={initialData?.price} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. $4.9k or Custom" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Period (Optional)</label>
        <input name="period" defaultValue={initialData?.period} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. / project or / month" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <input name="desc" required defaultValue={initialData?.desc} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. Marketing site or MVP..." />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Features (Comma separated)</label>
        <textarea name="features" required defaultValue={initialData?.features?.join(", ")} className="w-full bg-background border rounded-lg px-3 py-2 min-h-[80px]" placeholder="e.g. Up to 6 pages, Design + build, SEO setup" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Button Text</label>
        <input name="cta" required defaultValue={initialData?.cta} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. Start small" />
      </div>

      <div className="flex items-center gap-2 pt-2">
        <input type="checkbox" name="highlight" id="highlight" defaultChecked={initialData ? initialData.highlight : false} className="h-4 w-4 rounded border-gray-300" />
        <label htmlFor="highlight" className="text-sm font-medium">Highlight this plan (Makes it purple & adds "Most popular")</label>
      </div>

      <div className="pt-4 flex gap-3">
        {onClose && (
          <button type="button" onClick={onClose} className="cursor-pointer flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium hover:bg-muted/80">
            Cancel
          </button>
        )}
        <button type="submit" disabled={loading} className="cursor-pointer flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50">
          {loading ? "Saving..." : (initialData ? "Update Plan" : "Add Plan")}
        </button>
      </div>
    </form>
  );
}
