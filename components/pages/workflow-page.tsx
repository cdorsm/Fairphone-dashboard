"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, CheckCircle2, AlertCircle } from "lucide-react"
import { useRole } from "@/components/context/role-context"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"

export function WorkflowPage() {
  const { userRole } = useRole()
  const [activeTab, setActiveTab] = useState("supplier-input")
  const [submissions, setSubmissions] = useState([
    {
      id: "sub-1",
      type: "supplier",
      entity: "New Supplier: Lithium Co Ltd (CN)",
      status: "processing",
      submittedBy: "John (Procurement)",
      date: "2025-01-13",
      results: null,
    },
    {
      id: "sub-2",
      type: "shipment",
      entity: "Fairphone 5 shipment to UK Distributor",
      status: "completed",
      submittedBy: "Maria (Logistics)",
      date: "2025-01-12",
      results: { cleared: true, licenseRequired: false, duration: "45 mins" },
    },
    {
      id: "sub-3",
      type: "product",
      entity: "Battery Module Classification Review",
      status: "review",
      submittedBy: "Sarah (Compliance)",
      date: "2025-01-10",
      results: null,
    },
  ])

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="workflow"
        sections={PAGE_GUIDES.workflow.steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start gap-4 flex-1 mb-4">
          <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Data Input & Processing</h1>
            <p className="text-slate-400 text-sm">
              Submit supplier, product, and shipment data for automated compliance processing and analysis.
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES.workflow.title}
          description={PAGE_GUIDES.workflow.description}
          steps={PAGE_GUIDES.workflow.steps}
        />

        <GuidanceCard
          id="workflow-process"
          title="How the Data Processing Works"
          description="Submit data once, get comprehensive compliance results instantly through automated screening."
          tips={[
            "All submitted data is processed through 4+ compliance engines simultaneously",
            "Sanctions screening checks 15+ international lists in real-time",
            "Results include risk scores, recommendations, and next steps",
            "You'll receive alerts if any issues are found requiring human review",
          ]}
          type="success"
        />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="supplier-input">Supplier Screening</TabsTrigger>
            <TabsTrigger value="product-input">Product Classification</TabsTrigger>
            <TabsTrigger value="shipment-input">Shipment Checks</TabsTrigger>
            <TabsTrigger value="history">Processing History</TabsTrigger>
          </TabsList>

          {/* Supplier Input */}
          <TabsContent value="supplier-input" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {/* Input Form */}
              <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-bold text-white">New Supplier Screening</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Supplier Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Lithium Co Ltd"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Country</label>
                      <input
                        type="text"
                        placeholder="China, Vietnam, etc"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Supply Category</label>
                      <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Components</option>
                        <option>Raw Materials</option>
                        <option>Logistics</option>
                        <option>Distribution</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Legal Entity Details</label>
                    <textarea
                      placeholder="Company registration, UBO, ownership structure..."
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Supporting Documents</label>
                    <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-sm text-slate-400">Drop files here or click to upload</p>
                      <p className="text-xs text-slate-500 mt-1">Max 10MB per file</p>
                    </div>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Submit for Screening</Button>
                </div>
              </div>

              {/* Quick Reference */}
              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700 p-4">
                  <h3 className="text-sm font-semibold text-white mb-3">Screening Checks</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li>✓ UN Sanctions List</li>
                    <li>✓ EU Sanctions List</li>
                    <li>✓ US OFAC List</li>
                    <li>✓ UK Sanctions List</li>
                    <li>✓ WWFT (Wire Transfer)</li>
                    <li>✓ Country Risk Assessment</li>
                    <li>✓ Beneficial Ownership</li>
                  </ul>
                </Card>

                <Card className="bg-green-900/20 border-green-800/50 p-4">
                  <h3 className="text-sm font-semibold text-green-300 mb-2">Avg Processing</h3>
                  <p className="text-2xl font-bold text-white">2-4 hours</p>
                  <p className="text-xs text-slate-300 mt-1">Subject to manual review if hits detected</p>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Product Classification Input */}
          <TabsContent value="product-input" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-bold text-white">Product Classification</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Product Name</label>
                    <input
                      type="text"
                      placeholder="e.g., Fairphone 5 Battery Module"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">HS Code</label>
                      <input
                        type="text"
                        placeholder="8507.80.00"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">ECCN (if US origin)</label>
                      <input
                        type="text"
                        placeholder="EAR99 or 3A001.a"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Component Composition</label>
                    <textarea
                      placeholder="List components, suppliers, origins..."
                      rows={4}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Technical Specifications</label>
                    <input
                      type="file"
                      className="w-full text-sm text-slate-400 file:bg-slate-800 file:border file:border-slate-700 file:rounded file:px-3 file:py-2 file:mr-3"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Submit for Classification</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700 p-4">
                  <h3 className="text-sm font-semibold text-white mb-3">Classification Fields</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li>• HS Code (customs)</li>
                    <li>• ECCN (US export control)</li>
                    <li>• EU Dual-Use status</li>
                    <li>• REACH compliance</li>
                    <li>• Hazmat classification</li>
                  </ul>
                </Card>

                <Card className="bg-blue-900/20 border-blue-800/50 p-4">
                  <h3 className="text-sm font-semibold text-blue-300 mb-2">Fairphone Products</h3>
                  <div className="space-y-1 text-xs text-slate-300">
                    <p>• FP5 – classified</p>
                    <p>• FP4 – classified</p>
                    <p>• Batteries – pending</p>
                    <p>• Modules – 50% done</p>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Shipment Input */}
          <TabsContent value="shipment-input" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4">
                <h2 className="text-lg font-bold text-white">Shipment Compliance Check</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Product</label>
                      <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Fairphone 5</option>
                        <option>Fairphone 4</option>
                        <option>Spare Parts</option>
                        <option>Accessories</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Quantity</label>
                      <input
                        type="number"
                        placeholder="Units"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Origin</label>
                      <input
                        type="text"
                        placeholder="e.g., Shanghai, China"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-200 mb-2">Destination</label>
                      <input
                        type="text"
                        placeholder="e.g., Amsterdam, Netherlands"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Shipping Route</label>
                    <select className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>CN → EU</option>
                      <option>CN → UK</option>
                      <option>CN → NO/CH</option>
                      <option>EU → Repair hub</option>
                      <option>US → US</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-2">Carrier & Bill of Lading</label>
                    <input
                      type="text"
                      placeholder="Carrier name, BOL number"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Submit for Export Check</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="bg-slate-800 border-slate-700 p-4">
                  <h3 className="text-sm font-semibold text-white mb-3">Checks Performed</h3>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li>✓ Product classification</li>
                    <li>✓ Origin/destination risk</li>
                    <li>✓ License requirement</li>
                    <li>✓ Supplier screening</li>
                    <li>✓ Customs documentation</li>
                  </ul>
                </Card>

                <Card className="bg-purple-900/20 border-purple-800/50 p-4">
                  <h3 className="text-sm font-semibold text-purple-300 mb-2">Avg Turnaround</h3>
                  <p className="text-2xl font-bold text-white">1-2 hours</p>
                  <p className="text-xs text-slate-300 mt-1">Expedited if needed</p>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Processing History */}
          <TabsContent value="history" className="space-y-4">
            <div className="space-y-3">
              {submissions.map((sub) => (
                <Card key={sub.id} className="bg-slate-900 border-slate-800 p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant={
                            sub.type === "supplier" ? "default" : sub.type === "product" ? "secondary" : "outline"
                          }
                          className="capitalize"
                        >
                          {sub.type}
                        </Badge>
                        <Badge
                          variant={
                            sub.status === "completed" ? "default" : sub.status === "review" ? "secondary" : "outline"
                          }
                          className="capitalize"
                        >
                          {sub.status === "completed" ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : sub.status === "review" ? (
                            <AlertCircle className="w-3 h-3 mr-1" />
                          ) : null}
                          {sub.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-white">{sub.entity}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Submitted {sub.date} by {sub.submittedBy}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 bg-transparent">
                      View Details
                    </Button>
                  </div>
                  {sub.results && (
                    <div className="bg-slate-800/50 rounded p-3 text-sm">
                      <p className="text-slate-300">
                        <span className="font-medium">Result:</span> Cleared in {sub.results.duration} •{" "}
                        {sub.results.licenseRequired ? "License required" : "No license required"}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
