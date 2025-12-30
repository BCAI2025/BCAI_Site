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
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
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
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Lead Bioinformatics Engineer */}
            
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="gradient-text">Get in Touch</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8">
                Ready to transform drug discovery? Whether you're interested in partnerships, 
                collaborations, or joining our team, we'd love to hear from you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-blue/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-electric-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">info@bioclarity.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">LocationBoston, MA</div>
                
                
              </div>
              
              <div className="mt-8 p-6 bg-charcoal-light/50 rounded-lg border border-electric-blue/20">
                <h3 className="font-semibold text-white mb-3">Our Culture</h3>
                <p className="text-gray-300 text-sm">
                  We believe in the power of interdisciplinary collaboration. Our team combines 
                  deep expertise in AI, biology, chemistry, and medicine to tackle the most 
                  challenging problems in drug discovery. We move fast, think big, and always 
                  keep patient impact at the center of everything we do.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="card-gradient border-electric-blue/30">
              <CardHeader>
                <CardTitle className="text-white">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="bg-charcoal border-electric-blue/30 text-white focus:border-electric-blue" required />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="bg-charcoal border-electric-blue/30 text-white focus:border-electric-blue" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Company/Organization</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="bg-charcoal border-electric-blue/30 text-white focus:border-electric-blue" />
                  </div>
                  
                  <div>
                    <Label htmlFor="type" className="text-white">Inquiry Type</Label>
                    <select id="type" name="type" value={formData.type} onChange={handleInputChange} className="w-full px-3 py-2 bg-charcoal border border-electric-blue/30 text-white rounded-md focus:border-electric-blue focus:outline-none">
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="career">Career Inquiry</option>
                      <option value="collaboration">Research Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} rows={5} className="bg-charcoal border-electric-blue/30 text-white focus:border-electric-blue" placeholder="Tell us about your project, goals, or how we can help..." required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-electric-blue hover:bg-electric-blue-glow text-white py-3 text-lg glow-electric transition-smooth">
                    Send Message
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-16 bg-charcoal-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated on Our <span className="gradient-text">Latest Breakthroughs</span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Subscribe to our newsletter for the latest updates on AI-driven drug discovery, 
            research publications, and partnership opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="bg-charcoal border-electric-blue/30 text-white focus:border-electric-blue" />
            <Button className="bg-neon-teal hover:bg-neon-teal-glow text-charcoal px-6 transition-smooth">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default ConnectCareers;