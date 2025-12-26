import {
  Layout,
  Server,
  Smartphone,
  PenTool,
  Zap,
  Globe,
} from 'lucide-react'

const skills = [
  {
    name: 'React & Next.js',
    icon: <Layout className="w-6 h-6 text-[#7CFFB2]" />,
  },
  {
    name: 'TypeScript',
    icon: <Zap className="w-6 h-6 text-[#8B5CF6]" />,
  },
  {
    name: 'Tailwind CSS',
    icon: <Globe className="w-6 h-6 text-[#7CFFB2]" />,
  },
  {
    name: 'Node.js',
    icon: <Server className="w-6 h-6 text-[#8B5CF6]" />,
  },
  {
    name: 'Figma / UI Design',
    icon: <PenTool className="w-6 h-6 text-[#7CFFB2]" />,
  },
  {
    name: 'Mobile First',
    icon: <Smartphone className="w-6 h-6 text-[#8B5CF6]" />,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* HEADER */}
      <div className="mb-16 text-center">
        <span className="text-[#7CFFB2] font-bold tracking-widest text-xs uppercase mb-4 block">
          Expertise
        </span>
        <h2 className="font-heading text-5xl font-black text-[#E6E8EC]">
          STACK TÉCNICA.
        </h2>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-8 rounded-[32px] bg-[#1C1F2A]/30 border border-white/5 flex flex-col items-center justify-center gap-4 transition-all hover:border-[#7CFFB2]/30 glass"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <span className="text-sm font-bold text-[#E6E8EC] text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
