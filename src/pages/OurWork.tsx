
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import CTAButton from '../components/CTAButton';

type ProjectType = 'Data Center' | 'Smart Building' | 'Network Infrastructure' | 'IoT Systems' | 'Security Systems' | 'Cloud Integration' | 'Education/Conservation';

type Project = {
  id: number;
  title: string;
  type: ProjectType;
  description: string;
  image: string;
  details: string;
  industry: string;
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Data Center",
    type: "Data Center",
    description: "High-density fiber infrastructure deployment supporting 100Gb/s throughput",
    image: "photo-1487958449943-2429e8be8625",
    details: "Complete overhaul of legacy infrastructure with state-of-the-art fiber optic cabling, supporting 100Gb/s throughput across 50,000 square feet of data center space. This project included redundant power systems, advanced cooling solutions, and comprehensive monitoring systems.",
    industry: "Technology",
    features: ["100Gb/s Fiber Network", "Redundant Power Systems", "Advanced Cooling", "24/7 Monitoring"]
  },
  {
    id: 2,
    title: "Smart Building Integration",
    type: "Smart Building",
    description: "IoT-enabled building management system across 30-story commercial tower",
    image: "photo-1518770660439-4636190af475",
    details: "Implementation of smart building technology across a 30-story commercial tower, integrating HVAC, security, and lighting systems into a unified control platform. Features include predictive maintenance, energy optimization, and centralized monitoring.",
    industry: "Commercial Real Estate",
    features: ["Unified Control Platform", "Energy Optimization", "Predictive Maintenance", "Centralized Monitoring"]
  },
  {
    id: 3,
    title: "Campus Network Upgrade",
    type: "Network Infrastructure",
    description: "University-wide network modernization with Wi-Fi 6E deployment",
    image: "photo-1461749280684-dccba630e2f6",
    details: "Comprehensive upgrade of campus-wide network infrastructure, including Wi-Fi 6E deployment and 40Gb backbone installation across 15 buildings. The project supports 50,000+ concurrent users and includes advanced security protocols.",
    industry: "Education",
    features: ["Wi-Fi 6E Technology", "40Gb Backbone", "50,000+ User Support", "Advanced Security"]
  },
  {
    id: 4,
    title: "Manufacturing IoT Network",
    type: "IoT Systems",
    description: "Industrial IoT sensor network with real-time machine learning analytics",
    image: "photo-1486312338219-ce68d2c6f44d",
    details: "Design and installation of robust IoT network supporting 1,000+ sensors and real-time machine learning analytics for predictive maintenance. Includes edge computing nodes and cloud integration for comprehensive data analysis.",
    industry: "Manufacturing",
    features: ["1,000+ IoT Sensors", "Edge Computing", "Predictive Analytics", "Cloud Integration"]
  },
  {
    id: 5,
    title: "Hospital Security Network",
    type: "Security Systems",
    description: "Comprehensive security and access control system for healthcare facility",
    image: "photo-1488590528505-98d2b5aba04b",
    details: "Implementation of advanced security infrastructure including IP cameras, access control systems, and emergency communication networks across a 500-bed hospital. Features HIPAA-compliant data handling and 99.9% uptime guarantee.",
    industry: "Healthcare",
    features: ["IP Camera Network", "Access Control", "Emergency Communications", "HIPAA Compliance"]
  },
  {
    id: 6,
    title: "Financial Cloud Migration",
    type: "Cloud Integration",
    description: "Secure cloud infrastructure for financial services company",
    image: "photo-1496307653780-42ee777d4833",
    details: "Complete migration of financial services infrastructure to secure cloud environment with hybrid connectivity. Includes encrypted data channels, compliance monitoring, and disaster recovery systems with 15-minute RTO.",
    industry: "Financial Services",
    features: ["Hybrid Cloud Setup", "Encrypted Channels", "Compliance Monitoring", "15-min RTO"]
  },
  {
    id: 7,
    title: "Columbus Zoo Network Modernization",
    type: "Education/Conservation",
    description: "Complete infrastructure overhaul for the Columbus Zoo and Aquarium, supporting both guest experiences and critical animal care systems",
    image: "/lovable-uploads/5abebf68-15fe-4395-a93d-89fa7ac4cc89.png",
    details: "Buckeye DataCom partnered with the Columbus Zoo to modernize their aging network infrastructure. The project included installing redundant fiber paths to ensure 24/7 uptime for temperature-controlled habitats, veterinary facilities, and security systems. We also implemented high-density Wi-Fi for the 2.3 million annual visitors and created a separate secure network for research and conservation data. The new infrastructure supports innovative guest experiences like interactive exhibits and mobile apps while maintaining the strict reliability required for animal care systems.",
    industry: "Education/Conservation",
    features: ["580-Acre Campus Coverage", "Habitat Monitoring Systems", "Interactive Guest Experiences", "Mission-Critical Reliability"]
  }
];

const projectTypes: ProjectType[] = ['Data Center', 'Smart Building', 'Network Infrastructure', 'IoT Systems', 'Security Systems', 'Cloud Integration', 'Education/Conservation'];

const OurWork = ({ setIsModalOpen }: { setIsModalOpen: (isOpen: boolean) => void }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectType | 'All'>('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.type === activeFilter);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-buckeye-black via-buckeye-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Work
          </h1>
          <p className="text-xl text-buckeye-gray max-w-3xl mx-auto">
            Explore our portfolio of successful network infrastructure projects across various industries
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === 'All'
                  ? 'bg-buckeye-scarlet text-white'
                  : 'bg-white text-buckeye-gray hover:bg-buckeye-scarlet hover:text-white'
              }`}
            >
              All Projects
            </button>
            {projectTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === type
                    ? 'bg-buckeye-scarlet text-white'
                    : 'bg-white text-buckeye-gray hover:bg-buckeye-scarlet hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-buckeye-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to see your project here?
          </h2>
          <p className="text-xl text-buckeye-gray mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and transform your network infrastructure today.
          </p>
          <CTAButton variant="primary" size="lg" onClick={() => setIsModalOpen(true)}>
            Start Your Project
          </CTAButton>
        </div>
      </section>

      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default OurWork;
