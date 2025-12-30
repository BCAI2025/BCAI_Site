import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Atom, Target, TrendingUp, Zap, Clock, Shield, Activity } from "lucide-react";
import { Link } from "react-router-dom";

const TheFuture = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal opacity-90" />
        <div className="absolute inset-0">
          <img 
            src="./images/radiopharmaceutical_diagram_20251222_233147.png" 
            alt="Radiopharmaceutical Structure" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">The Future</span>
              <br />
              <span className="text-white">Radioconjugate Theranostics</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Pioneering the Next Generation of Precision Oncology. Our proprietary IP direction 
              in precision radiation combines AI-guided design with therapeutic innovation.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-3">
              <Atom className="h-5 w-5 text-electric-blue" />
              <span className="text-electric-blue font-semibold">Proprietary Linker & Chelator IP</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Focus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="gradient-text">Strategic Vision</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are translating our AI expertise into proprietary Linker and Chelator IP, 
              revolutionizing how radiopharmaceuticals are designed, manufactured, and deployed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Philosophy: <span className="gradient-text">Surgical Precision</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Stability in the bloodstream, surgical precision at the tumor. We optimize for the 
                "Short Half-Life" reality of isotopes, ensuring maximum therapeutic impact with minimal off-target effects.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Bloodstream Stability</h4>
                    <p className="text-gray-400">AI-optimized linkers maintain integrity during circulation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-neon-teal mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Tumor Precision</h4>
                    <p className="text-gray-400">Selective release mechanisms activated at target sites</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Isotope Optimization</h4>
                    <p className="text-gray-400">Designed for short half-life isotope characteristics</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src="./images/radiopharmaceutical_diagram_20251222_233147.png" 
                alt="Radiopharmaceutical Design" 
                className="w-full max-w-lg rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Future Metrics */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="gradient-text">Future Impact</span> Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-electric">
                  <TrendingUp className="h-8 w-8 text-electric-blue" />
                </div>
                <CardTitle className="text-white">Radiolabeling Yields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-electric-blue mb-2">35%</div>
                <p className="text-gray-300 mb-4">Increase in predicted radiolabeling yields</p>
                <p className="text-sm text-gray-400">
                  AI-optimized chelator design improves isotope incorporation efficiency
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-neon-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-teal">
                  <Activity className="h-8 w-8 text-neon-teal" />
                </div>
                <CardTitle className="text-white">Protocol Amendments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-neon-teal mb-2">40%</div>
                <p className="text-gray-300 mb-4">Reduction in clinical protocol amendments</p>
                <p className="text-sm text-gray-400">
                  AI-guided trial design predicts and prevents protocol modifications
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-electric">
                  <Target className="h-8 w-8 text-electric-blue" />
                </div>
                <CardTitle className="text-white">Outcome Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-electric-blue mb-2">85%</div>
                <p className="text-gray-300 mb-4">Accuracy in real-time clinical trial outcome forecasting</p>
                <p className="text-sm text-gray-400">
                  Predictive models enable proactive trial management and optimization
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technology Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="gradient-text">Technological</span> Advantages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-gradient border-electric-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Zap className="h-6 w-6 text-electric-blue mr-3" />
                  AI-Driven Linker Design
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Our proprietary algorithms optimize linker stability, selectivity, and release kinetics 
                  for maximum therapeutic window.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Plasma stability prediction models</li>
                  <li>• Tumor microenvironment activation</li>
                  <li>• Payload release optimization</li>
                  <li>• Manufacturing scalability assessment</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-neon-teal/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Atom className="h-6 w-6 text-neon-teal mr-3" />
                  Chelator Innovation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Next-generation chelators designed for optimal isotope binding, stability, 
                  and in vivo performance across multiple radioisotopes.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Multi-isotope compatibility</li>
                  <li>• Enhanced binding kinetics</li>
                  <li>• Reduced immunogenicity</li>
                  <li>• Simplified synthesis routes</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-electric-blue/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Activity className="h-6 w-6 text-electric-blue mr-3" />
                  Manufacturing Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  AI-guided manufacturing processes ensure consistent quality, yield, and scalability 
                  for clinical and commercial production.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Process parameter optimization</li>
                  <li>• Quality control prediction</li>
                  <li>• Yield maximization algorithms</li>
                  <li>• Cost-effective scale-up</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-neon-teal/30">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center">
                  <Target className="h-6 w-6 text-neon-teal mr-3" />
                  Clinical Trial Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Real-time clinical trial monitoring and outcome prediction enable proactive 
                  decision-making and protocol optimization.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Patient response prediction</li>
                  <li>• Dosing optimization models</li>
                  <li>• Safety signal detection</li>
                  <li>• Adaptive trial design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Vision Statement */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            <span className="gradient-text">Transforming</span> Precision Oncology
          </h2>
          
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
            The future of cancer treatment lies in the precise delivery of therapeutic radiation. 
            Our AI-driven approach to radioconjugate design represents a paradigm shift from 
            empirical development to rational, data-driven therapeutic engineering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <Shield className="h-6 w-6 text-electric-blue mr-2" />
                Patient Safety First
              </h3>
              <p className="text-gray-400">
                Every design decision prioritizes patient safety through predictive modeling 
                of toxicity, biodistribution, and therapeutic window optimization.
              </p>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <TrendingUp className="h-6 w-6 text-neon-teal mr-2" />
                Accelerated Development
              </h3>
              <p className="text-gray-400">
                AI-guided development reduces time-to-clinic while increasing the probability 
                of clinical success through rational design principles.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join the <span className="gradient-text">Theranostics Revolution</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Partner with us to develop the next generation of precision radiopharmaceuticals. 
            Together, we can transform cancer treatment through AI-driven innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-electric-blue-glow text-white px-8 py-4 text-lg glow-electric transition-smooth"
              asChild
            >
              <Link to="/connect-careers">
                Explore Partnership
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
        </div>
      </section>
    </div>
  );
};

export default TheFuture;