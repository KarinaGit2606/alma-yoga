import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-yoga.jpg";
import teacherImg from "@/assets/teacher.jpg";
import workshopImg from "@/assets/workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alma Yoga Studio — Yoga consciente" },
      { name: "description", content: "Clases, talleres y retiros de yoga en un espacio sereno y minimalista." },
      { property: "og:title", content: "Alma Yoga Studio" },
      { property: "og:description", content: "Yoga consciente en un espacio sereno y minimalista." },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#clases", label: "Clases" },
  { href: "#profesora", label: "Profesora" },
  { href: "#talleres", label: "Talleres" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#inscripcion", label: "Inscripción" },
];

const schedule = [
  { day: "Lunes", classes: [{ time: "07:30", name: "Hatha suave" }, { time: "19:00", name: "Vinyasa flow" }] },
  { day: "Martes", classes: [{ time: "09:00", name: "Yin restaurativo" }, { time: "18:30", name: "Ashtanga" }] },
  { day: "Miércoles", classes: [{ time: "07:30", name: "Meditación + Pranayama" }, { time: "19:00", name: "Vinyasa flow" }] },
  { day: "Jueves", classes: [{ time: "09:00", name: "Hatha suave" }, { time: "18:30", name: "Yin restaurativo" }] },
  { day: "Viernes", classes: [{ time: "08:00", name: "Flow matinal" }, { time: "19:00", name: "Yoga del cierre" }] },
  { day: "Sábado", classes: [{ time: "10:00", name: "Open class" }] },
];

const workshops = [
  { date: "15 Jun", title: "Taller de Respiración Consciente", desc: "Una mañana dedicada al pranayama y la quietud." },
  { date: "06 Jul", title: "Retiro de Fin de Semana — Sierra", desc: "Dos días de yoga, silencio y naturaleza." },
  { date: "20 Jul", title: "Iniciación al Yin Yoga", desc: "Práctica lenta para soltar tensiones profundas." },
];

const testimonials = [
  { quote: "Entrar a Alma es respirar distinto. Cada clase me devuelve a mí misma.", author: "Laura M." },
  { quote: "Un espacio que cuida cada detalle. La práctica es honesta y profunda.", author: "Daniel R." },
  { quote: "Encontré una comunidad cálida y una guía que escucha de verdad.", author: "Carmen S." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Classes />
      <Teacher />
      <Workshops />
      <Testimonials />
      <Signup />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <a href="#" className="font-serif text-xl tracking-wide text-foreground">
          Alma <span className="italic text-primary">yoga</span>
        </a>
        <ul className="hidden gap-8 text-sm text-muted-foreground md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#inscripcion"
          className="hidden rounded-full border border-foreground/20 px-5 py-2 text-sm tracking-wide text-foreground transition hover:bg-foreground hover:text-background md:inline-block"
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Mujer practicando yoga en un estudio sereno"
        width={1600}
        height={1100}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background/80" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Estudio de yoga · desde 2016
        </p>
        <h1 className="max-w-3xl text-5xl leading-[1.05] text-foreground md:text-7xl lg:text-8xl">
          Respira. <em className="italic text-primary">Habita</em> tu cuerpo.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Un espacio sereno para encontrarte con la práctica del yoga, el silencio
          y una comunidad que respira contigo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#clases"
            className="rounded-full bg-foreground px-7 py-3 text-sm tracking-wide text-background transition hover:bg-primary"
          >
            Ver horarios
          </a>
          <a
            href="#profesora"
            className="rounded-full border border-foreground/30 px-7 py-3 text-sm tracking-wide text-foreground transition hover:border-foreground"
          >
            Conocer el estudio
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="mb-16 max-w-3xl">
      <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="text-4xl leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function Classes() {
  return (
    <section id="clases" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Clases & horarios"
          title={<>Una práctica para cada momento <em className="italic text-primary">del día.</em></>}
        />
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {schedule.map((d) => (
            <div key={d.day} className="bg-background p-8">
              <h3 className="mb-6 text-2xl">{d.day}</h3>
              <ul className="space-y-4">
                {d.classes.map((c) => (
                  <li key={c.time} className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-3">
                    <span className="text-sm text-muted-foreground">{c.time}</span>
                    <span className="text-right text-foreground">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-muted-foreground">
          Clases en grupos reducidos. Niveles inicial, intermedio y abierto.
        </p>
      </div>
    </section>
  );
}

function Teacher() {
  return (
    <section id="profesora" className="bg-secondary px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <div className="order-2 md:order-1">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">Sobre la profesora</p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Elena <em className="italic text-primary">Soler</em>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/80">
            <p>
              Formada en Hatha y Vinyasa en India y Lisboa, Elena lleva más de
              quince años acompañando a personas en su práctica. Su enseñanza
              une la precisión del alineamiento con la suavidad de la respiración.
            </p>
            <p>
              Cada clase es una invitación a parar, escuchar y volver al cuerpo
              con amabilidad.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Experiencia</dt><dd className="mt-2 font-serif text-2xl">15+ años</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Formación</dt><dd className="mt-2 font-serif text-2xl">RYT-500</dd></div>
            <div><dt className="text-xs uppercase tracking-wider text-muted-foreground">Alumnas</dt><dd className="mt-2 font-serif text-2xl">+800</dd></div>
          </dl>
        </div>
        <div className="order-1 md:order-2">
          <img
            src={teacherImg}
            alt="Retrato de Elena Soler, profesora de yoga"
            width={900}
            height={1100}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Workshops() {
  return (
    <section id="talleres" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <SectionTitle
            eyebrow="Talleres & retiros"
            title={<>Espacios para <em className="italic text-primary">profundizar.</em></>}
          />
          <a href="#inscripcion" className="text-sm tracking-wide text-primary underline-offset-4 hover:underline">
            Reservar plaza →
          </a>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {workshops.map((w, i) => (
            <article key={w.title} className="group">
              {i === 0 && (
                <img
                  src={workshopImg}
                  alt="Materiales para taller de yoga"
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="mb-6 aspect-[4/3] w-full rounded-sm object-cover"
                />
              )}
              {i !== 0 && (
                <div className="mb-6 aspect-[4/3] w-full rounded-sm bg-accent/40" />
              )}
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{w.date}</p>
              <h3 className="mt-3 text-2xl">{w.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonios" className="bg-card px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Testimonios" title={<>Lo que dicen nuestras <em className="italic text-primary">alumnas.</em></>} />
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="border-t border-border pt-8">
              <blockquote className="font-serif text-2xl leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Signup() {
  const [sent, setSent] = useState(false);
  return (
    <section id="inscripcion" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-primary">Inscripción</p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Empieza tu <em className="italic text-primary">camino</em> con nosotras.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Reserva tu primera clase gratuita o pídenos información sobre
            bonos, talleres y próximos retiros.
          </p>
          <div className="mt-10 space-y-2 text-sm text-muted-foreground">
            <p>Calle del Olivo 14 · Madrid</p>
            <p>hola@almayoga.studio</p>
            <p>+34 612 345 678</p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="space-y-6"
        >
          <Field label="Nombre" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Teléfono" name="phone" type="tel" />
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Me interesa
            </label>
            <select className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary">
              <option>Clase de prueba</option>
              <option>Bono mensual</option>
              <option>Taller</option>
              <option>Retiro</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Mensaje
            </label>
            <textarea rows={3} className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary" />
          </div>
          <button
            type="submit"
            className="rounded-full bg-foreground px-8 py-3 text-sm tracking-wide text-background transition hover:bg-primary"
          >
            {sent ? "Gracias, te escribimos pronto" : "Enviar inscripción"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="w-full border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="font-serif text-lg">
          Alma <span className="italic text-primary">yoga studio</span>
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} · Hecho con calma
        </p>
      </div>
    </footer>
  );
}
