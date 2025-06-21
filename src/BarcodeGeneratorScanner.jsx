import { useState, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function BarcodeGenerator() {
  const [barcodeValue, setBarcodeValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const svgRef = useRef(null);

  const generateBarcode = () => {
    const svg = svgRef.current;
    if (svg && barcodeValue) {
      setIsGenerating(true);
      JsBarcode(svg, barcodeValue, {
        format: "CODE128",
        width: 3,
        height: 100,
        displayValue: true,
        fontSize: 18,
        margin: 10,
      });
      setTimeout(() => {
        setIsGenerating(false);
      }, 300);
    }
  };

  const downloadBarcode = () => {
    const svg = svgRef.current;
    if (!svg) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const svgBlob = new Blob([svgString], {
      type: "image/svg+xml;charset=utf-8",
    });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "barcode.png";
      downloadLink.click();
    };

    img.src = url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navbar */}
      <nav className="relative z-10 px-4 sm:px-6 py-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stripo
            </h1>
          </div>

          <a
            href="https://github.com/Abdus-8747/Stripo"
            className="text-gray-300 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-4 sm:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Barcode Generator</h2>
              <p className="text-gray-300">Enter your data below to generate a professional barcode</p>
            </div>

            <div className="space-y-6">
              {/* Input */}
              <div>
                <label className="block mb-2 font-medium text-white text-lg">
                  Enter Value to Generate Barcode:
                </label>
                <input
                  type="text"
                  value={barcodeValue}
                  onChange={(e) => setBarcodeValue(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. 705632441947"
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={generateBarcode}
                    disabled={!barcodeValue || isGenerating}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Generate</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={downloadBarcode}
                    disabled={!barcodeValue}
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                      />
                    </svg>
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Barcode Preview */}
              <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl overflow-x-auto">
                <div className="text-center">
                  {barcodeValue ? (
                    <div className="space-y-4">
                      <div className="inline-block min-w-full">
                        <svg
                          ref={svgRef}
                          className="mx-auto"
                          style={{ height: "auto", maxWidth: "100%" }}
                        ></svg>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Click "Generate" to create your barcode, then "Download" to save it.
                      </p>
                    </div>
                  ) : (
                    <div className="py-12">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-400 italic">Your barcode will appear here</p>
                      <p className="text-gray-500 text-sm mt-2">Enter a value above to get started</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Tips for best results:
                </h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Use alphanumeric characters for optimal compatibility</li>
                  <li>• Avoid special characters that might not scan well</li>
                  <li>• Test your barcode with a scanner before mass production</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
