
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/types';

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Projeto FSW Barber",
    description: "Um sistema para agendamento de cortes de cabelo e serviços de barbearia.",
    image: "https://img.freepik.com/free-photo/man-cuts-his-beard-barbershop_1157-16081.jpg?t=st=1739132074~exp=1739135674~hmac=94b03cf53122f79ebafbb628293ee94b5055ac15fac2e742236c19dcf272f800&w=740",
    stack: ["Next", "Typescript", "Tailwind", "Prisma"],
    githubUrl: "https://github.com/ramoncodevale/fsw-barber",
    demoUrl: "https://fsw-barber-bk2y.vercel.app/"
  },
  {
    id: 2,
    title: "Projeto Spotify",
    description: "Aplicação inspirada no Spotify, desenvolvida com React e JavaScript.",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stack: ["React.js", "Stripe", "Prisma"],
    githubUrl: "https://github.com/ramoncodevale/spotify-react",
    demoUrl: "https://spotify-react-deef.onrender.com/"
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div>
          <span className="text-[#7CFFB2] font-bold tracking-widest text-xs uppercase mb-4 block">Portfólio</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#E6E8EC] leading-none">
            TRABALHOS <br/><span className="text-[#7CFFB2]">SELECIONADOS.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="group relative rounded-[40px] overflow-hidden glass p-4 transition-all hover:translate-y-[-8px]">
            <div className="relative aspect-video rounded-[32px] overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1A] via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="px-4 pb-4">
              <div className="flex gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[10px] font-bold text-[#7CFFB2] px-2 py-1 rounded bg-[#7CFFB2]/10">
                    {tech}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-[#9CA3AF] text-sm mb-6 leading-relaxed line-clamp-2">{project.description}</p>
              
              <div className="flex gap-6">
                <a target="_blank" href={project.demoUrl} className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#7CFFB2] transition-colors">
                  LIVE DEMO <ExternalLink size={16} />
                </a>
                <a target="_blank" href={project.githubUrl} className="flex items-center gap-2 text-sm font-bold text-[#9CA3AF] hover:text-white transition-colors">
                  GITHUB <Github size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
