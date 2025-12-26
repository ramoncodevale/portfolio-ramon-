import { Github, Linkedin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-[#1C1F2A]">
      <div className="bg-[#1C1F2A] border border-[#E6E8EC]/5 rounded-[40px] p-12 md:p-24 text-center overflow-hidden relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#7CFFB2]/5 blur-[100px] rounded-full" />
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#8B5CF6]/5 blur-[80px] rounded-full" />

        <span className="inline-block text-[#7CFFB2] font-bold tracking-widest text-xs uppercase mb-6">
          Vamos Conversar?
        </span>

        <h2 className="font-heading text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-[#E6E8EC]">
          VAMOS CRIAR <br />
          ALGO <span className="text-[#7CFFB2]">ÉPICO</span>.
        </h2>

        <p className="text-[#9CA3AF] text-lg md:text-xl max-w-xl mx-auto mb-12">
          Estou sempre aberto a novos desafios e parcerias criativas. Mande um alô!
        </p>

        <div className="flex flex-col items-center gap-12">
          <a
            href="mailto:ramonvalentim88@gmail.com"
            className="text-2xl md:text-4xl font-heading font-bold hover:text-[#7CFFB2] transition-all duration-300 underline decoration-[#E6E8EC]/10 underline-offset-8 hover:scale-105"
          >
            ramonvalentim88@gmail.com
          </a>

          <div className="flex gap-8 relative z-10">
            <a
              href="https://github.com/ramoncodevale"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-full bg-[#0C0F1A] border border-[#E6E8EC]/10 text-[#9CA3AF] hover:text-[#7CFFB2] hover:border-[#7CFFB2] hover:scale-110 hover:shadow-[0_0_20px_rgba(124,255,178,0.2)] transition-all duration-300"
              title="GitHub"
            >
              <Github size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/ramonvalentim-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-full bg-[#0C0F1A] border border-[#E6E8EC]/10 text-[#9CA3AF] hover:text-[#7CFFB2] hover:border-[#7CFFB2] hover:scale-110 hover:shadow-[0_0_20px_rgba(124,255,178,0.2)] transition-all duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://wa.me/5511988872804"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-full bg-[#0C0F1A] border border-[#E6E8EC]/10 text-[#9CA3AF] hover:text-[#7CFFB2] hover:border-[#7CFFB2] hover:scale-110 hover:shadow-[0_0_20px_rgba(124,255,178,0.2)] transition-all duration-300"
              title="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
