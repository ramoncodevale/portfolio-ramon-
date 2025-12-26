import { Code, Eye, GraduationCap, Target } from "lucide-react";

const About = () => {
    return (  
        <section id="about" className="py-24 relative">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#7CFFB2] font-bold tracking-widest text-xs uppercase mb-4 block">Sobre Mim</span>
          <h2 className="font-heading text-5xl font-black mb-8 leading-tight text-[#E6E8EC]">
            CÓDIGO LIMPO, <br />
            DESIGN <span className="text-[#7CFFB2]">INTELIGENTE.</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] leading-relaxed mb-6">
            Sou um desenvolvedor front-end apaixonado por criar interfaces que não apenas funcionam, mas encantam. Meu foco é unir a precisão do desenvolvimento com a estética do design moderno.
          </p>
          
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-[#7CFFB2]/5 border border-[#7CFFB2]/20 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#7CFFB2]/10 flex items-center justify-center">
              <GraduationCap className="text-[#7CFFB2] w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#7CFFB2] uppercase tracking-widest">Educação</p>
              <p className="text-sm font-semibold text-white">Análise e Desenvolvimento de Sistemas <span className="text-[#7CFFB2] ml-1 opacity-80 text-[10px]">(Em andamento)</span></p>
            </div>
          </div>

          <p className="text-lg text-[#9CA3AF] leading-relaxed">
             Desenvolvo interfaces com React e Next.js, focando em usabilidade, organização de código e boa performance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { icon: <Target className="text-[#7CFFB2]" />, title: 'Precisão', desc: 'Implementação fiel ao design pixel por pixel.' },
            { icon: <Eye className="text-[#8B5CF6]" />, title: 'UX Vision', desc: 'Foco na usabilidade e fluxo do usuário.' },
            { icon: <Code className="text-[#7CFFB2]" />, title: 'Clean Code', desc: 'Código modular, escalável e bem documentado.' }
          ].map((item, i) => (
            <div key={i} className={`p-8 rounded-3xl bg-[#1C1F2A]/50 border border-white/5 glass transition-all hover:scale-[1.02] hover:border-[#7CFFB2]/20 ${i === 2 ? 'sm:col-span-2' : ''}`}>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="font-bold text-white text-xl mb-2">{item.title}</h4>
              <p className="text-sm text-[#9CA3AF]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
}
 
export default About;