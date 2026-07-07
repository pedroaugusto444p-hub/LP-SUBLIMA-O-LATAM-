import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  AlertCircle,
  BookOpen,
  Star,
  ShieldCheck,
  Download,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Flame,
  HelpCircle,
  Sparkles,
  Printer,
  MessageSquare,
  FolderArchive,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Section, AnimatedSection } from "@/components/Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function LandingPage() {
  const [purchaseNotification, setPurchaseNotification] = useState<{
    name: string;
    plan: string;
    city: string;
  } | null>(null);
  const [showUpsell, setShowUpsell] = useState(false);

  const kitPreviews = [
    {
      title: "+220 mil diseños para tazas",
      image: "https://i.ibb.co/nqBVkr5g/Imagem-11.png",
    },
    {
      title: "Plantillas editables en Canva",
      image: "https://i.ibb.co/YFZ8zGxT/Chat-GPT-Image-5-de-jul-de-2026-19-41-06-9.png",
    },
    {
      title: "Archivos PNG/PDF en alta resolución",
      image: "https://i.ibb.co/wN7rbVy6/Chat-GPT-Image-15-de-jun-de-2026-00-14-23.png",
    },
    {
      title: "Mockups realistas para vender antes de producir",
      image: "https://i.ibb.co/kVXMwR9j/Chat-GPT-Image-15-de-jun-de-2026-01-14-24.png",
    },
    {
      title: "Diseños inspirados en selecciones de LATAM",
      image: "https://i.ibb.co/9mjLsKHM/Imagem-15.png",
    },
    {
      title: "Elementos de fútbol editables",
      image: "https://i.ibb.co/zVJjPLSC/Imagem-01.png",
    },
    {
      title: "Modelos listos para imprimir",
      image: "https://i.ibb.co/gF7Nyyzk/Chat-GPT-Image-5-de-jul-de-2026-16-56-03-6.png",
    },
    {
      title: "Diseños patrióticos y deportivos",
      image: "https://i.ibb.co/sxM1PPN/Chat-GPT-Image-5-de-jul-de-2026-19-15-33-6.png",
    },
    {
      title: "Plantillas para negocios de sublimación",
      image: "https://i.ibb.co/dFykhct/Chat-GPT-Image-5-de-jul-de-2026-16-35-46-9.png",
    },
    {
      title: "Bonos para producción y venta",
      image: "https://i.ibb.co/wNq8YqKS/Imagem-12.png",
    },
  ];

  useEffect(() => {
    const purchases = [
      { name: "Patricia Acuña", plan: "Paquete Completo Mundial 2026", city: "Ciudad de México" },
      { name: "Ana María", plan: "Paquete Completo Mundial 2026", city: "Bogotá" },
      { name: "Juliana Santos", plan: "Paquete Esencial", city: "Santiago" },
      { name: "Carla Silveira", plan: "Paquete Completo Mundial 2026", city: "Buenos Aires" },
      { name: "Renato Souza", plan: "Paquete Completo Mundial 2026", city: "Lima" },
      { name: "Sandra Regina", plan: "Paquete Completo Mundial 2026", city: "Guadalajara" },
      { name: "Amanda Melo", plan: "Paquete Esencial", city: "Monterrey" },
    ];
    let currentIndex = 0;
    const showNotification = () => {
      const current = purchases[currentIndex];
      setPurchaseNotification({ name: current.name, plan: current.plan, city: current.city });
      currentIndex = (currentIndex + 1) % purchases.length;
      setTimeout(() => setPurchaseNotification(null), 6000);
    };
    const interval = setInterval(showNotification, 14000);
    const initialTimeout = setTimeout(showNotification, 2000);
    return () => { clearInterval(interval); clearTimeout(initialTimeout); };
  }, []);

  useEffect(() => {
    const autoplay = setInterval(() => {
      const el = document.getElementById("compact-carousel");
      if (el) {
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 15) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
        }
      }
    }, 3500);
    return () => clearInterval(autoplay);
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePurchase = (productName: string) => {
    if (productName === "Pacote Essencial") {
      setShowUpsell(true);
    } else if (productName === "Pacote Completo") {
      window.location.href = "https://pay.hotmart.com/Q106625667U?checkoutMode=10";
    } else if (productName === "Oferta Especial") {
      window.location.href = "https://pay.hotmart.com/Q106625667U?off=92vzvhyj&checkoutMode=10";
    } else {
      window.location.href = "https://pay.hotmart.com/Q106625667U?off=mwchptwc&checkoutMode=10";
    }
  };

  const confirmEssencial = () => {
    setShowUpsell(false);
    window.location.href = "https://pay.hotmart.com/Q106625667U?off=mwchptwc&checkoutMode=10";
  };

  return (
    <div className="min-h-screen text-slate-700 overflow-x-hidden selection:bg-amber-200 selection:text-blue-950 bg-slate-50/50">

      {/* Header Banner */}
      <div className="bg-[#050E21] text-white py-2.5 px-4 font-extrabold text-center text-xs md:text-sm tracking-wide shadow-sm flex items-center justify-center gap-2 border-b border-amber-500/20">
        <Sparkles size={16} className="animate-spin text-amber-400" />
        <span>Material Actualizado 2026 • SUPER PACK MUNDIAL 2026 — TAZAS PERSONALIZADAS • 🇲🇽 🇨🇴 🇵🇪 🇨🇱 🇪🇨 ⚽️🔥</span>
      </div>

      {/* 1. Hero */}
      <div className="relative bg-[#07132B] text-white pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden border-b border-blue-900/60">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl opacity-50" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14">
            <div className="flex-1 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 bg-blue-950/90 px-4 py-1.5 rounded-full border border-amber-500/30 mb-6 mx-auto md:mx-0">
                  <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-amber-300">Material Actualizado 2026 • PACK LATAM</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight">
                  Vende Tazas Personalizadas del <br />
                  <span className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-sans inline-block transform -rotate-1 py-1 px-3.5 sm:px-4 rounded shadow-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-black">
                    Mundial 2026
                  </span> <br />
                  Sin Diseñar Desde Cero
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-slate-200 font-bold mb-6 sm:mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed px-2 md:px-0">
                  Recibe más de 220 mil diseños listos y editables para imprimir, sublimar y vender en: <br className="hidden sm:block" />
                  <span className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-800 text-amber-300 mt-2.5 text-xs sm:text-sm md:text-base font-extrabold">
                    <span>🇲🇽 México</span>
                    <span className="text-blue-700/60">•</span>
                    <span>🇨🇴 Colombia</span>
                    <span className="text-blue-700/60">•</span>
                    <span>🇵🇪 Perú</span>
                    <span className="text-blue-700/60">•</span>
                    <span>🇨🇱 Chile</span>
                    <span className="text-blue-700/60">•</span>
                    <span>🇪🇨 Ecuador</span>
                  </span>
                </p>

                <div className="flex flex-col gap-3 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0 text-left">
                  {[
                    "Kit 100% actualizado para el Mundial 2026",
                    "Diseños editables en Canva, Photoshop y CorelDRAW",
                    "Archivos listos para imprimir y sublimar",
                    "Ideal para emprendedores, imprentas, diseñadores y personalizados",
                    "Acceso inmediato por correo y WhatsApp",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-2.5 sm:gap-3 px-2 sm:px-0"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-950 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold mt-0.5 shadow-sm">
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className="text-slate-200 font-bold text-xs sm:text-sm md:text-base leading-tight sm:leading-normal">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={scrollToPricing}
                    className="w-full sm:w-auto min-w-0 sm:min-w-[280px] bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold uppercase shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm md:text-base tracking-wider py-4 px-8 rounded-full"
                  >
                    EMPIEZA A VENDER TAZAS DEL MUNDIAL
                  </button>
                  <p className="text-[10px] sm:text-xs text-slate-300 font-bold text-center md:text-left leading-normal">
                    Acceso inmediato • Pago 100% seguro • Garantía de 7 días
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full max-w-lg md:max-w-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-600/10 rounded-3xl transform rotate-2 scale-105 blur-md"></div>
                <div className="relative bg-slate-950 rounded-2xl shadow-2xl border-4 border-blue-900/40 overflow-hidden flex flex-col">
                  <img
                    src="https://i.ibb.co/MyFg35PD/5-de-jul-de-2026-12-11-18.png"
                    alt="Diseños para Tazas Mundial 2026"
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="bg-gradient-to-r from-[#07132B] to-[#122A63] text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-extrabold text-sm sm:text-base flex items-center gap-1.5">
                          Sublimación Lucrativa LATAM <span className="text-xs">🇲🇽🇨🇴🇵🇪🇨🇱🇪🇨</span>
                        </p>
                        <p className="text-xs text-amber-400 font-bold">Diseños de selecciones 100% listos</p>
                      </div>
                      <div className="flex -space-x-1.5">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-7 h-7 rounded-full border-2 border-blue-900 bg-cover bg-center"
                            style={{ backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 42})` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-slate-900 px-3.5 py-2.5 rounded-xl shadow-xl border border-amber-500/30 transform rotate-6 flex items-center gap-2"
                >
                  <div className="bg-amber-500 p-1.5 rounded-lg text-slate-950">
                    <Star size={16} fill="currentColor" stroke="none" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Calificación</p>
                    <p className="text-xs font-extrabold text-white">5.0 Estrellas ★★★★★</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <AnimatedSection background="light" className="border-b border-slate-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
              Sé sincero…{" "}
              <span className="text-purple-600 inline-block mt-1" style={{ fontFamily: "Quicksand, sans-serif" }}>
                ¿ya te ha pasado esto en temporada de partidos?
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "El celular empieza a sonar con clientes pidiendo tazas personalizadas de último momento.",
              "Pierdes horas frente a la computadora intentando crear diseños desde cero.",
              "Mientras intentas diseñar, otros negocios ya están publicando mockups, recibiendo pedidos y vendiendo.",
              "Y cuando llega la prisa, cualquier error en la medida, el archivo o la impresión puede hacerte perder material, tiempo y dinero.",
            ].map((text, i) => (
              <div key={i} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-start gap-3.5 hover:shadow-md transition-all">
                <div className="bg-red-50 p-2.5 rounded-lg text-red-500 shrink-0">
                  <AlertCircle size={22} className="stroke-2" />
                </div>
                <p className="text-sm md:text-base text-slate-700 font-bold pt-0.5 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="bg-amber-500/5 p-6 md:p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm max-w-2xl mx-auto text-center">
            <p className="text-base md:text-lg text-slate-800 font-bold italic leading-relaxed">
              "El problema no es que no sepas sublimar. El problema es no tener diseños listos cuando la demanda aparece."
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Beneficios */}
      <AnimatedSection background="white" className="py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto px-4">
          <div className="relative order-2 md:order-1 max-w-sm md:max-w-none mx-auto w-full">
            <div className="absolute inset-0 bg-amber-200/30 rounded-3xl transform -rotate-2 blur-sm"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://i.ibb.co/rKRVsXhM/Chat-GPT-Image-13-de-jun-de-2026-21-52-25.png"
                alt="Emprendedores de Sublimación Vendiendo Más en el Mundial 2026"
                className="w-full h-auto object-cover max-h-[360px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-900 rounded-full font-extrabold text-xs uppercase tracking-wider mb-4 border border-amber-200">
              LA SOLUCIÓN PARA VENDER MÁS RÁPIDO
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-slate-800 leading-tight">
              Quienes trabajan con diseños listos para tazas del Mundial...
            </h2>
            <p className="text-slate-600 text-base mb-6 font-bold">Pueden vender con más velocidad, menos estrés y más organización:</p>
            <div className="space-y-6">
              {[
                { title: "Publica mockups antes de producir", desc: "Muestra los diseños a tus clientes y recibe pedidos antes de gastar material." },
                { title: "Personaliza en minutos", desc: "Abre el archivo, cambia el nombre, ajusta los detalles e imprime." },
                { title: "Atiende más pedidos en menos tiempo", desc: "Ideal para empresas, comercios, fanáticos, familias y negocios locales." },
                { title: "Aprovecha la temporada del Mundial", desc: "El fútbol mueve emociones, regalos personalizados y compras por impulso." },
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-blue-50 w-9 h-9 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0 border border-blue-100">
                    <Check size={18} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-800 leading-snug">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 mt-0.5 leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 4. Apresentação do Produto */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-[#091833] to-[#050E21] border-y border-blue-900/60 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-4 relative z-10"
        >
          <h2 id="super-pack-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            SUPER PACK MUNDIAL 2026 — TAZAS PERSONALIZADAS
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-amber-400 mb-4 leading-relaxed max-w-3xl mx-auto font-black uppercase tracking-wide">
            Un catálogo completo de diseños para sublimación, creado para emprendedores, imprentas rápidas y tiendas de productos personalizados.
          </p>
          <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto font-medium">
            Todo está organizado para que puedas personalizar, imprimir, sublimar y vender sin perder tiempo creando diseños desde cero.
          </p>
          
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 rounded-2xl py-4.5 px-6 md:px-10 inline-block shadow-xl border border-yellow-300 mb-16">
            <p className="text-base sm:text-lg md:text-xl font-extrabold tracking-wide" style={{ fontFamily: "Quicksand, sans-serif" }}>
              👉 Tú solo eliges el diseño, personalizas, publicas el mockup y empiezas a vender.
            </p>
          </div>

          {/* New feature cards with Canva, Impresión, WhatsApp, Archivos icon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
            {[
              {
                icon: <Sparkles className="text-amber-400 w-6 h-6" />,
                title: "Plantillas Canva",
                desc: "Enlaces listos para abrir gratis en Canva. Edita nombres, números o colores en segundos desde el celular o PC."
              },
              {
                icon: <Printer className="text-amber-400 w-6 h-6" />,
                title: "Alta Resolución JPG/PNG",
                desc: "Archivos listos para imprimir y sublimar de inmediato, optimizados para tazas sin distorsiones."
              },
              {
                icon: <MessageSquare className="text-amber-400 w-6 h-6" />,
                title: "Soporte por WhatsApp",
                desc: "Canal directo para descargas, dudas técnicas o de sublimación para tu máxima tranquilidad."
              },
              {
                icon: <FolderArchive className="text-amber-400 w-6 h-6" />,
                title: "Formatos PSD & CDR",
                desc: "Para los diseñadores más exigentes: incluye archivos editables de Photoshop y CorelDRAW para total libertad."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-900/60 p-5 rounded-2xl border border-blue-900/40 hover:border-amber-500/30 transition-all flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-950/80 flex items-center justify-center border border-amber-500/20 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-base text-white">{card.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">{card.desc}</p>
              </div>
            ))}
          </div>

        </motion.div>
      </section>

      {/* 5. Galeria infinita */}
      <AnimatedSection background="white" className="py-16 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase font-extrabold tracking-widest text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 inline-block mb-3">🎨 Vista Previa de los Diseños</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2 leading-tight">Conoce algunos de los modelos incluidos</h2>
            <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">Más de 220 mil plantillas listas y editables en Canva, Photoshop y CorelDRAW</p>
          </div>
        </div>

        {/* Faixa 1 — desliza para a esquerda */}
        <div className="marquee-track overflow-hidden mb-4">
          <div className="flex gap-4 w-max animate-marquee-left">
            {[...kitPreviews, ...kitPreviews].map((item, i) => (
              <div key={i} className="w-56 sm:w-64 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[11px] font-bold text-slate-500 text-center px-2 py-2 truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Faixa 2 — desliza para a direita (ordem inversa) */}
        <div className="marquee-track overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee-right">
            {[...kitPreviews, ...kitPreviews].reverse().map((item, i) => (
              <div key={i} className="w-56 sm:w-64 flex-shrink-0 rounded-2xl overflow-hidden border border-slate-100 shadow-md bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-white flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[11px] font-bold text-slate-500 text-center px-2 py-2 truncate">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 6. Itens & Bônus */}
      <AnimatedSection background="light" className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
              ¿Qué vas a recibir?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed">
              Un pack completo con materiales listos para imprimir, editar, sublimar y vender durante la temporada del Mundial 2026.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-100 relative overflow-hidden max-w-2xl mx-auto">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -mr-6 -mt-6 opacity-40"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-extrabold text-blue-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                Incluye:
              </h3>
              <ul className="space-y-4">
                {[
                  "Diseños para tazas en alta resolución",
                  "Archivos PNG y PDF listos para impresión",
                  "Plantillas editables en Canva, Photoshop y CorelDRAW",
                  "Diseños inspirados en fútbol y selecciones",
                  "Mockups para mostrar el producto antes de fabricar",
                  "Acceso de por vida, sin mensualidades",
                  "Entrega inmediata por correo y WhatsApp",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 group">
                    <span className="text-xl shrink-0 select-none">✅</span>
                    <span className="text-slate-700 font-bold text-sm sm:text-base md:text-lg leading-snug group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Bonos exclusivos */}
      <AnimatedSection background="white" className="py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
              Bonos exclusivos del Paquete Completo
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-bold max-w-2xl mx-auto">
              Todo lo que necesitas para disparar tus ventas y perfeccionar tu producción este año.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                num: "Bono 1",
                title: "+500 Mockups Realistas del Mundial",
                desc: "Para publicar, mostrar a tus clientes y vender antes de producir.",
              },
              {
                num: "Bono 2",
                title: "Kit Especial de Selecciones y Fútbol",
                desc: "Elementos editables para personalizar diseños con colores, frases y detalles deportivos.",
              },
              {
                num: "Bono 3",
                title: "Tabla de Tiempo y Temperatura",
                desc: "Para ayudarte a evitar errores en la sublimación y cuidar tus materiales.",
              },
              {
                num: "Bono 4",
                title: "Calculadora Simple de Costos",
                desc: "Para calcular precio de venta, costo de producción y margen de ganancia.",
              },
            ].map((bono, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100/30 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 bg-red-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full mb-3 uppercase tracking-wider">
                    🔥 {bono.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-800 mb-2 leading-snug">
                    {bono.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {bono.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 7. Para quem é */}
      <Section background="white" className="py-16">
        <div className="max-w-4xl mx-auto px-4 bg-gradient-to-br from-slate-50 to-blue-50/15 rounded-3xl p-8 md:p-12 border border-slate-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10 text-slate-800 tracking-tight">¿Para quién es este pack?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Para emprendedores que venden tazas personalizadas y quieren aprovechar la temporada del Mundial.",
              "Para imprentas rápidas que necesitan atender pedidos sin perder tiempo diseñando desde cero.",
              "Para diseñadores que quieren tener un catálogo listo para ofrecer a clientes.",
              "Para personas que hacen sublimación en casa y necesitan archivos fáciles de editar o imprimir.",
              "Para negocios de personalizados que quieren vender más usando fútbol, selecciones y fechas de partidos como gancho comercial.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:-translate-y-0.5 transition-transform">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-extrabold text-sm shrink-0">
                  {i + 1}
                </div>
                <span className="font-bold text-slate-700 text-sm sm:text-base pt-1 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 8. Por que funciona */}
      <AnimatedSection background="light" className="border-y border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">¿Por qué este pack funciona?</h2>
            <p className="text-base sm:text-lg text-slate-600 font-bold mb-4 leading-relaxed max-w-2xl mx-auto">
              Porque en temporada de Mundial, las personas buscan productos personalizados para regalar, vender, decorar y celebrar los partidos.
            </p>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Con diseños listos, tú no empiezas desde cero. Puedes publicar mockups, recibir pedidos, personalizar nombres, imprimir y entregar con más rapidez.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 max-w-2xl mx-auto mb-8">
            <ul className="space-y-4">
              {[
                "Ahorra horas de diseño",
                "Ayuda a vender antes de producir",
                "Facilita la personalización",
                "Reduce errores en la preparación de archivos",
                "Te permite aprovechar una temporada de alta demanda",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3.5 group">
                  <span className="text-xl shrink-0 select-none">✅</span>
                  <span className="text-slate-700 font-bold text-sm sm:text-base leading-snug group-hover:text-slate-900 transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-r from-[#07132B] to-[#122A63] text-amber-400 p-5 rounded-2xl shadow-md max-w-xl mx-auto text-center border border-blue-800">
            <p className="text-lg sm:text-xl font-extrabold tracking-wide" style={{ fontFamily: "Quicksand, sans-serif" }}>
              🚀 Publica hoy. Recibe pedidos. Produce con más facilidad.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* 9. Escassez */}
      <Section background="white" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-red-600 mb-2" style={{ fontFamily: "Quicksand, sans-serif" }}>
              Oferta especial de lanzamiento exclusiva para el Mundial 2026
            </h3>
            <p className="text-sm font-semibold text-slate-500">Oferta especial de lanzamiento por tiempo limitado.</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border-2 border-dashed border-red-200 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base font-extrabold text-slate-800 mb-5">Este precio promocional es exclusivo para quien:</p>
            <div className="space-y-4 mb-6">
              {[
                "Quiere vender más en este Mundial de 2026",
                "Quiere optimizar su proceso de creación de diseños",
                "No quiere correr el riesgo de retrasar entregas o cometer errores en las plantillas de las tazas",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex-shrink-0 border border-blue-200">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-4 rounded-lg border border-red-100 shadow-sm text-center">
              <p className="text-sm md:text-base text-red-600 font-extrabold italic" style={{ fontFamily: "Quicksand, sans-serif" }}>
                "Quien se prepara antes, vende antes. Y quien vende antes, aprovecha mejor la temporada."
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 10. Preços */}
      <AnimatedSection id="pricing" background="light" className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold text-amber-300 bg-blue-950 border border-amber-500/30 px-3 py-1 rounded-full uppercase tracking-widest inline-block mb-3">CONDICIÓN IMPERDIBLE</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">Elige el mejor paquete para tu negocio</h2>

          <div className="max-w-2xl mx-auto space-y-4 text-sm sm:text-base text-slate-700 mb-12 font-medium bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-slate-800">
              ¿Quieres solo los diseños listos para imprimir?<br />
              <strong className="font-extrabold text-slate-900">El Paquete Esencial es para ti.</strong>
            </p>
            <p className="text-slate-800">
              ¿Quieres diseños, mockups, archivos editables y bonos para vender con más facilidad?<br />
              <strong className="font-extrabold text-blue-900">El Paquete Completo es la mejor opción.</strong>
            </p>
            <p className="font-extrabold text-slate-800 text-sm sm:text-base pt-2 border-t border-slate-100">
              👉 Recomendado para quienes quieren vender usando mockups, personalizar diseños y atender más pedidos durante el Mundial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch max-w-4xl mx-auto text-left">
            {/* Essencial */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 relative flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-400 uppercase tracking-wide mb-1">Paquete Esencial</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <div>
                    <span className="text-xs line-through font-bold text-red-500">De $9.90 USD</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">por $3.90 USD</div>
                  </div>
                  <span className="bg-red-100 text-red-600 border border-red-200 px-2 py-0.5 rounded font-extrabold text-xs">-60% off</span>
                </div>
                <p className="text-slate-500 mb-6 text-xs sm:text-sm font-semibold">Ideal para quienes ya tienen experiencia y solo necesitan diseños listos para imprimir.</p>
                <div className="space-y-3 mb-8 text-xs sm:text-sm">
                  <div className="font-extrabold text-slate-700 mb-2">Incluye:</div>
                  {[
                    "Diseños de tazas en alta calidad",
                    "Archivos JPG/PNG listos para impresión",
                    "Acceso de por vida",
                    "Entrega inmediata por correo y WhatsApp",
                    "Soporte básico",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-sm shrink-0 select-none">✅</span>
                      <span className="text-slate-700 font-semibold">{feat}</span>
                    </div>
                  ))}
                  <p className="text-[10px] font-extrabold text-red-600 border border-red-100 bg-red-50 p-2.5 rounded mt-4">
                    📢 Atención: no incluye mockups, plantillas editables en Canva/PSD/CorelDRAW ni elementos vectorizados.
                  </p>
                </div>
              </div>
              <button
                onClick={() => handlePurchase("Pacote Essencial")}
                className="w-full text-sm font-extrabold bg-green-600 hover:bg-green-700 text-white transition-all py-4 mt-4 shadow-lg shadow-green-600/30 animate-pulse-scale rounded-full"
              >
                QUIERO EL PAQUETE ESENCIAL
              </button>
            </motion.div>

            {/* Completo */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 border-amber-500 relative flex flex-col justify-between md:scale-[1.03] z-10"
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 px-5 py-0.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                MÁS VENDIDO 🔥
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-blue-900 uppercase tracking-wide mb-1">Paquete Completo</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <div>
                    <span className="text-xs line-through font-bold text-red-500">De $19.90 USD</span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900">por $7.90 USD</div>
                  </div>
                  <span className="bg-amber-100 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-extrabold text-xs">Recomendado</span>
                </div>
                <p className="text-slate-600 mb-6 text-xs sm:text-sm font-bold leading-relaxed">
                  La opción más recomendada para vender con más facilidad durante el Mundial 2026.
                </p>
                
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <div className="font-extrabold text-slate-700 mb-2">Incluye todo del Paquete Esencial, más:</div>
                  {[
                    "Diseños en alta definición",
                    "Enlaces editables en Canva",
                    "Archivos editables para Photoshop y CorelDRAW",
                    "Mockups realistas para promocionar",
                    "Plantillas listas para tazas",
                    "Acceso de por vida",
                    "Envío instantáneo por WhatsApp y correo",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-sm shrink-0 select-none">✅</span>
                      <span className="text-slate-700 font-semibold">{feat}</span>
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-slate-100 mt-4 space-y-3">
                    <div className="font-extrabold text-slate-700 mb-1">Bonos incluidos:</div>
                    {[
                      "+500 mockups realistas del Mundial",
                      "Kit especial de selecciones y fútbol",
                      "Tabla de tiempo y temperatura",
                      "Calculadora simple de costos",
                    ].map((bono, i) => (
                      <div key={i} className="flex items-start gap-2 bg-amber-500/5 p-2 rounded-lg border border-amber-500/25">
                        <span className="shrink-0 select-none">🔥</span>
                        <span className="text-slate-800 font-bold text-[11px] sm:text-xs leading-normal">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                onClick={() => handlePurchase("Pacote Completo")}
                className="w-full text-sm font-extrabold bg-green-600 hover:bg-green-700 text-white transition-all py-4 mt-4 shadow-lg shadow-green-600/30 animate-pulse-scale rounded-full"
              >
                QUIERO EL PAQUETE COMPLETO
              </button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* 11. Depoimentos */}
      <AnimatedSection background="light" className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
              Lo que emprendedores de sublimación buscan en este pack
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Puedo publicar los mockups primero, recibir pedidos y producir solo lo que ya fue vendido.",
              "Me ayuda a ahorrar tiempo porque no necesito crear cada diseño desde cero.",
              "Los archivos editables facilitan mucho cuando el cliente pide nombre, número o frase personalizada.",
            ].map((quote, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-md flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50 rounded-bl-full -mr-3 -mt-3"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex gap-0.5 mb-4 text-yellow-500">
                      {[...Array(5)].map((_, star) => (
                        <span key={star} className="text-lg">★</span>
                      ))}
                    </div>
                    <p className="text-slate-700 font-bold text-sm sm:text-base leading-relaxed italic mb-4">
                      “{quote}”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 12. Garantia */}
      <Section background="white" className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="w-20 h-20 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-200">
            <ShieldCheck size={36} className="text-blue-700" />
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-slate-800 uppercase">Riesgo cero para ti</h3>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-2 font-extrabold">
            Tienes 7 días de garantía.
          </p>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-4 font-semibold">
            Si el material no es lo que esperabas o no tiene sentido para tu negocio, puedes solicitar la devolución dentro del plazo de garantía.
          </p>
          <p className="text-amber-600 font-extrabold text-base sm:text-lg mb-6">
            Sin complicaciones.
          </p>
          <div className="h-1 w-16 bg-slate-100 mx-auto rounded-full"></div>
        </div>
      </Section>

      {/* 13. FAQ */}
      <div className="bg-slate-50 py-16 border-t border-slate-200/60">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <div className="h-px flex-1 bg-slate-200"></div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 flex items-center gap-2">
              <HelpCircle size={20} className="text-slate-400" /> Preguntas Frecuentes
            </h2>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4">
            {[
              { q: "¿Qué voy a recibir en el pack?", a: "Vas a recibir diseños para tazas, archivos listos para imprimir, plantillas editables, mockups y bonos, según el paquete elegido." },
              { q: "¿Para qué tipos de tazas sirve el material?", a: "El material fue pensado para tazas de sublimación y puede ser ajustado de acuerdo con el tamaño utilizado en tu producción." },
              { q: "¿Cómo recibo el acceso?", a: "Después de la compra, recibes el acceso por correo y WhatsApp." },
              { q: "¿El material está actualizado para 2026?", a: "Sí. El pack fue preparado para la temporada del Mundial 2026." },
              { q: "¿Necesito saber usar Photoshop o CorelDRAW?", a: "No necesariamente. El Paquete Completo incluye opciones editables en Canva, que es más simple para principiantes." },
              { q: "¿Puedo imprimir directamente sin editar?", a: "Sí. Muchos diseños ya están listos para imprimir. También puedes personalizar nombres, frases y detalles si deseas." },
              { q: "¿Tengo soporte si lo necesito?", a: "Sí. Recibirás orientación de acceso y soporte conforme al paquete adquirido." },
              { q: "¿El pago es único?", a: "Sí. Es un pago único, sin mensualidades." },
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i + 1}`} className="border-slate-100">
                <AccordionTrigger className="text-left font-bold text-slate-700 hover:no-underline py-4 text-xs sm:text-sm">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-4 text-xs sm:text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* 14. Rodapé / Chamada Final */}
      <section className="text-center py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-white leading-tight">
            Aprovecha la temporada del Mundial para vender más tazas personalizadas
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto font-bold leading-relaxed">
            No pierdas tiempo creando diseños desde cero.<br />
            Asegura tu pack hoy y empieza a publicar, personalizar y vender con más facilidad.
          </p>
          <button
            onClick={scrollToPricing}
            className="w-full sm:w-auto px-10 md:px-14 py-5 text-base font-extrabold rounded-full bg-green-600 text-white hover:bg-green-500 shadow-xl border-0 transition-transform hover:scale-105 active:scale-95 shadow-green-600/30"
          >
            EMPIEZA A VENDER TAZAS DEL MUNDIAL
          </button>
          <p className="mt-8 text-xs sm:text-sm text-slate-400 font-bold tracking-wide">
            Compra segura • Acceso inmediato • Garantía de 7 días
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-900 py-10 text-center text-slate-500 text-xs font-semibold">
        <div className="container mx-auto px-4">
          <p className="mb-2">&copy; 2026 SUPER PACK MUNDIAL 2026 — TAZAS PERSONALIZADAS. Todos los derechos reservados.</p>
          <p className="text-[10px] text-slate-600 opacity-80 mb-4">(Imágenes ilustrativas para fines comerciales y publicitarios del pack comercial de diseños)</p>
          <p className="text-[10px] text-slate-600 max-w-3xl mx-auto leading-relaxed border-t border-slate-900 pt-4">
            Aviso: Este producto contiene diseños comerciales inspirados en fútbol, selecciones y temporada del Mundial 2026. No es un producto oficial de FIFA, selecciones, clubes o entidades deportivas. Las imágenes son ilustrativas y se utilizan para presentar el pack de diseños.
          </p>
        </div>
      </footer>

      {/* Notificação de Compra */}
      <AnimatePresence>
        {purchaseNotification && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: -20, scale: 0.95 }}
            className="fixed bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm md:bottom-4 md:left-4 z-[100] bg-white rounded-lg md:rounded-xl shadow-xl md:shadow-2xl border border-slate-100 p-2.5 md:p-4 flex items-center gap-2 md:gap-3 pointer-events-none"
          >
            <div className="bg-amber-100 p-1.5 md:p-2 rounded-full text-amber-700 shrink-0 border border-amber-200">
              <ShoppingBag className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] sm:text-xs md:text-sm font-extrabold text-slate-800 leading-tight">
                {purchaseNotification.name} acaba de comprar!
              </p>
              <p className="text-[9px] md:text-[11px] text-slate-500 font-bold">
                Plan: <span className="text-amber-600">{purchaseNotification.plan}</span>
              </p>
              <p className="text-[8px] md:text-[9px] text-slate-400 font-semibold pt-0.5">
                {purchaseNotification.city} • Hace unos segundos
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upsell Dialog */}
      <Dialog open={showUpsell} onOpenChange={setShowUpsell}>
        <DialogContent className="max-w-[90%] sm:max-w-[380px] border-amber-400 bg-white p-4 sm:p-5 rounded-2xl gap-2">
          <DialogHeader className="space-y-1">
            <div className="mx-auto w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-1.5 border border-amber-200">
              <Star size={18} fill="currentColor" stroke="none" />
            </div>
            <DialogTitle className="text-lg sm:text-xl font-extrabold text-slate-900 text-center tracking-tight">¡OFERTA ESPECIAL!</DialogTitle>
            <DialogDescription className="text-xs sm:text-sm text-slate-600 text-center pt-1 leading-normal">
              Por sólo <span className="font-extrabold text-slate-900">$1.00 USD adicional</span>, te llevas el paquete esencial y también recibes{" "}
              <span className="text-blue-900 font-extrabold text-xs sm:text-sm">TODOS los bonos premium</span> del Paquete Completo por sólo <span className="font-extrabold text-slate-900">$4.90 USD</span>!
            </DialogDescription>
          </DialogHeader>
          <div className="py-2 space-y-1.5">
            {[
              "+500 Mockups Humanizados del Mundial (Para vender antes de fabricar)",
              "Kit Especial Selecciones de Fútbol (Elementos 100% editables)",
              "Calculadora Automática de Costos o Tabla de Tiempo y Temperatura (Para no perder dinero)",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-amber-500/5 p-1.5 rounded-md border border-amber-500/20">
                <Star size={10} className="text-amber-500 shrink-0" fill="currentColor" stroke="none" />
                <span className="text-[10px] sm:text-xs font-bold text-slate-800 leading-tight">{item}</span>
              </div>
            ))}
          </div>
          <DialogFooter className="flex flex-col gap-1.5 sm:flex-col sm:space-x-0 mt-2">
            <button
              onClick={() => handlePurchase("Oferta Especial")}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-extrabold h-9 sm:h-10 text-[10px] sm:text-xs uppercase rounded-full tracking-wide shadow-sm"
            >
              QUIERO ESTA OFERTA CON BONOS
            </button>
            <button
              onClick={confirmEssencial}
              className="w-full text-[10px] sm:text-xs text-slate-400 font-bold hover:text-slate-600 py-1 sm:py-1.5 uppercase tracking-wide"
            >
              QUIERO LA OFERTA DE $3.90 USD
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
