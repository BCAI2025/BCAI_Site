import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dna, Atom, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Standardizing AI Adoption</span>
              <br />
              <span className="text-white">Across Drug Development</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              We bridge the gap between cutting-edge AI research and practical therapeutic development, 
              providing specialized solutions for the most challenging modalities in precision medicine.
            </p>
          </div>
        </div>
      </section>
      
      {/* How We Engage */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            How We <span className="gradient-text">Engage</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth">
              <CardHeader>
                <CardTitle className="text-electric-blue text-xl">AI Incubator</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Rapid pilot programs for high-risk targets using proprietary synthetic data.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 2-4 week proof-of-concept studies</li>
                  <li>• Custom synthetic datasets</li>
                  <li>• Risk-free exploration of novel targets</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth">
              <CardHeader>
                <CardTitle className="text-neon-teal text-xl">Specialized Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Custom-built models for complex modalities (AAV, Bispecifics, and Radioconjugates).
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Modality-specific AI architectures</li>
                  <li>• End-to-end optimization pipelines</li>
                  <li>• Manufacturing-aware design</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth">
              <CardHeader>
                <CardTitle className="text-electric-blue text-xl">Adoption Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  End-to-end integration of AI into existing R&D loops to harmonize wet-lab and dry-lab data.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Seamless workflow integration</li>
                  <li>• Team training and support</li>
                  <li>• Data harmonization protocols</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Capability Bento Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            The <span className="gradient-text">Modular Hub</span>
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Four core AI platforms designed to tackle the most challenging aspects of modern drug discovery
          </p>
          
          <div className="bento-grid">
            {/* AAV Capsid Engineering */}
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center glow-electric">
                    <Dna className="h-6 w-6 text-electric-blue" />
                  </div>
                  <CardTitle className="text-white text-xl">AAV Capsid Engineering</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  High-throughput design of CNS-specific "GPS" for gene therapy.
                </p>
                <div className="mb-4">
                  <img 
                    src="./images/aav_capsid_structure_20251222_233146.png" 
                    alt="AAV Capsid Structure" 
                    className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-smooth"
                  />
                </div>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• 1.28B variants screened in silico</li>
                  <li>• 40% reduction in immunogenicity risk</li>
                  <li>• CNS-specific targeting achieved</li>
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-smooth"
                  asChild
                >
                  <Link to="/science-impact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Small Molecule CNS Discovery */}
            <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-neon-teal/20 rounded-lg flex items-center justify-center glow-teal">
                    <Atom className="h-6 w-6 text-neon-teal" />
                  </div>
                  <CardTitle className="text-white text-xl">Small Molecule CNS Discovery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Rapid screening of vast chemical spaces for BBB-penetrant compounds.
                </p>
                <div className="mb-4">
                  <img 
                    src="./images/drug_discovery_scatter_20251222_233146.png" 
                    alt="Drug Discovery Visualization" 
                    className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-smooth"
                  />
                </div>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• Months to days timeline reduction</li>
                  <li>• Sub-10 nM potency achieved</li>
                  <li>• 120M compounds screened</li>
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-charcoal transition-smooth"
                  asChild
                >
                  <Link to="/science-impact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Bispecific Antibody Design */}
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center glow-electric">
                    <Zap className="h-6 w-6 text-electric-blue" />
                  </div>
                  <CardTitle className="text-white text-xl">Bispecific Antibody Design</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Multi-parameter optimization for affinity, stability, and manufacturability.
                </p>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1655993810480-c15dccf9b3a0?w=400&auto=format&fit=crop&q=80" 
                    alt="Protein Network" 
                    className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-smooth"
                  />
                </div>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• 95% binding efficiency achieved</li>
                  <li>• 3x reduction in development time</li>
                  <li>• Graph Neural Network optimization</li>
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-smooth"
                  asChild
                >
                  <Link to="/science-impact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            {/* Knowledge Systems (Dis2Vec) */}
            <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth group">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-neon-teal/20 rounded-lg flex items-center justify-center glow-teal">
                    <Brain className="h-6 w-6 text-neon-teal" />
                  </div>
                  <CardTitle className="text-white text-xl">Knowledge Systems (Dis2Vec)</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Our disease-representation foundation model for target identification and repurposing.
                </p>
                <div className="mb-4">
                  <img 
                    src="./images/ai_biodata_network_20251222_233147.png" 
                    alt="AI Network" 
                    className="w-full h-32 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-smooth"
                  />
                </div>
                <ul className="text-sm text-gray-400 space-y-1 mb-4">
                  <li>• R² = 0.95 transcriptomic accuracy</li>
                  <li>• Virtual cell perturbation</li>
                  <li>• Go/No-Go decision support</li>
                </ul>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-charcoal transition-smooth"
                  asChild
                >
                  <Link to="/science-impact">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Integrate <span className="gradient-text">AI into Your Pipeline?</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Whether you're a Big Pharma company or innovative biotech, our modular platforms 
            can be tailored to your specific therapeutic development needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue-glow text-white px-8 py-4 text-lg glow-electric transition-smooth"
              asChild
            >
              <Link to="/connect-careers">
                Start a Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-neon-teal text-neon-teal hover:bg-neon-teal hover:text-charcoal px-8 py-4 text-lg transition-smooth"
              asChild
            >
              <Link to="/science-impact">
                View Our Results
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;