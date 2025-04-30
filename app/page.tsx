"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code,
  Laptop,
  Paintbrush,
  BarChart,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
  ChevronUp,
} from "lucide-react"

export default function Home() {
  const [expandedArticles, setExpandedArticles] = useState<number[]>([])

  const toggleArticle = (id: number) => {
    setExpandedArticles((prev) => (prev.includes(id) ? prev.filter((articleId) => articleId !== id) : [...prev, id]))
  }

  const isArticleExpanded = (id: number) => expandedArticles.includes(id)

  // Datos de ejemplo para los blogs
  const blogArticles = [
    {
      id: 1,
      title: "Tendencias de diseño web para 2025",
      date: "12 de marzo, 2025",
      summary: "Descubre las últimas tendencias en diseño web que dominarán el mercado este año.",
      content: `
        <h4 class="text-xl font-semibold mb-4 text-neon-yellow">Tendencias de diseño web para 2025</h4>
        
        <p class="mb-4">El mundo del diseño web está en constante evolución, y mantenerse al día con las últimas tendencias es crucial para cualquier negocio que quiera destacar en línea. En 2025, estamos viendo una convergencia de estética minimalista con funcionalidades avanzadas.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">1. Diseño Minimalista Avanzado</h5>
        <p class="mb-4">El minimalismo sigue siendo una tendencia dominante, pero ahora con un enfoque en microinteracciones sutiles que mejoran la experiencia del usuario sin sobrecargar la interfaz.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">2. Modo Oscuro como Estándar</h5>
        <p class="mb-4">El modo oscuro ha pasado de ser una característica opcional a un estándar de diseño. Los sitios web modernos ahora se diseñan con una mentalidad "dark-first", considerando cómo se verán los elementos en fondos oscuros desde el principio.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">3. Neomorfismo Evolucionado</h5>
        <p class="mb-4">El neomorfismo ha evolucionado para combinar lo mejor del skeuomorfismo y el diseño plano, creando interfaces que parecen tangibles pero mantienen la limpieza visual.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">4. Tipografía Experimental</h5>
        <p class="mb-4">Las fuentes personalizadas y experimentales están ganando popularidad, con diseñadores que utilizan tipografías únicas como elemento central del diseño.</p>
        
        <p class="mt-6 text-muted-foreground">Si estás buscando actualizar tu presencia web con estas tendencias modernas, nuestro equipo de diseño está listo para ayudarte a implementarlas de manera efectiva y atractiva.</p>
      `,
    },
    {
      id: 2,
      title: "Cómo el AI está transformando el desarrollo web",
      date: "5 de febrero, 2025",
      summary:
        "Explora cómo la inteligencia artificial está revolucionando la forma en que se crean y mantienen los sitios web.",
      content: `
        <h4 class="text-xl font-semibold mb-4 text-neon-yellow">Cómo el AI está transformando el desarrollo web</h4>
        
        <p class="mb-4">La inteligencia artificial está revolucionando todos los aspectos del desarrollo web, desde el diseño hasta la programación y el mantenimiento. Esta tecnología está permitiendo crear experiencias web más personalizadas y eficientes.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">1. Diseño Generativo</h5>
        <p class="mb-4">Las herramientas de AI ahora pueden generar diseños completos basados en simples descripciones textuales, acelerando el proceso creativo y ofreciendo nuevas posibilidades estéticas.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">2. Desarrollo Asistido por AI</h5>
        <p class="mb-4">Los programadores ahora utilizan asistentes de código impulsados por AI que pueden completar funciones, sugerir optimizaciones y detectar errores en tiempo real.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">3. Personalización Dinámica</h5>
        <p class="mb-4">Los sitios web ahora pueden adaptar su contenido, diseño e incluso funcionalidad en tiempo real basándose en el comportamiento del usuario, gracias a algoritmos de aprendizaje automático.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">4. Chatbots Avanzados</h5>
        <p class="mb-4">Los asistentes virtuales impulsados por AI han evolucionado hasta el punto de poder mantener conversaciones naturales y resolver problemas complejos sin intervención humana.</p>
        
        <p class="mt-6 text-muted-foreground">En Soluciones Digitales Cusco, estamos integrando estas tecnologías de AI en nuestros procesos de desarrollo para ofrecer soluciones web más innovadoras y eficientes para nuestros clientes.</p>
      `,
    },
    {
      id: 3,
      title: "Estrategias de marketing digital para negocios locales",
      date: "18 de enero, 2025",
      summary:
        "Aprende cómo los negocios locales pueden aprovechar el marketing digital para aumentar su visibilidad y ventas.",
      content: `
        <h4 class="text-xl font-semibold mb-4 text-neon-yellow">Estrategias de marketing digital para negocios locales</h4>
        
        <p class="mb-4">Los negocios locales tienen oportunidades únicas en el ámbito digital para conectar con su comunidad y expandir su alcance. Con las estrategias adecuadas, incluso los pequeños negocios pueden competir efectivamente en el mercado digital.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">1. SEO Local Optimizado</h5>
        <p class="mb-4">Optimizar tu presencia en búsquedas locales es fundamental. Esto incluye configurar correctamente Google My Business, obtener reseñas positivas y optimizar tu sitio web para términos de búsqueda locales.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">2. Marketing en Redes Sociales Geolocalizado</h5>
        <p class="mb-4">Las campañas en redes sociales pueden segmentarse por ubicación, permitiéndote llegar específicamente a clientes potenciales en tu área de servicio con mensajes relevantes.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">3. Email Marketing Personalizado</h5>
        <p class="mb-4">Construir una lista de correo electrónico de clientes locales te permite mantener una comunicación directa y personalizada, informándoles sobre ofertas especiales y eventos.</p>
        
        <h5 class="text-lg font-medium mb-2 text-neon-orange">4. Contenido Relevante para la Comunidad</h5>
        <p class="mb-4">Crear contenido que aborde temas, eventos y noticias locales ayuda a establecer tu negocio como parte integral de la comunidad y mejora tu relevancia en búsquedas locales.</p>
        
        <p class="mt-6 text-muted-foreground">En Soluciones Digitales Cusco, ofrecemos servicios de marketing digital especializados para negocios locales en Cusco, ayudándoles a conectar con su comunidad y crecer en el entorno digital.</p>
      `,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
        <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="text-2xl font-bold text-white transition-all duration-500 
                group-hover:text-transparent group-hover:bg-clip-text 
                group-hover:bg-gradient-to-r group-hover:from-neon-blue group-hover:via-neon-purple group-hover:to-neon-orange 
                group-hover:neon-glow-multicolor group-hover:animate-pulse-neon-intense">
                Soluciones Digitales Cusco
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="nav-link nav-link-inicio text-sm font-medium">
              Inicio
            </Link>
            <Link href="#servicios" className="nav-link nav-link-servicios text-sm font-medium">
              Servicios
            </Link>
            <Link href="/portafolio" className="nav-link nav-link-portafolio text-sm font-medium">
              Portafolio
            </Link>
            <Link href="/contacto" className="nav-link nav-link-contacto text-sm font-medium">
              Contacto
            </Link>
            <Link href="/blog" className="nav-link nav-link-blog text-sm font-medium">
              Blog
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:flex glow-effect bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-500"
            >
              <Link href="/contacto">Solicitar Presupuesto</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden border-white/20 hover:border-white/40 transition-colors"
            >
              <span className="sr-only">Toggle Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 grid-bg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-neon-purple/10 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 animate-float">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  <span className="text-neon-blue">Soluciones Digitales</span> para tu Negocio en Cusco
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Diseño web, desarrollo de software, diseño gráfico y marketing digital para impulsar tu presencia
                  online.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="glow-effect bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-500"
                  >
                    <Link href="/contacto">Solicitar Presupuesto</Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="border-white/20 hover:border-white/40 transition-colors"
                  >
                    <Link href="/servicios">Nuestros Servicios</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl blur-lg opacity-75 animate-pulse-neon"></div>
                <video 
                  src="/images/Homepage-02-02_Project Dashboard_ver2_1.webm"
                  width={550}
                  height={550}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-xl object-cover z-10 animate-scale-slow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-neon-purple/10 to-transparent z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  <span className="text-neon-purple">Nuestros Servicios</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones digitales completas para ayudar a tu negocio a crecer en el mundo digital.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Tabs defaultValue="web" className="w-full">
                <TabsList className="grid w-full grid-cols-4 bg-black/50 border border-white/10">
                  <TabsTrigger
                    value="web"
                    className="data-[state=active]:text-neon-blue data-[state=active]:text-shadow-neon"
                  >
                    Web
                  </TabsTrigger>
                  <TabsTrigger
                    value="software"
                    className="data-[state=active]:text-neon-purple data-[state=active]:text-shadow-neon"
                  >
                    Software
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:text-neon-pink data-[state=active]:text-shadow-neon"
                  >
                    Diseño
                  </TabsTrigger>
                  <TabsTrigger
                    value="marketing"
                    className="data-[state=active]:text-neon-green data-[state=active]:text-shadow-neon"
                  >
                    Marketing
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="web" className="space-y-4 mt-4">
                  <div className="flex items-center gap-4">
                    <Laptop className="h-10 w-10 text-neon-blue animate-pulse-neon" />
                    <div>
                      <h3 className="text-xl font-bold text-neon-blue">Diseño Web</h3>
                      <p className="text-muted-foreground">Sitios web modernos y responsivos</p>
                    </div>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
                      <span>Diseño de páginas web</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
                      <span>Tiendas virtuales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
                      <span>Catálogos virtuales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-blue" />
                      <span>Sitios web corporativos</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-4 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:text-shadow-neon group"
                    asChild
                  >
                    <Link href="/servicios/diseno-web">
                      Ver más{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </TabsContent>
                <TabsContent value="software" className="space-y-4 mt-4">
                  <div className="flex items-center gap-4">
                    <Code className="h-10 w-10 text-neon-purple animate-pulse-neon" />
                    <div>
                      <h3 className="text-xl font-bold text-neon-purple">Desarrollo de Software</h3>
                      <p className="text-muted-foreground">Soluciones a medida para tu negocio</p>
                    </div>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span>Desarrollo de software a medida</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span>Aplicaciones web</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span>Aplicaciones móviles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-purple" />
                      <span>Soluciones empresariales</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-4 border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 hover:text-shadow-neon group"
                    asChild
                  >
                    <Link href="/servicios/desarrollo-software">
                      Ver más{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </TabsContent>
                <TabsContent value="design" className="space-y-4 mt-4">
                  <div className="flex items-center gap-4">
                    <Paintbrush className="h-10 w-10 text-neon-pink animate-pulse-neon" />
                    <div>
                      <h3 className="text-xl font-bold text-neon-pink">Diseño Gráfico</h3>
                      <p className="text-muted-foreground">Identidad visual para tu marca</p>
                    </div>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-pink" />
                      <span>Diseño de logotipos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-pink" />
                      <span>Identidad corporativa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-pink" />
                      <span>Diseño para redes sociales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-pink" />
                      <span>Material publicitario</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-4 border-neon-pink/50 text-neon-pink hover:bg-neon-pink/10 hover:text-shadow-neon group"
                    asChild
                  >
                    <Link href="/servicios/diseno-grafico">
                      Ver más{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </TabsContent>
                <TabsContent value="marketing" className="space-y-4 mt-4">
                  <div className="flex items-center gap-4">
                    <BarChart className="h-10 w-10 text-neon-green animate-pulse-neon" />
                    <div>
                      <h3 className="text-xl font-bold text-neon-green">Marketing Digital</h3>
                      <p className="text-muted-foreground">Estrategias para aumentar tu presencia online</p>
                    </div>
                  </div>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-green" />
                      <span>Publicidad en redes sociales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-green" />
                      <span>Campañas en Google Ads</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-green" />
                      <span>Community Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-neon-green" />
                      <span>Email Marketing</span>
                    </li>
                  </ul>
                  <Button
                    variant="outline"
                    className="mt-4 border-neon-green/50 text-neon-green hover:bg-neon-green/10 hover:text-shadow-neon group"
                    asChild
                  >
                    <Link href="/servicios/marketing-digital">
                      Ver más{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </TabsContent>
              </Tabs>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-purple to-neon-blue rounded-xl blur-lg opacity-75 animate-pulse-neon"></div>
                <Image
                  src="/images/sam.jpg"
                  width={550}
                  height={550}
                  alt="Servicios Digitales"
                  className="relative rounded-xl object-cover z-10 animate-scale-slow"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-neon-blue/10 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  <span className="text-neon-purple">Nuestro Portafolio</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce algunos de nuestros proyectos más destacados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="futuristic-card group">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src={`/images/sem.jpg`}
                      width={400}
                      height={300}
                      alt={`Proyecto ${item}`}
                      className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg group-hover:text-neon-purple group-hover:text-shadow-neon transition-all duration-300">
                      Proyecto {item}
                    </CardTitle>
                    <CardDescription>Diseño web y desarrollo</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-white/20 hover:border-neon-purple/50 hover:text-neon-purple group"
                    >
                      <Link href={`/portafolio/proyecto-${item}`}>
                        Ver detalles{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                className="glow-effect bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-purple transition-all duration-500"
              >
                <Link href="/portafolio">Ver todos los proyectos</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 to-transparent z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  <span className="text-neon-green">¿Listo para impulsar</span> tu negocio?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a crecer en el mundo digital.
                </p>
                <Button
                  size="lg"
                  asChild
                  className="glow-effect bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green transition-all duration-500 text-black font-bold"
                >
                  <Link href="/contacto">Solicitar Presupuesto</Link>
                </Button>
              </div>
              <div className="space-y-4 bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-neon-green">Contáctanos</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input
                        placeholder="Nombre"
                        className="bg-black/50 border-white/10 focus:border-neon-green/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        placeholder="Email"
                        type="email"
                        className="bg-black/50 border-white/10 focus:border-neon-green/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Asunto"
                      className="bg-black/50 border-white/10 focus:border-neon-green/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Mensaje"
                      className="min-h-[120px] bg-black/50 border-white/10 focus:border-neon-green/50 transition-colors"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-neon-green to-neon-blue hover:from-neon-blue hover:to-neon-green transition-all duration-500 text-black font-bold"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden grid-bg">
          <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-neon-yellow/10 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                  <span className="text-neon-yellow">Nuestro Blog</span>
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Artículos y noticias sobre tendencias digitales, marketing y tecnología.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
              {blogArticles.map((article) => (
                <Card key={article.id} className="futuristic-card group">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow/20 to-neon-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
                      src="/images/xtiles.jpg"
                      width={400}
                      height={200}
                      alt={`Artículo ${article.id}`}
                      className="aspect-video object-cover w-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg group-hover:text-neon-yellow group-hover:text-shadow-neon transition-all duration-300">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{article.summary}</p>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          isArticleExpanded(article.id) ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="border-t border-white/10 pt-4 mt-2">
                          <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleArticle(article.id)}
                        className={`border-white/20 hover:border-neon-yellow/50 hover:text-neon-yellow group ${
                          isArticleExpanded(article.id) ? "bg-black/30" : ""
                        }`}
                      >
                        {isArticleExpanded(article.id) ? (
                          <>
                            Cerrar <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Leer más{" "}
                            <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                          </>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                asChild
                className="glow-effect bg-gradient-to-r from-neon-yellow to-neon-orange hover:from-neon-orange hover:to-neon-yellow transition-all duration-500"
              >
                <Link href="/blog">Ver todos los artículos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neon-blue">Soluciones Digitales Cusco</h3>
              <p className="text-sm text-muted-foreground">
                Ofrecemos soluciones digitales completas para ayudar a tu negocio a crecer en el mundo digital.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-neon-pink hover:text-shadow-neon transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neon-purple">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/servicios/diseno-web"
                    className="text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
                  >
                    Diseño Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/desarrollo-software"
                    className="text-muted-foreground hover:text-neon-purple hover:text-shadow-neon transition-colors"
                  >
                    Desarrollo de Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/diseno-grafico"
                    className="text-muted-foreground hover:text-neon-pink hover:text-shadow-neon transition-colors"
                  >
                    Diseño Gráfico
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios/marketing-digital"
                    className="text-muted-foreground hover:text-neon-green hover:text-shadow-neon transition-colors"
                  >
                    Marketing Digital
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neon-pink">Enlaces</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-muted-foreground hover:text-neon-orange hover:text-shadow-neon transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portafolio"
                    className="text-muted-foreground hover:text-neon-purple hover:text-shadow-neon transition-colors"
                  >
                    Portafolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/acerca"
                    className="text-muted-foreground hover:text-neon-pink hover:text-shadow-neon transition-colors"
                  >
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-neon-yellow hover:text-shadow-neon transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-muted-foreground hover:text-neon-green hover:text-shadow-neon transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neon-green">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-neon-green" />
                  <span className="text-muted-foreground">Av. El Sol 123, Cusco, Perú</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-neon-green" />
                  <span className="text-muted-foreground">+51 984 123 456</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-neon-green" />
                  <span className="text-muted-foreground">info@solucionesdigitalescusco.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center border-t border-white/10 pt-6">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Soluciones Digitales Cusco. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link
                href="/terminos"
                className="text-xs text-muted-foreground hover:text-neon-blue hover:text-shadow-neon transition-colors"
              >
                Términos y Condiciones
              </Link>
              <Link
                href="/privacidad"
                className="text-xs text-muted-foreground hover:text-neon-purple hover:text-shadow-neon transition-colors"
              >
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

