import { Link } from "react-router-dom";

export const LandingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    {/* Navigation */}
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Stripo
            </h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a
            href="https://github.com/Abdus-8747/Stripo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-colors flex items-center"
          >
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.32-1.75-1.32-1.75-1.08-.74.08-.73.08-.73 1.19.09 1.81 1.23 1.81 1.23 1.06 1.82 2.79 1.3 3.47.99.11-.77.42-1.3.76-1.6-2.67-.3-5.48-1.33-5.48-5.91 0-1.3.47-2.36 1.23-3.19-.12-.3-.54-1.51.12-3.16 0 0 1.01-.32 3.3 1.22a11.4 11.4 0 016 0c2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.24 2.86.12 3.16.77.83 1.23 1.89 1.23 3.19 0 4.6-2.81 5.61-5.48 5.91.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="relative px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Generate Barcodes & QR Codes
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            With Stripo's Modern Tools
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Create professional barcodes and QR codes instantly with our fast and intuitive generators.
            Perfect for businesses, developers, and anyone who needs reliable code creation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link to="/generate-barcode">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-blue-500/25"
            >
              Generate Barcode
            </button>
          </Link>
          <Link to="/generate-qrcode">
            <button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-blue-500/25"
            >
              Generate QR Code
            </button>
          </Link>
          <button
            onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-200 border border-white/20"
          >
            Learn More
          </button>
        </div>

        {/* Interactive Demo */}
        <div className="relative max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">Ready to Get Started?</h4>
                <p className="text-gray-600 mb-6">Enter any text, link, or number to create professional barcodes or QR codes instantly.</p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    High Quality
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Instant Download
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>

    {/* Features Section */}
   <section id="features" className="px-6 py-20 bg-black/20 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h3 className="text-4xl font-bold text-white mb-4">
        Why Choose Stripo?
      </h3>
      <p className="text-gray-300 text-lg">
        Generate professional barcodes and QR codes instantly with advanced features designed for ease and precision.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      <div className="group bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
          Instant Generation
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Create barcodes and QR codes in milliseconds with Stripo’s lightning-fast processing. No loading screens, just results.
        </p>
      </div>

      <div className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
          Industry Standards
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Supports CODE128 barcodes and standard QR codes compatible with scanners, POS systems, and digital applications worldwide.
        </p>
      </div>

      <div className="group bg-gradient-to-br from-pink-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">
          High-Quality Exports
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Download crisp, high-resolution PNG images perfect for printing, web use, or integrating into your projects.
        </p>
      </div>

      <div className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
          Privacy-First Design
        </h4>
        <p className="text-gray-300 leading-relaxed">
          All barcode and QR code generation happens right in your browser. No data is ever sent to external servers or stored.
        </p>
      </div>

      <div className="group bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
          Mobile-Friendly
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Generate codes seamlessly on any device. Stripo’s responsive UI adapts beautifully to desktop, tablet, and mobile screens.
        </p>
      </div>

      <div className="group bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
        <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
          Business-Ready
        </h4>
        <p className="text-gray-300 leading-relaxed">
          Perfect for inventory, shipping, retail, and enterprise applications. Generate unlimited codes for professional use at no cost.
        </p>
      </div>
    </div>
  </div>
</section>


    {/* About Section */}
    <section id="about" className="px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-white mb-8">About Stripo</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Stripo is a modern, web-based generator for barcodes and QR codes, designed for simplicity and efficiency.
          Whether you’re a business owner, developer, or simply need occasional code creation, Stripo offers a fast,
          intuitive experience that ensures high-quality results every time.
        </p>
        <p className="text-gray-400">
          Built with modern web technologies for reliability and performance.
        </p>
      </div>
    </section>

    {/* Footer */}
    <footer className="px-6 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-white font-bold">Stripo</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2025 Stripo. Built with passion for modern code generation.
        </p>
      </div>
    </footer>
  </div>
);
