import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CheckCircle2,
  Clock3,
  Headphones,
  LockKeyhole,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NexaCare | Customer Support" },
      {
        name: "description",
        content: "Reach the NexaCare customer support team quickly and securely on WhatsApp.",
      },
      { property: "og:title", content: "NexaCare Customer Support" },
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
  "https://wa.me/18392310239?text=Hello%20NexaCare%2C%20I%20need%20help%20with%20my%20account.";

function Brand() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="NexaCare home">
      <span className="relative grid size-9 place-items-center" aria-hidden="true">
        <span className="absolute inset-1 rotate-45 rounded-sm border-2 border-primary transition-transform duration-300 group-hover:rotate-[135deg]" />
        <span className="size-2 rounded-full bg-primary shadow-glow" />
      </span>
      <span>
        <span className="block font-display text-base font-bold leading-none text-foreground">NexaCare</span>
        <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.28em] text-muted-foreground">Support</span>
      </span>
    </a>
  );
}

function WhatsappIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M27.1 4.8A14.8 14.8 0 0 0 3.8 22.6L2 29l6.6-1.7A14.8 14.8 0 1 0 27.1 4.8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M11.1 9.3c.4-.4.8-.4 1.1 0l1.5 3.3c.2.4.1.8-.2 1.1l-1.1 1c1 2.3 2.8 4.1 5.1 5.1l1-1.1c.3-.3.7-.4 1.1-.2l3.3 1.5c.4.2.5.7.2 1.1-1 1.7-2.4 2.5-4.4 2.1-5.5-1.1-10-5.6-11.1-11.1-.4-2 .4-3.4 2.1-4.4.4-.2 1-.1 1.4.6Z" fill="currentColor" />
    </svg>
  );
}

function SupportTag({ icon: Icon, children }: { icon: typeof UserRound; children: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card/90 px-3 py-2.5 text-[11px] font-semibold text-foreground shadow-panel backdrop-blur-md">
      <Icon className="size-3.5 text-primary" />
      {children}
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[445px] w-full max-w-[430px]" aria-label="NexaCare support conversation preview">
      <div className="absolute left-0 top-24 hidden space-y-2 lg:block">
        <SupportTag icon={UserRound}>Account support</SupportTag>
        <SupportTag icon={Headphones}>Service questions</SupportTag>
        <SupportTag icon={ShieldCheck}>Technical assistance</SupportTag>
      </div>
      <div className="absolute right-0 top-24 hidden space-y-2 lg:block">
        <SupportTag icon={BadgeCheck}>Verification help</SupportTag>
        <SupportTag icon={LockKeyhole}>Privacy & security</SupportTag>
        <SupportTag icon={MessageCircle}>General enquiries</SupportTag>
      </div>

      <div className="phone-shell absolute left-1/2 top-0 h-[440px] w-[238px] -translate-x-1/2 overflow-hidden rounded-[2.4rem] border-[5px] border-device bg-device shadow-phone">
        <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-device" />
        <div className="flex items-center justify-between px-5 pt-3 text-[8px] font-bold text-foreground">
          <span>10:24</span><span className="tracking-wider">••• ▰</span>
        </div>
        <div className="mt-7 flex flex-col items-center px-4">
          <span className="grid size-14 place-items-center rounded-xl bg-whatsapp text-whatsapp-foreground shadow-glow">
            <WhatsappIcon className="size-9" />
          </span>
          <div className="mt-4 flex items-center gap-1.5 text-sm font-bold text-foreground">
            NexaCare <BadgeCheck className="size-4 fill-primary text-primary-foreground" />
          </div>
          <span className="mt-1 text-[9px] text-muted-foreground">Typically replies in minutes</span>
        </div>
        <div className="mx-4 mt-6 rounded-lg bg-message p-3 shadow-panel">
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
            <a href="#top" className="transition-colors hover:text-primary">Home</a>
            <a href="#support" className="transition-colors hover:text-primary">Support</a>
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
          <p>© 2026 NexaCare. Here when you need us.</p>
        </div>
      </footer>
    </main>
  );
}