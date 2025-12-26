import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Analysis",
      description: "Leverages the power of Llama 3 to understand your code logic, syntax, and potential bugs instantly."
    },
    {
      icon: "⚡",
      title: "Real-Time Feedback",
      description: "Get instant results. No waiting for manual reviews. Fix errors before they break production."
    },
    {
      icon: "🛡️",
      title: "Secure & Private",
      description: "Your code is analyzed securely. We prioritize privacy and ensure your intellectual property is safe."
    },
    {
      icon: "📜",
      title: "History Tracking",
      description: "Never lose a review. Access your past code analyses and improvements from the history sidebar."
    }
  ];

  return (
    // 1. Give this section an ID so the link can find it
    <section id="features" className="py-20 bg-[#0f0f0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why use <span className="text-blue-500">SyntaxShark?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Code reviews shouldn't be a bottleneck. Upgrade your workflow with intelligent automation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 bg-[#1a1a1a] rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;