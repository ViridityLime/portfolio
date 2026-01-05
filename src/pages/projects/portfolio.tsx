import React from 'react';
import Link from 'next/link';

const PortfolioSystemProject = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header/Navigation */}
      <nav className="bg-neutral-800 p-4">
        <Link href="/" className="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Benchmark-Tracking Portfolio System</h1>
        
        <div className="mb-8">
          <img 
            src="/images/portfolio/portfolio-1.jpg" 
            alt="Portfolio System" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Overview</h2>
          <p className="text-gray-300 leading-relaxed">
            This system generates the closest possible return to the market benchmark using advanced algorithms...
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Python for data analysis</li>
            <li>NumPy and Pandas for calculations</li>
            <li>Matplotlib for visualizations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-3 text-blue-400">Key Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Real-time portfolio tracking</li>
            <li>Benchmark comparison analysis</li>
            <li>Automated rebalancing suggestions</li>
          </ul>
        </section>

        <div className="flex gap-4 mt-8">
          <a 
            href="https://github.com/yourusername/project" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition"
          >
            View on GitHub
          </a>
          <Link 
            href="/"
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSystemProject;