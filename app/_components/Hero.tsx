
import { Monitor, Zap, Code2, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.2] pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #7CFFB20d 1px, transparent 1px), linear-gradient(to bottom, #7CFFB20d 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-[#7CFFB2]/20 text-[10px] font-bold tracking-[0.25em] text-[#7CFFB2] mb-10 uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CFFB2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CFFB2]"></span>
            </span>
            Disponível para novas oportunidades profissionais
          </div>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-[115px] font-black tracking-tighter leading-[0.95] mb-12 text-[#E6E8EC]">
            CRIANDO <br />
            <span className="text-white block">EXPERIÊNCIAS</span>
            <span className="relative inline-block text-[#7CFFB2]">
              DIGITAIS
              <div className="absolute -bottom-4 left-0 w-full h-1.5 bg-[#7CFFB2] rounded-full opacity-20"></div>
            </span>
          </h1>


          <p className="text-xl md:text-2xl text-[#9CA3AF] max-w-xl leading-relaxed mb-14">
            Desenvolvedor Front-end criando interfaces
            <span className="text-white font-semibold"> modernas</span>,
            <span className="text-[#7CFFB2] font-semibold italic"> responsivas</span> e funcionais.
          </p>


          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="/curriculo.pdf"
              target="_blank"
              className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#7CFFB2] text-black rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_-10px_rgba(124,255,178,0.3)]"
            >
              <FileText className="w-5 h-5" />
              Baixar Currículo
            </a>

            <a
              href="#contact"
              className="group flex items-center gap-3 text-lg font-bold text-[#E6E8EC] hover:text-[#7CFFB2] transition-colors ml-4"
            >
              Entrar em contato
              <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-[#7CFFB2] transition-all"></div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="relative w-full aspect-square">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-dashed border border-[#7CFFB2]/20 rounded-full animate-[spin_30s_linear_infinite]"></div>

            <div className="absolute top-0 -right-4 w-72 p-6 rounded-2xl bg-[#0d111a] border border-white/10 shadow-2xl animate-[float_7s_infinite_alternate]">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center">
                  <Monitor className="text-[#8B5CF6] w-6 h-6" />
                </div>
                <div className="text-[10px] font-bold text-[#9CA3AF] tracking-widest">DESIGN SYSTEM</div>
              </div>
              <h3 className="text-white font-bold text-base mb-1">Consistency First</h3>
              <p className="text-[11px] text-[#9CA3AF] leading-relaxed italic">"Interfaces que respiram e guiam o usuário com clareza."</p>
            </div>

            <div className="absolute bottom-12 -left-8 w-64 p-6 rounded-2xl bg-[#0d111a] border border-white/10 shadow-2xl animate-[float_9s_infinite_alternate-reverse]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#7CFFB2]/20 flex items-center justify-center">
                  <Zap className="text-[#7CFFB2] w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] font-bold text-[#7CFFB2]">PERFORMANCE</span>
                    <span className="text-[8px] font-bold text-white">99%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-[#7CFFB2]"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold text-sm">Light Speed Ready</h3>
            </div>

            <div className="absolute top-1/3 left-0 p-3 rounded-lg bg-white/5 border border-white/10 animate-bounce delay-75">
              <Code2 className="text-[#8B5CF6] w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-15px, -20px); }
        }
      `}} />
    </section>
  );
};

export default Hero;
