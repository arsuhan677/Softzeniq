"use client";

import { useState } from "react";
import PricingForm, { PricingPlan } from "./PricingForm";
import { AnimatePresence, motion } from "framer-motion";
import { deletePricingPlan } from "@/app/actions/pricing";
import { Check } from "lucide-react";

export default function PricingView({ plans }: { plans: PricingPlan[] | null }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<PricingPlan | null>(null);

  const handleEdit = (item: PricingPlan) => {
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
          <h1 className="text-3xl font-bold font-display text-foreground">Pricing Plans Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your pricing tiers and features.</p>
        </div>
        <button
          onClick={handleAddNew}
          className="cursor-pointer bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-medium hover:shadow-glow transition-all active:scale-95"
        >
          + Add Pricing Plan
        </button>
      </div>

      <div className="glass rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 border-b">
              <tr>
                <th className="p-5 font-semibold text-muted-foreground">Plan Details</th>
                <th className="p-5 font-semibold text-muted-foreground">Price</th>
                <th className="p-5 font-semibold text-muted-foreground">Status</th>
                <th className="p-5 font-semibold text-right text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {plans?.map((p) => (
                <tr key={p.id} className="hover:bg-muted/30 transition-colors group">
                  <td className="p-5">
                    <div className="font-semibold text-base mb-1">{p.name}</div>
                    <div className="text-xs text-muted-foreground">{p.desc}</div>
                    <div className="mt-2 flex gap-1 flex-wrap">
                      {p.features?.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[10px] bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                          <Check className="w-3 h-3" /> {f}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-5 whitespace-nowrap">
                    <span className="font-bold text-lg">{p.price}</span>
                    <span className="text-muted-foreground ml-1">{p.period}</span>
                  </td>
                  <td className="p-5">
                    {p.highlight ? (
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Highlighted
                      </span>
                    ) : (
                      <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                        Standard
                      </span>
                    )}
                  </td>
                  <td className="p-5">
                    <div className="flex items-center justify-end gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => handleEdit(p)}
                        className="cursor-pointer text-sm font-medium text-blue-500 hover:text-blue-600 hover:underline px-2 py-1"
                      >
                        Edit
                      </button>
                      <form action={async () => {
                        await deletePricingPlan(p.id);
                      }}>
                        <button type="submit" className="cursor-pointer text-sm font-medium text-destructive hover:text-red-600 hover:underline px-2 py-1">
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {(!plans || plans.length === 0) && (
                <tr>
                  <td colSpan={4} className="p-12 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M7 15h0M2 9.5h20"></path></svg>
                    </div>
                    <h3 className="text-lg font-medium text-foreground">No pricing plans found</h3>
                    <p className="text-muted-foreground mt-1">Get started by adding your first pricing tier.</p>
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
                  {editingItem ? "Edit Plan" : "Add Plan"}
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              <div className="p-6">
                <PricingForm initialData={editingItem || undefined} onClose={handleCloseModal} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
