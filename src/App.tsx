import React from 'react';
import { Shield, User, Award, Code, Menu, X, Linkedin, Github, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#4A5568' }}>
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8" style={{ color: '#2D3748' }} />
              <span className="text-xl font-semibold" style={{ color: '#2D3748' }}>Logan Tomasek</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="transition-colors" 
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                onMouseLeave={(e) => e.target.style.color = '#4A5568'}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="transition-colors"
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                onMouseLeave={(e) => e.target.style.color = '#4A5568'}
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('certifications')}
                className="transition-colors"
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                onMouseLeave={(e) => e.target.style.color = '#4A5568'}
              >
                Certifications
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="transition-colors"
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                onMouseLeave={(e) => e.target.style.color = '#4A5568'}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('socials')}
                className="transition-colors"
                style={{ color: '#4A5568' }}
                onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                onMouseLeave={(e) => e.target.style.color = '#4A5568'}
              >
                Socials
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="transition-colors text-left"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                  onMouseLeave={(e) => e.target.style.color = '#4A5568'}
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="transition-colors text-left"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                  onMouseLeave={(e) => e.target.style.color = '#4A5568'}
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('certifications')}
                  className="transition-colors text-left"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                  onMouseLeave={(e) => e.target.style.color = '#4A5568'}
                >
                  Certifications
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="transition-colors text-left"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                  onMouseLeave={(e) => e.target.style.color = '#4A5568'}
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('socials')}
                  className="transition-colors text-left"
                  style={{ color: '#4A5568' }}
                  onMouseEnter={(e) => e.target.style.color = '#2D3748'}
                  onMouseLeave={(e) => e.target.style.color = '#4A5568'}
                >
                  Socials
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero/About Section */}
      <section id="about" className="pt-20 pb-16" style={{ backgroundColor: '#2D3748' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src="/src/assets/Log.jpg" 
                  alt="Logan Tomasek"
                  className="w-80 h-80 object-cover object-top rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Logan Tomasek
              </h1>
              <h2 className="text-xl mb-6 text-gray-300">
                Cybersecurity Professional | SOC Analyst Candidate
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg leading-relaxed mb-4 text-gray-100">
                  I'm a passionate cybersecurity professional with a strong focus on blue team operations 
                  and threat detection. I enjoy participating in Capture the Flag competitions and am 
                  actively seeking a SOC analyst role where I can apply my skills in threat detection 
                  and incident response.
                </p>
                <p className="text-lg leading-relaxed mb-4 text-gray-100">
                  While I have experience in penetration testing, my primary expertise lies in defensive 
                  security operations. I'm currently certified with CompTIA Security+ and am pursuing 
                  additional certifications including BTL1 while considering returning to school to 
                  further advance my cybersecurity knowledge.
                </p>
                <p className="text-lg leading-relaxed text-gray-100">
                  In my spare time, I explore hardware security with my Flipper Zero, constantly learning 
                  about its capabilities and applications in security research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16" style={{ backgroundColor: '#2D3748' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <User className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">Experience</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Hands-on experience and practical skills developed through various cybersecurity activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Capture The Flag Competitions</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Active participant in CTF competitions, developing practical skills in vulnerability 
                assessment, reverse engineering, and security analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Web Security</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Cryptography</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Forensics</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Blue Team Operations</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Specialized focus on defensive security operations, threat detection, and incident response 
                methodologies with hands-on experience in security monitoring.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Threat Detection</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>SIEM</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Incident Response</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Penetration Testing</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Experience in penetration testing methodologies and vulnerability assessment, 
                providing a comprehensive understanding of both offensive and defensive security.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Vulnerability Assessment</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Network Security</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Hardware Security Research</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Exploring hardware security concepts and radio frequency analysis using Flipper Zero, 
                expanding knowledge in IoT and embedded device security.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>RF Analysis</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>IoT Security</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm" style={{ color: '#2D3748' }}>Hardware Hacking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16" style={{ backgroundColor: '#4A5568' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">Certifications</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Professional certifications and ongoing education in cybersecurity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#2D3748' }}>CompTIA Security+</h3>
                  <p className="text-green-600 font-medium">Certified</p>
                </div>
              </div>
              <p style={{ color: '#4A5568' }}>
                Industry-standard certification covering essential cybersecurity principles, 
                risk management, and security technologies.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-green-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#2D3748' }}>Google SIEM Fundamentals</h3>
                  <p className="text-green-600 font-medium">Certified</p>
                </div>
              </div>
              <p style={{ color: '#4A5568' }}>
                Comprehensive training in Security Information and Event Management (SIEM) 
                systems, log analysis, and security monitoring fundamentals.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#2D3748' }}>BTL1 (Blue Team Level 1)</h3>
                  <p className="text-blue-600 font-medium">In Progress</p>
                </div>
              </div>
              <p style={{ color: '#4A5568' }}>
                Advanced blue team certification focusing on defensive security operations, 
                threat hunting, and incident response capabilities.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Continuing Education</h3>
              <p style={{ color: '#4A5568' }}>
                Currently exploring opportunities to return to school for advanced cybersecurity education 
                and pursuing additional industry certifications to enhance my expertise in SOC operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16" style={{ backgroundColor: '#2D3748' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Code className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">Projects</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Personal projects and research initiatives in cybersecurity and technology.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Home Lab Infrastructure</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Designed and implemented two comprehensive home lab environments (Windows/Mac) 
                with integrated firewall solutions and multi-layered encryption protocols.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Network Security</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Encryption</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Code className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>SIEM & Security Analytics</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Implemented and configured Splunk and Wazuh SIEM solutions for security 
                monitoring, log analysis, and threat detection in enterprise environments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Splunk</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Wazuh</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <User className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Penetration Testing & CTF</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Completed multiple HackTheBox challenges and CTF competitions. Conducted 
                penetration testing assessment for gaming server infrastructure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>HackTheBox</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Penetration Testing</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Surveillance System Development</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Contributed to the development and startup of an advanced surveillance camera 
                system featuring FaceID technology with automated reporting to local authorities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>FaceID</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Surveillance</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <Code className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Blue Team Operations</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Specialized in defensive security operations including log analysis, incident 
                response automation, policy compliance, and comprehensive vulnerability management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Log Analysis</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Incident Response</span>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
              <User className="w-10 h-10 mb-4" style={{ color: '#2D3748' }} />
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#2D3748' }}>Hardware Security Research</h3>
              <p className="mb-4" style={{ color: '#4A5568' }}>
                Ongoing research and experimentation with Flipper Zero capabilities, 
                exploring RF protocols, hardware security, and IoT device analysis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>Flipper Zero</span>
                <span className="px-2 py-1 bg-gray-200 rounded text-sm" style={{ color: '#2D3748' }}>RF Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section id="socials" className="py-16" style={{ backgroundColor: '#4A5568' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ExternalLink className="w-12 h-12 mx-auto mb-4 text-white" />
            <h2 className="text-3xl font-bold mb-4 text-white">Connect With Me</h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Find me on professional networks and explore my projects and contributions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <a 
              href="https://www.linkedin.com/in/logan-tomasek-02165b2a4/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center mb-4">
                <Linkedin className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: '#2D3748' }}>LinkedIn</h3>
              <p className="text-center" style={{ color: '#4A5568' }}>
                Connect with me professionally and view my career journey in cybersecurity.
              </p>
            </a>
            
            <a 
              href="https://github.com/LoganTomasek" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-center justify-center mb-4">
                <Github className="w-12 h-12 group-hover:scale-110 transition-transform" style={{ color: '#2D3748' }} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2" style={{ color: '#2D3748' }}>GitHub</h3>
              <p className="text-center" style={{ color: '#4A5568' }}>
                Explore my code repositories, projects, and contributions to the cybersecurity community.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-8" style={{ backgroundColor: '#2D3748' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-6 h-6" />
            <span className="text-lg font-semibold">Logan Tomasek</span>
          </div>
          <p className="text-gray-300">
            Cybersecurity Professional | Seeking SOC Analyst Opportunities
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;