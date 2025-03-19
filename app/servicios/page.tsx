import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Laptop, Paintbrush, BarChart, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">Soluciones Digitales Cusco</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium text-primary">
              Servicios
            </Link>
            <Link href="/portafolio" className="text-sm font-medium hover:text-primary">
              Portafolio
            </Link>
            <Link href="/acerca" className="text-sm font-medium hover:text-primary">
              Acerca de
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/contacto">Solicitar Presupuesto</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nuestros Servicios</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones digitales completas para ayudar a tu negocio a crecer en el mundo digital.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="web" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="web">Diseño Web</TabsTrigger>
                <TabsTrigger value="software">Desarrollo de Software</TabsTrigger>
                <TabsTrigger value="design">Diseño Gráfico</TabsTrigger>
                <TabsTrigger value="marketing">Marketing Digital</TabsTrigger>
              </TabsList>

              <TabsContent value="web" className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2">
                      <Laptop className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Diseño Web</h2>
                    </div>
                    <p className="text-muted-foreground">
                      Creamos sitios web modernos, responsivos y optimizados para buscadores que ayudan a tu negocio a
                      destacar en línea.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Diseño de páginas web corporativas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Tiendas virtuales (e-commerce)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Catálogos virtuales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Landing pages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Blogs y portales de contenido</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Optimización para dispositivos móviles</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Diseño+Web"
                    width={600}
                    height={400}
                    alt="Diseño Web"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Diseño de Páginas Web</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Creamos sitios web a medida que reflejan la identidad de tu marca y ofrecen una experiencia de
                        usuario excepcional.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Tiendas Virtuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Desarrollamos tiendas online completas con pasarelas de pago, gestión de inventario y
                        experiencia de compra optimizada.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Catálogos Virtuales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Mostramos tus productos o servicios de forma atractiva y organizada, facilitando la navegación y
                        búsqueda.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="software" className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2">
                      <Code className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Desarrollo de Software</h2>
                    </div>
                    <p className="text-muted-foreground">
                      Desarrollamos soluciones de software a medida que automatizan procesos y mejoran la eficiencia de
                      tu negocio.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Desarrollo de software a medida</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Aplicaciones web</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Aplicaciones móviles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Sistemas de gestión empresarial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Integración de APIs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Mantenimiento y soporte técnico</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Desarrollo+de+Software"
                    width={600}
                    height={400}
                    alt="Desarrollo de Software"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Software a Medida</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades
                        específicas de tu negocio.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Aplicaciones Web</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías y frameworks.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Aplicaciones Móviles</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Desarrollamos apps nativas e híbridas para iOS y Android que ofrecen una experiencia de usuario
                        excepcional.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="design" className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2">
                      <Paintbrush className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Diseño Gráfico</h2>
                    </div>
                    <p className="text-muted-foreground">
                      Creamos diseños atractivos y profesionales que comunican la esencia de tu marca y captan la
                      atención de tu audiencia.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Diseño de logotipos</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Identidad corporativa</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Diseño para redes sociales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Material publicitario</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Diseño editorial</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Ilustraciones</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Diseño+Gráfico"
                    width={600}
                    height={400}
                    alt="Diseño Gráfico"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Diseño de Logotipos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Creamos logotipos únicos y memorables que representan la identidad y valores de tu marca.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Identidad Corporativa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Desarrollamos la identidad visual completa de tu marca, incluyendo logotipo, colores, tipografía
                        y aplicaciones.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Diseño para Redes Sociales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Creamos contenido visual atractivo y optimizado para diferentes plataformas de redes sociales.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-8">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2">
                      <BarChart className="h-8 w-8 text-primary" />
                      <h2 className="text-3xl font-bold">Marketing Digital</h2>
                    </div>
                    <p className="text-muted-foreground">
                      Implementamos estrategias de marketing digital efectivas que aumentan la visibilidad de tu marca y
                      generan más clientes.
                    </p>
                    <ul className="grid gap-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Publicidad en redes sociales</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Campañas en Google Ads</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Community Management</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Email Marketing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>SEO (Optimización para buscadores)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Análisis y reportes de resultados</span>
                      </li>
                    </ul>
                    <Button asChild>
                      <Link href="/contacto">Solicitar Presupuesto</Link>
                    </Button>
                  </div>
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Marketing+Digital"
                    width={600}
                    height={400}
                    alt="Marketing Digital"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Publicidad en Redes Sociales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Creamos y gestionamos campañas publicitarias efectivas en Facebook, Instagram, TikTok y
                        LinkedIn.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Google Ads</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Implementamos campañas de búsqueda, display y remarketing para aumentar el tráfico y las
                        conversiones.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Community Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Gestionamos tus redes sociales, creando contenido relevante y manteniendo una comunicación
                        activa con tu audiencia.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  ¿Listo para impulsar tu negocio?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Contáctanos hoy mismo y descubre cómo podemos ayudarte a crecer en el mundo digital.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contacto">Solicitar Presupuesto</Link>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600&text=Contáctanos"
                width={600}
                height={400}
                alt="Contáctanos"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Soluciones Digitales Cusco. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="/terminos" className="text-xs text-muted-foreground hover:text-primary">
                Términos y Condiciones
              </Link>
              <Link href="/privacidad" className="text-xs text-muted-foreground hover:text-primary">
                Política de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

