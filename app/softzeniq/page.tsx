import { ArrowUpRight, DollarSign, Users, Activity, CreditCard } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-slate-500 dark:text-slate-400">
          Welcome back! Here's an overview of your agency.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</h3>
            <DollarSign className="h-4 w-4 text-slate-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1 font-medium">
              <ArrowUpRight className="h-3 w-3" />
              +20.1% from last month
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-500 dark:text-slate-400">Active Clients</h3>
            <Users className="h-4 w-4 text-slate-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1 font-medium">
              <ArrowUpRight className="h-3 w-3" />
              +180.1% from last month
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-500 dark:text-slate-400">Projects</h3>
            <CreditCard className="h-4 w-4 text-slate-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1 font-medium">
              <ArrowUpRight className="h-3 w-3" />
              +19% from last month
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="tracking-tight text-sm font-medium text-slate-500 dark:text-slate-400">Active Now</h3>
            <Activity className="h-4 w-4 text-slate-500" />
          </div>
          <div>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-emerald-500 flex items-center gap-1 mt-1 font-medium">
              <ArrowUpRight className="h-3 w-3" />
              +201 since last hour
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm col-span-4 min-h-[300px] flex items-center justify-center text-slate-500">
          Chart Placeholder (e.g. Recharts)
        </div>
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-6 shadow-sm col-span-3">
          <h3 className="font-semibold leading-none tracking-tight mb-4 text-lg">Recent Sales</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-medium">
                    OM
                  </div>
                  <div>
                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">olivia.martin@email.com</p>
                  </div>
                </div>
                <div className="font-medium text-sm">+$1,999.00</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
