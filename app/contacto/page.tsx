import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/servicios" className="text-sm font-medium hover:text-primary">
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
            <Link href="/contacto" className="text-sm font-medium text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contáctanos</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Información de Contacto</h2>
                  <p className="text-muted-foreground">
                    Puedes contactarnos a través de los siguientes medios o utilizando el formulario de contacto.
                  </p>
                </div>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">Dirección</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription>Av. El Sol 123, Cusco, Perú</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">Teléfono</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription>+51 984 123 456</CardDescription>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">Email</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription>info@solucionesdigitalescusco.com</CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Horario de Atención</h2>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 AM - 6:00 PM
                    <br />
                    Sábados: 9:00 AM - 1:00 PM
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Envíanos un Mensaje</h2>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <Input id="nombre" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <Input id="email" placeholder="Tu email" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="telefono"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <Input id="telefono" placeholder="Tu teléfono" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="asunto"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <Input id="asunto" placeholder="Asunto del mensaje" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <Textarea id="mensaje" placeholder="Tu mensaje" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
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

