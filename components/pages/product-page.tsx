"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Plus, Search, AlertCircle, CheckCircle2 } from "lucide-react"
import { StatusBadge } from "@/components/status-badge"
import { FAIRPHONE_PRODUCTS_ENHANCED } from "@/lib/fairphone-data"
import { GuidanceCard } from "@/components/guidance-card"
import { PageGuide } from "@/components/page-guide"
import { PageHelpButton } from "@/components/page-help-button"
import { PAGE_GUIDES } from "@/lib/page-guides"

export function ProductPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<string | null>(FAIRPHONE_PRODUCTS_ENHANCED[0].id)

  const filteredProducts = FAIRPHONE_PRODUCTS_ENHANCED.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const currentProduct = FAIRPHONE_PRODUCTS_ENHANCED.find((p) => p.id === selectedProduct)

  return (
    <main className="flex-1 overflow-auto">
      <PageHelpButton
        pageId="products"
        sections={PAGE_GUIDES.products.steps.map((s) => ({
          heading: s.title,
          content: s.description,
        }))}
      />
      <div className="bg-slate-900 border-b border-slate-800 px-8 py-6">
        <div className="flex items-start justify-between gap-6 mb-4">
          <div className="flex items-start gap-4 flex-1">
            <img src="/images/image.png" alt="RSM Logo" className="h-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">Products & Classification</h1>
              <p className="text-slate-400 text-sm">
                HS codes, ECCN classifications, dual-use analysis, and market-specific regulatory requirements for all
                Fairphone products.
              </p>
            </div>
          </div>
          <Button className="gap-2 bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          <StatusBadge status="green" label={`${FAIRPHONE_PRODUCTS_ENHANCED.length} products catalogued`} />
          <StatusBadge status="green" label="7 markets supported" />
        </div>
      </div>

      <div className="p-8 space-y-6">
        <PageGuide
          title={PAGE_GUIDES.products.title}
          description={PAGE_GUIDES.products.description}
          steps={PAGE_GUIDES.products.steps}
        />

        <GuidanceCard
          id="product-classification"
          title="Product Classification Explained"
          description="Every Fairphone product needs two key classifications for trade compliance."
          tips={[
            "HS Code determines customs tariffs and VAT rates globally",
            "ECCN determines US export restrictions and licensing requirements",
            "Components are assessed individually for re-export restrictions",
            "Classifications change if product specs change - always verify before new releases",
          ]}
          type="info"
        />

        {/* Search */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Product List */}
          <div className="col-span-1 space-y-2">
            {filteredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setSelectedProduct(product.id)}
                className={`w-full p-3 rounded-lg text-left transition-colors ${
                  selectedProduct === product.id
                    ? "bg-green-900/30 border border-green-700"
                    : "bg-slate-800 border border-slate-700 hover:bg-slate-700"
                }`}
              >
                <p className="font-semibold text-white text-sm">{product.name}</p>
                <p className="text-xs text-slate-400">{product.sku}</p>
              </button>
            ))}
          </div>

          {/* Product Details */}
          {currentProduct && (
            <div className="col-span-2 space-y-6">
              {/* Basic Info */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">{currentProduct.name}</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-slate-400">SKU</p>
                    <p className="text-white font-semibold">{currentProduct.sku}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Release Date</p>
                    <p className="text-white font-semibold">{currentProduct.release}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-2">Specifications</p>
                  <p className="text-sm text-slate-200 bg-slate-800/50 p-3 rounded">{currentProduct.specs}</p>
                </div>
              </div>

              {/* Classification */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Product Classification</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded">
                    <p className="text-sm text-slate-400">HS Code (Harmonized System)</p>
                    <p className="text-lg font-mono font-bold text-white">{currentProduct.hsCode}</p>
                    <p className="text-xs text-slate-400 mt-1">Customs classification for tariffs</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded">
                    <p className="text-sm text-slate-400">ECCN (Export Control Classification)</p>
                    <p className="text-lg font-mono font-bold text-white">{currentProduct.eccn}</p>
                    <p className="text-xs text-slate-400 mt-1">US export control status</p>
                  </div>
                </div>
              </div>

              {/* Components Risk Analysis */}
              {currentProduct.components && currentProduct.components.length > 0 && (
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Component Risk Analysis</h3>
                  <div className="space-y-3">
                    {currentProduct.components.map((comp, idx) => (
                      <div key={idx} className="bg-slate-800/50 p-3 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-white">{comp.name}</p>
                            <p className="text-xs text-slate-400">
                              Origin: {comp.origin} • ECCN: {comp.eccn}
                            </p>
                          </div>
                          <StatusBadge
                            status={comp.risk === "low" ? "green" : comp.risk === "medium" ? "yellow" : "red"}
                            label={comp.risk}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Market Applicability */}
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Market Applicability</h3>
                <div className="grid grid-cols-2 gap-2">
                  {currentProduct.markets?.map((market, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 bg-green-900/30 text-green-300 text-sm rounded flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4" /> {market}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {currentProduct.certifications && (
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProduct.certifications.map((cert, idx) => (
                      <span key={idx} className="px-3 py-2 bg-blue-900/30 text-blue-300 text-sm rounded">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Supply Chain & Market Impact Analysis</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-white mb-2">Sustainability & Compliance</p>
                    <p className="text-xs text-slate-400">{currentProduct.sustainability}</p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-white mb-2">Geographic Risk</p>
                    <p className="text-xs text-slate-400">
                      {currentProduct.markets?.length} markets • Multi-source component strategy to mitigate China
                      concentration
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-4">Regulatory Applicability by Market</h3>
                <div className="space-y-2 text-xs">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="font-semibold text-slate-300">Market</div>
                    <div className="font-semibold text-slate-300">EU DU 2021/821</div>
                    <div className="font-semibold text-slate-300">US EAR</div>
                    <div className="font-semibold text-slate-300">OFAC</div>
                    <div className="font-semibold text-slate-300">Customs</div>
                  </div>
                  {["EU", "UK", "US", "CH"].map((market) => (
                    <div key={market} className="grid grid-cols-5 gap-2 p-2 bg-slate-800/50 rounded">
                      <div className="text-slate-300">{market}</div>
                      <div className="text-slate-400">{["EU", "CH"].includes(market) ? "✓ Yes" : "✗ No"}</div>
                      <div className="text-slate-400">
                        {currentProduct.eccn === "EAR99" ? "✓ Commodity" : "✓ Controlled"}
                      </div>
                      <div className="text-slate-400">✓ Screened</div>
                      <div className="text-slate-400">✓ {currentProduct.hsCode}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Classification Guide */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold text-white mb-4">Classification Guide</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                HS Codes - Fairphone Portfolio
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>
                  • Smartphones: <span className="font-mono">8517.62.10</span>
                </li>
                <li>
                  • Batteries: <span className="font-mono">8507.80.00</span>
                </li>
                <li>
                  • Audio devices: <span className="font-mono">8518.30.00</span>
                </li>
                <li>
                  • Accessories: <span className="font-mono">4202.21.00</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                ECCN Status & EAR Rules
              </p>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>
                  • Consumer electronics: <span className="font-mono">EAR99</span>
                </li>
                <li>
                  • Processors (US-origin): <span className="font-mono">3A001</span> – controlled
                </li>
                <li>• Batteries & hazmat: Declaration required</li>
                <li>• Re-export restrictions apply to US components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
