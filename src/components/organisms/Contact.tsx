import { useContactForm } from "@/hooks/useContactForm";
import { InputField } from "@/shared/components/InputField";
import { TextareaField } from "@/shared/components/TextareaField";
import SocialLinks from "@/components/molecules/SocialLinks";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { status, handleSubmit, reset, register, errors } = useContactForm();
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-24 scroll-reveal border-t border-[var(--color-border)] overflow-hidden"
    >
      {/* Section background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(215,25,33,0.03) 0%, transparent 60%)",
          }}
        />
        <div className="absolute top-20 right-0 w-[100px] h-px bg-gradient-to-l from-[var(--color-accent)] to-transparent opacity-15" />
        <div className="absolute bottom-40 left-8 w-px h-[180px] bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            ( 06 )
          </span>
          <div className="h-px flex-1 max-w-[60px] bg-[var(--color-accent)] opacity-30" />
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-text-tertiary)]">
            Connect
          </span>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
            Let&apos;s
            <br />
            <span className="text-[var(--color-text-tertiary)]">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl font-light leading-relaxed text-[var(--color-text-secondary)] max-w-2xl">
            Whether you have a question, an opportunity, or just want to say hi
            — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          {/* Left — Contact Info */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail className="w-5 h-5" />}
                label="Email"
                value="devs95471@gmail.com"
                href="mailto:devs95471@gmail.com"
              />
              <ContactInfoItem
                icon={<MapPin className="w-5 h-5" />}
                label="Location"
                value="Ahmedabad, Gujarat"
              />
            </div>

            <div className="pt-6 border-t border-[var(--color-border)]">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-text-tertiary)] mb-4">
                Social
              </p>
              <SocialLinks />
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative p-6 sm:p-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden">
            {/* Card background */}
            <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(215,25,33,0.04) 0%, transparent 60%)",
              }}
            />

            <div className="relative">
              {status === "success" ? (
                <SuccessBanner onReset={reset} />
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <InputField
                      id="contact-name"
                      label="Name"
                      type="text"
                      placeholder="Jane Doe"
                      registration={register("name", { required: "Name is required" })}
                      error={errors.name?.message}
                    />
                    <InputField
                      id="contact-number"
                      label="Contact Number"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      registration={register("contactNumber")}
                    />
                  </div>

                  <InputField
                    id="contact-email"
                    label="Email Address"
                    type="email"
                    placeholder="jane@example.com"
                    registration={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    error={errors.email?.message}
                  />

                  <TextareaField
                    id="contact-purpose"
                    label="How can I help you?"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    registration={register("purpose", { required: "Message is required" })}
                    error={errors.purpose?.message}
                  />

                  {status === "error" && (
                    <div className="p-4 rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent-soft)] font-mono text-xs text-[var(--color-accent)]">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group mt-2 flex items-center justify-center gap-2 w-full sm:w-auto self-start px-8 py-3.5 rounded-lg border border-[var(--color-text-primary)] bg-[var(--color-text-primary)] text-[var(--color-bg-primary)] font-mono text-sm font-semibold uppercase tracking-wider hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 group cursor-pointer">
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--color-border)] group-hover:border-[var(--color-accent)]/30 text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-tertiary)] mb-0.5">
          {label}
        </p>
        <p className="text-lg font-display font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full border border-green-500/20 bg-green-500/10">
        <CheckCircle2 className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-xl font-display font-bold text-[var(--color-text-primary)]">
        Message Sent
      </h3>
      <p className="text-base text-[var(--color-text-secondary)] font-light max-w-sm">
        Thank you for reaching out. I&apos;ll be in touch shortly.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-4 px-6 py-2.5 rounded-lg border border-[var(--color-border)] font-mono text-xs font-semibold uppercase tracking-wider text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-300"
      >
        Send Another
      </button>
    </div>
  );
}
