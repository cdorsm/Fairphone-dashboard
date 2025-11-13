import { Button } from "@/components/ui/button"
import { Save, Users, Bell, Lock, Eye } from "lucide-react"

export function SettingsPage() {
  return (
    <main className="flex-1 overflow-auto">
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <h1 className="text-2xl font-bold text-white">Settings & Administration</h1>
        <p className="text-slate-400 text-sm mt-2">
          Manage roles, permissions, notifications, and system configuration.
        </p>
      </div>

      <div className="p-8 max-w-4xl space-y-6">
        {/* User Management */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-bold text-white">User Management</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-white">RSM Compliance Lead</p>
                <p className="text-xs text-slate-400">Admin • Active</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div>
                <p className="text-sm font-semibold text-white">Fairphone Trade Specialist</p>
                <p className="text-xs text-slate-400">Editor • Active</p>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
            <Button className="w-full gap-2 bg-green-600 hover:bg-green-700 mt-2">
              <Users className="w-4 h-4" />
              Invite User
            </Button>
          </div>
        </div>

        {/* Role Configuration */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Role & Permission Matrix</h2>
          <div className="border border-slate-700 rounded-lg overflow-hidden text-sm">
            <div className="grid grid-cols-5 bg-slate-800/50 px-4 py-3 font-semibold text-slate-300 uppercase tracking-wide gap-2">
              <div>Role</div>
              <div>View</div>
              <div>Edit</div>
              <div>Approve</div>
              <div>Admin</div>
            </div>
            <div className="divide-y divide-slate-700">
              {[
                { role: "Admin", view: true, edit: true, approve: true, admin: true },
                { role: "Compliance Officer", view: true, edit: true, approve: true, admin: false },
                { role: "Supplier Manager", view: true, edit: true, approve: false, admin: false },
                { role: "Viewer", view: true, edit: false, approve: false, admin: false },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-5 px-4 py-3 gap-2">
                  <div className="text-white font-medium">{row.role}</div>
                  <div>{row.view && "✓"}</div>
                  <div>{row.edit && "✓"}</div>
                  <div>{row.approve && "✓"}</div>
                  <div>{row.admin && "✓"}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-bold text-white">Notification Preferences</h2>
          </div>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-white">Alert on supplier screening hits</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer">
              <input type="checkbox" defaultChecked className="w-4 h-4" />
              <span className="text-sm text-white">Alert on task deadlines</span>
            </label>
            <label className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg cursor-pointer">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm text-white">Weekly compliance summary</span>
            </label>
          </div>
        </div>

        {/* System Settings */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-green-500" />
            <h2 className="text-lg font-bold text-white">System Settings</h2>
          </div>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-white">Screening Refresh Frequency</label>
              <select className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200">
                <option>Monthly (critical suppliers)</option>
                <option>Quarterly (standard suppliers)</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-white">Evidence Retention Period</label>
              <select className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200">
                <option>7 years (default)</option>
                <option>10 years</option>
                <option>Indefinite</option>
              </select>
            </div>
            <div className="flex items-center gap-2 p-3 bg-slate-800 rounded-lg">
              <Eye className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-400">Last backup: 2024-11-13 at 02:00 UTC</span>
            </div>
          </div>
        </div>

        <Button className="w-full gap-2 bg-green-600 hover:bg-green-700">
          <Save className="w-4 h-4" />
          Save Settings
        </Button>
      </div>
    </main>
  )
}
