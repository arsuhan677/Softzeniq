"use client";

import { useState } from "react";
import TestimonialForm, { Testimonial } from "./TestimonialForm";
import { AnimatePresence, motion } from "framer-motion";
import { deleteTestimonial } from "@/app/actions/testimonials";
import { Star } from "lucide-react";

export default function TestimonialView({ testimonials }: { testimonials: Testimonial[] | null }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);

  const handleEdit = (item: Testimonial) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setEditingItem(null), 300);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-display text-foreground">Testimonials Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage client reviews and feedback.</p>
        </div>
        <button
          onClick={handleAddNew}
          className="cursor-pointer bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:shadow-glow transition-all active:scale-95"
        >
          + Add Testimonial
        </button>
      </div>

      <div className="glass rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="p-5 font-semibold text-muted-foreground">Client</th>
                <th className="p-5 font-semibold text-muted-foreground">Quote</th>
                <th className="p-5 font-semibold text-muted-foreground whitespace-nowrap">Rating</th>
                <th className="p-5 font-semibold text-right text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {testimonials?.map((t) => (
                <tr key={t.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="p-5 whitespace-nowrap">
                    <div className="font-semibold text-base mb-1">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </td>
                  <td className="p-5">
                    <p className="line-clamp-2 text-muted-foreground italic">"{t.quote}"</p>
                  </td>
                  <td className="p-5">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-end gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(t)}
                        className="cursor-pointer text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline px-2 py-1"
                      >
                        Edit
                      </button>
                      <form action={async () => {
                        await deleteTestimonial(t.id);
                      }}>
                        <button type="submit" className="cursor-pointer text-sm font-medium text-destructive hover:text-red-600 hover:underline px-2 py-1">
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {(!testimonials || testimonials.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                      <Star className="text-muted-foreground h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">No testimonials found</h3>
                    <p className="text-muted-foreground mt-1">Get started by adding your first client review.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg glass rounded-2xl shadow-2xl border bg-card/50 overflow-hidden"
            >
              <div className="p-6 border-b bg-muted/20 flex justify-between items-center">
                <h2 className="text-xl font-semibold font-display">
                  {editingItem ? "Edit Testimonial" : "Add Testimonial"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="p-6">
                <TestimonialForm initialData={editingItem || undefined} onClose={handleCloseModal} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
