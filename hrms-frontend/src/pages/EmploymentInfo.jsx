import React from 'react';
import EmployeeLayout from '../layouts/EmployeeLayout';

export default function EmploymentInfo() {
  return (
    <EmployeeLayout activeTab="job">
      <div className="bg-slate-50 dark:bg-background-dark p-4 lg:p-10">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <a className="hover:text-primary transition-colors" href="#">People Profile</a>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <a className="hover:text-primary transition-colors" href="#">Employee Details</a>
            <span className="material-symbols-outlined text-sm">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">Employment Information</span>
          </nav>

          {/* Page Header */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Employment Information</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Details
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-white dark:bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all">
                <span className="material-symbols-outlined text-lg">help</span>
                Help
              </button>
            </div>
          </div>

          {/* Info Grid Card */}
          <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Row 1 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Employee Id</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">EMP-88291</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Position Title</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Senior Software Engineer</p>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Department</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Engineering</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Division</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Product Development</p>
              </div>

              {/* Row 3 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Section</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Platform Services</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Org Unit / Title</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Tech Division / Engineering Operations</p>
              </div>

              {/* Row 4 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">HRMS Status</p>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-100">Active</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Personnel Area</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Headquarters (San Francisco)</p>
              </div>

              {/* Row 5 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Employee Subgroup</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Permanent Full-time</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Grade</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">G12 - Senior Individual Contributor</p>
              </div>

              {/* Row 6 */}
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6 md:border-r">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Step</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">Step 4</p>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-100 dark:border-slate-800 p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Chief of Unit</p>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="Jane Smith" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcwrgdRlVXxqLWn729iSuyhP9bw1YzpqS6eX0AX9-JorhAi4f-78HAW1lK6Fkd5x8Kpd7liBHMa_jVMjf-9GjCGD0kkBxAEsS-mRwF5OCvNOEOC_RonfPJeyN_RCkhxc6wbaUwwtRCPo5WyY92CPE2uACkPvqxEa6w-9tV6OsWTavJJ__Xd6TwkO_szi8dmVRJnRa6MmrC5o7_T0MQACrHREfsTBSIVuZ0c5cPz8HDJo6GHGVmVVzkvkDYA5avqg-vFtIhftCYmGc" />
                  </div>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-100">Jane Smith</p>
                </div>
              </div>

              {/* Row 7 */}
              <div className="flex flex-col gap-1 p-6 md:border-r border-slate-100 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">People Leader</p>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                    <img alt="John Doe" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8sPDzcAs5FM0m_Gw4oC-6L9sI1Zzqfp-Jh_nrd3tEFuIh_LmDllZnMue77ANkYKO40jxeWY1dIbqZika0C2Mtxs_rexA3uo2UQpfzADvQnbws7Ns-NBjMMjim2bpxWyi5QR3HBWXDk6bRldYN9mDF3G_dh8amVZXxjiY_m3HLWlpBtCvG8ipeYkjpH3JzMfhim28nRzPRyIXeR15lP9oU_bJgmcp7Sy6qKps8RLzICtRzFuOO9J1LOBbtiZldgNvEo1dF2Jac-3M" />
                  </div>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-100">John Doe</p>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-6 border-slate-100 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cost Center</p>
                <p className="text-base font-medium text-slate-900 dark:text-slate-100">CC-9901 - Engineering R&amp;D</p>
              </div>
            </div>
          </div>

          {/* Quick Actions / Alert */}
          <div className="mt-8 flex items-center justify-between rounded-xl bg-primary/10 dark:bg-primary/20 p-6 border border-primary/10">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-3xl text-primary">info</span>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Need to update this information?</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Updates to organizational data may require approval from your manager or HR partner.</p>
              </div>
            </div>
            <button className="rounded-lg bg-white dark:bg-slate-800 px-5 py-2.5 text-sm font-bold text-primary dark:text-primary-light shadow-sm hover:bg-slate-50 transition-colors">
              Submit Change Request
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <p>© 2024 HRMS Solutions. All rights reserved.</p>
              <div className="flex gap-6">
                <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
                <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
                <a className="hover:text-primary transition-colors" href="#">Support Center</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </EmployeeLayout>
  );
}
