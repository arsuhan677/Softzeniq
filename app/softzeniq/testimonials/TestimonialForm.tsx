"use client";

import { addTestimonial, updateTestimonial } from "@/app/actions/testimonials";
import { useRef, useState } from "react";

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  created_at: string;
};

interface TestimonialFormProps {
  initialData?: Testimonial;
  onClose?: () => void;
}

export default function TestimonialForm({ initialData, onClose }: TestimonialFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      const res = initialData 
        ? await updateTestimonial(initialData.id, formData)
        : await addTestimonial(formData);
        
      if (!res.success) {
        alert("Error saving testimonial: " + res.error);
      } else {
        alert(initialData ? "Testimonial updated successfully!" : "Testimonial added successfully!");
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
        <label className="block text-sm font-medium mb-1">Name</label>
        <input name="name" required defaultValue={initialData?.name} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. Maya Chen" />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Role / Title</label>
        <input name="role" required defaultValue={initialData?.role} className="w-full bg-background border rounded-lg px-3 py-2" placeholder="e.g. CEO, Lumen AI" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Quote</label>
        <textarea name="quote" required defaultValue={initialData?.quote} className="w-full bg-background border rounded-lg px-3 py-2 min-h-[100px]" placeholder="e.g. SoftZeniq shipped our MVP in 6 weeks..." />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Rating (Out of 5)</label>
        <input type="number" name="rating" min="1" max="5" required defaultValue={initialData?.rating || 5} className="w-full bg-background border rounded-lg px-3 py-2" />
      </div>

      <div className="pt-4 flex gap-3">
        {onClose && (
          <button type="button" onClick={onClose} className="cursor-pointer flex-1 bg-muted text-muted-foreground py-2 rounded-lg font-medium hover:bg-muted/80">
            Cancel
          </button>
        )}
        <button type="submit" disabled={loading} className="cursor-pointer flex-1 bg-primary text-primary-foreground py-2 rounded-lg font-medium hover:opacity-90 disabled:opacity-50">
          {loading ? "Saving..." : (initialData ? "Update Testimonial" : "Add Testimonial")}
        </button>
      </div>
    </form>
  );
}
