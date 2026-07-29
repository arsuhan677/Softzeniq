import { supabase } from "@/lib/supabase";
import { addStat, deleteStat, updateStat } from "@/app/actions/stats";
import { Plus, Trash2, Edit2, Save } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function StatsPage() {
  const { data: stats, error } = await supabase
    .from("stats")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    // If table doesn't exist, this will show a nice message
    return (
      <div className="p-8 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-xl border border-red-200 dark:border-red-900/50">
        <h2 className="text-xl font-bold mb-2">Error Loading Stats</h2>
        <p>It seems the Supabase table hasn't been created yet or there is a connection issue.</p>
        <p className="text-sm mt-2 opacity-80">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Manage Stats</h1>
        <p className="text-muted-foreground mt-1 text-slate-500 dark:text-slate-400">
          Update the statistics shown in the hero section of the landing page.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Add New Form */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm h-fit">
          <h3 className="text-lg font-semibold mb-4">Add New Stat</h3>
          <form action={addStat} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Label</label>
              <input
                type="text"
                name="label"
                required
                placeholder="e.g. Projects shipped"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Value</label>
              <input
                type="text"
                name="value"
                required
                placeholder="e.g. 120+"
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Display Order</label>
              <input
                type="number"
                name="display_order"
                defaultValue={stats ? stats.length + 1 : 1}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Stat
            </button>
          </form>
        </div>

        {/* List Current Stats */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Current Stats</h3>
          {stats && stats.length === 0 && (
            <p className="text-sm text-slate-500 italic">No stats available. Add one to get started.</p>
          )}
          
          {stats?.map((stat) => (
            <div key={stat.id} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 shadow-sm flex items-center justify-between group">
              <div>
                <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                <div className="text-xs text-slate-400 mt-1">Order: {stat.display_order}</div>
              </div>
              
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <form action={deleteStat.bind(null, stat.id)}>
                  <button
                    type="submit"
                    className="p-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
