import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CheckCircle2,
  Clock3,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
  Wrench,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexGenZ | Customer Support" },
      {
        name: "description",
        content: "Reach the NexGenZ customer support team quickly and securely on WhatsApp.",
      },
      { property: "og:title", content: "NexGenZ Customer Support" },
      {
        property: "og:description",
        content: "Friendly, private customer support when you need it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const whatsappLink =
  "https://wa.me/18392310239?text=Hello%20NexGenZ%2C%20I%20need%20help%20with%20my%20account.";

function Brand() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="NexGenZ home">
      <span className="relative grid size-9 place-items-center" aria-hidden="true">
        <span className="absolute inset-1 rotate-45 rounded-sm border-2 border-primary transition-transform duration-300 group-hover:rotate-[135deg]" />
        <span className="size-2 rounded-full bg-primary shadow-glow" />
      </span>
      <span>
        <span className="block font-display text-base font-bold leading-none text-foreground">NexGenZ</span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">Support</span>
      </span>
    </a>
  );
}

function WhatsappIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const supportTags = [
  { icon: UserRound, label: "Account support", side: "left", top: "top-[72px]" },
  { icon: Headphones, label: "Service queries", side: "left", top: "top-[188px]" },
  { icon: Wrench, label: "Technical assistance", side: "left", top: "top-[304px]" },
  { icon: BadgeCheck, label: "Verification help", side: "right", top: "top-[72px]" },
  { icon: ShieldCheck, label: "Privacy & security", side: "right", top: "top-[188px]" },
  { icon: MessageCircle, label: "General enquiries", side: "right", top: "top-[304px]" },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[445px] w-full max-w-[620px]" aria-label="NexGenZ support conversation preview">
      {supportTags.map((tag) => {
        const Icon = tag.icon;
        return (
          <span
            key={tag.label}
            aria-hidden="true"
            className={`absolute ${tag.side === "left" ? "left-0" : "right-0"} ${tag.top} hidden animate-rise-delayed items-center gap-2 rounded-lg border border-border bg-card/80 px-2.5 py-2.5 text-[10px] font-semibold text-foreground shadow-panel backdrop-blur-sm lg:flex`}
          >
            <span className="grid size-6 shrink-0 place-items-center rounded-md border border-primary/50 bg-primary/10 text-primary">
              <Icon className="size-3" />
            </span>
            {tag.label}
          </span>
        );
      })}

      <div className="phone-shell absolute left-1/2 top-0 h-[440px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.4rem] border-[5px] border-device bg-device shadow-phone">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-device" />
        <div className="flex items-center justify-between px-5 pt-3 text-[8px] font-bold text-foreground">
          <span>10:24</span><span className="tracking-wider">••• ▰</span>
        </div>
        <div className="mx-4 mt-16 rounded-lg bg-message p-3 shadow-panel">
          <p className="text-xs leading-relaxed text-foreground">Hello! <span aria-hidden="true">👋</span><br />How can we help you today?</p>
          <p className="mt-2 text-right text-[8px] text-muted-foreground">10:24 AM ✓✓</p>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-[9px] text-muted-foreground">
          <span className="flex-1">Write a message...</span>
          <span className="grid size-6 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground"><ArrowRight className="size-3" /></span>
        </div>
      </div>
    </div>
  );
}

const steps = [
  { icon: WhatsappIcon, title: "Click the button", text: "Open a direct WhatsApp chat with our support team." },
  { icon: MessageCircle, title: "Send your message", text: "Tell us what you need, with as much detail as possible." },
  { icon: Bolt, title: "Get a response", text: "A support specialist will reply as soon as possible." },
];

const benefits = [
  { icon: ShieldCheck, title: "Secure & private", text: "Your conversations stay confidential." },
  { icon: UsersRound, title: "A real support team", text: "Helpful answers from knowledgeable people." },
  { icon: Clock3, title: "Quick response", text: "Typically within a few minutes." },
];

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Brand />
          <nav className="hidden items-center gap-8 text-xs font-semibold text-muted-foreground md:flex" aria-label="Main navigation">
            <a href="#process" className="transition-colors hover:text-primary">How it works</a>
            <a href="#trust" className="transition-colors hover:text-primary">Why us</a>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-primary px-4 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:flex">
            Start a chat <ArrowRight className="size-3.5" />
          </a>
        </div>
      </header>

      <section id="support" className="relative border-b border-border pt-28">
        <div className="hero-haze pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 px-5 pb-14 sm:px-8 lg:grid-cols-[1.03fr_.97fr] lg:gap-4 lg:pb-0">
          <div className="max-w-2xl animate-rise">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="size-3" /> We’re here to help
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
              Customer care,<br /><span className="text-primary">without the wait.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              Questions about your account or our services? Our friendly team is ready to help you on WhatsApp with fast, clear answers.
            </p>

            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-8 flex w-full max-w-md items-center gap-4 rounded-lg bg-whatsapp px-5 py-4 text-whatsapp-foreground shadow-action transition-transform hover:-translate-y-0.5">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-whatsapp-foreground/70">
                <WhatsappIcon className="size-7" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-bold">Chat with us on WhatsApp</span>
                <span className="mt-0.5 block text-xs font-semibold opacity-80">+1 839 231 0239</span>
              </span>
              <ArrowRight className="size-5 shrink-0" />
            </a>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="size-3.5 text-primary" /> Official support channel</span>
              <span className="flex items-center gap-1.5"><Clock3 className="size-3.5 text-primary" /> Typically replies in minutes</span>
            </div>
          </div>
          <div className="animate-rise-delayed lg:self-end"><PhoneMockup /></div>
        </div>
      </section>

      <section id="process" className="border-b border-border py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Simple & fast</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">How to get <span className="text-primary">support</span></h2>
            <p className="mt-3 text-sm text-muted-foreground">Connect with our team in three easy steps.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article key={step.title} className="group relative rounded-lg border border-border bg-card/50 px-7 py-9 text-center transition-colors hover:border-primary/60">
                  <span className="absolute right-4 top-3 font-display text-5xl font-bold text-border/70">0{index + 1}</span>
                  <span className="mx-auto grid size-14 place-items-center rounded-full border border-primary/60 bg-primary/10 text-primary shadow-glow-sm transition-transform group-hover:-translate-y-1">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-base font-bold">{step.title}</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-muted-foreground">{step.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="trust" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_1.9fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Your success matters</p>
            <h2 className="mt-3 max-w-sm font-display text-3xl font-bold leading-tight">Support you can count on.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">We build lasting relationships with our customers. Every conversation is handled with care, clarity, and respect.</p>
          </div>
          <div className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="px-6 py-7 text-center first:pt-0 last:pb-0 sm:py-3">
                  <Icon className="mx-auto size-8 text-primary" />
                  <h3 className="mt-4 text-sm font-bold">{benefit.title}</h3>
                  <p className="mx-auto mt-2 max-w-[180px] text-xs leading-5 text-muted-foreground">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <Brand />
          <p>© 2026 NexGenZ. Here when you need us.</p>
        </div>
      </footer>
    </main>
  );
}