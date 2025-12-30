import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Users, Brain, Atom, Code, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
const ConnectCareers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "partnership"
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Connect & Careers</span>
              <br />
              <span className="text-white">Join the Mission</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Small Team, Massive Impact. We don't have departments; we have missions. 
              We value high-agency individuals who can speak the languages of both biology and code.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-3">
              <Users className="h-5 w-5 text-electric-blue" />
              <span className="text-electric-blue font-semibold">Building the Future of Precision Medicine</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Roles */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            <span className="gradient-text">Open Roles</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Research Scientist */}
            <Card className="card-gradient border-electric-blue/30 hover:border-electric-blue/50 transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center glow-electric">
                    <Brain className="h-6 w-6 text-electric-blue" />
                  </div>
                  <CardTitle className="text-white">AI Research Scientist</CardTitle>
                </div>
                <p className="text-electric-blue font-semibold">Generative Biologics</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Lead the development of next-generation AI models for protein design, 
                  small molecule discovery, and biological system modeling.
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Design and implement generative models for biologics</li>
                    <li>• Collaborate with wet-lab teams on model validation</li>
                    <li>• Publish research in top-tier journals</li>
                    <li>• Mentor junior researchers and engineers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• PhD in ML, Computational Biology, or related field</li>
                    <li>• 3+ years experience in generative modeling</li>
                    <li>• Strong background in protein/molecular modeling</li>
                    <li>• Proficiency in PyTorch/TensorFlow</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-electric-blue hover:bg-electric-blue-glow text-white transition-smooth">
                  Opening Soon
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
              </CardContent>
            </Card>
            
            {/* Radiochemistry Platform Lead */}
            <Card className="card-gradient border-neon-teal/30 hover:border-neon-teal/50 transition-smooth">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-neon-teal/20 rounded-lg flex items-center justify-center glow-teal">
                    <Atom className="h-6 w-6 text-neon-teal" />
                  </div>
                  <CardTitle className="text-white">Radiochemistry Platform Lead</CardTitle>
                </div>
                <p className="text-neon-teal font-semibold">Theranostics Innovation</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Drive the development of our proprietary radiopharmaceutical platform, 
                  focusing on linker and chelator innovation for precision oncology.
                </p>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Key Responsibilities:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Lead radiochemistry platform development</li>
                    <li>• Design novel linker and chelator systems</li>
                    <li>• Optimize radiolabeling protocols</li>
                    <li>• Collaborate with AI teams on predictive models</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• PhD in Radiochemistry or Nuclear Medicine</li>
                    <li>• 5+ years in radiopharmaceutical development</li>
                    <li>• Experience with chelator design and synthesis</li>
                    <li>• Knowledge of GMP manufacturing</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-neon-teal hover:bg-neon-teal-glow text-charcoal transition-smooth">
                  Opening Soon
                  {/* <ArrowRight className="ml-2 h-4 w-4" /> */}
                </Button>
              </CardContent>
            </Card>
            
            {/* Lead Bioinformatics Engineer */}
            
          </div>
        </div>
      </section>
            
      

      {/* LinkedIn Follow */}
      <section className="py-16 bg-charcoal-light/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay Updated on Our <span className="gradient-text">Latest Breakthroughs</span>
              </h2>

              <p className="text-lg text-gray-300 mb-8">
                  Follow us on LinkedIn for the latest updates on AI-driven drug discovery,
                  research publications, and partnership opportunities.
              </p>

              <div className="flex justify-center">
                  <a
                      href="https://www.linkedin.com/company/bioclarity-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl font-bold text-neon-teal hover:text-neon-teal-glow transition-all border-b-2 border-neon-teal pb-1"
                  >
                      BioClarity AI on LinkedIn
                  </a>
              </div>
          </div>

          {/* Main Contact Section */}
          <div className="w-20 h-20 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 glow-electric">
               <Mail className="h-10 w-10 text-electric-blue" />
                          
                      <p className="text-3xl text-white"><span className="gradient-text">Contact Us </span></p>
                     <a
                        href="mailto:info@bioclarity.ai?subject=BioClarity AI Inquiry"
                        className="text-2xl font-bold text-neon-teal hover:text-neon-teal-glow transition-all border-b-2 border-neon-teal pb-1"
                     >
                          info@bioclarity.ai
                     </a>
            </div>               

      </section>


    </div>;
};
export default ConnectCareers;