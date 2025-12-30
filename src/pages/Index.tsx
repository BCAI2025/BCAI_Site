import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
        <div className="absolute inset-0">
          <img 
            src="./images/hero_molecular_structure_20251222_233146.png" 
            alt="Molecular Structure" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Precision Medicine,</span>
              <br />
              <span className="text-white">Engineered.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Bridging the gap between digital simulation and clinical success.
              BioClarity AI utilizes high-fidelity generative models to solve the most complex 
              delivery and manufacturing challenges in gene therapy and precision oncology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue-glow text-white px-8 py-4 text-lg glow-electric transition-smooth"
                asChild
              >
                <Link to="/what-we-do">
                  Explore Our Capabilities
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
                  View Our Science
                </Link>
              </Button>
            </div>
            
            {/* Hero Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">1.2B+</div>
                  <div className="text-gray-300">Variants Screened In Silico</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-neon-teal mb-2">95%</div>
                  <div className="text-gray-300">Prediction Accuracy for Molecular Binding</div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-electric-blue mb-2">3x</div>
                  <div className="text-gray-300">Acceleration in Discovery Timelines</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission Statement */}
      <section className="py-16 bg-charcoal-light/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              From Trial and Error to <span className="gradient-text">Digital Certainty</span>
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12">
              Traditional drug discovery is a black box. With 93% of radiopharmaceutical candidates 
              failing in preclinical stages and 98% of small molecules unable to cross the blood-brain 
              barrier, the industry needs a new map. <span className="text-electric-blue font-semibold">We provide the coordinates.</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-electric">
                  <Zap className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Discovery</h3>
                <p className="text-gray-400">High-fidelity generative models accelerate therapeutic development</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-neon-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-teal">
                  <Target className="h-8 w-8 text-neon-teal" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Precision Targeting</h3>
                <p className="text-gray-400">Surgical accuracy in drug delivery and tissue specificity</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-electric">
                  <TrendingUp className="h-8 w-8 text-electric-blue" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-400">Validated across gene therapy, small molecules, and biologics</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="gradient-text">Drug Discovery?</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Join the precision medicine revolution. Discover how our AI platforms can accelerate 
            your therapeutic development pipeline.
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
                View Our Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
