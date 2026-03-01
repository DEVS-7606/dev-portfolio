import { useContactForm } from "@/hooks/useContactForm";
import { InputField } from "@/shared/components/InputField";
import { TextareaField } from "@/shared/components/TextareaField";

export default function Contact() {
    const { status, handleSubmit, reset, register, errors } = useContactForm();

    return (
        <section id="contact" className="scroll-mt-24 py-10 sm:py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
                <div className="relative">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Contact{" "}
                        <span className="text-zinc-500 dark:text-zinc-600">Me</span>
                    </h2>
                    <div className="mt-3 sm:mt-4 h-1.5 w-16 sm:w-20 bg-blue-600 rounded-full" />
                    <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
                        Have a question, want to collaborate, or just say hi? Fill out the
                        form and I&apos;ll get back to you soon.
                    </p>
                </div>

                <div
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800
            bg-zinc-50 dark:bg-zinc-900/60 p-6 sm:p-8 shadow-sm"
                >
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
                                label="Email"
                                type="email"
                                placeholder="jane@example.com"
                                registration={register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
                                    }
                                })}
                                error={errors.email?.message}
                            />

                            <TextareaField
                                id="contact-purpose"
                                label="What do you want to connect for?"
                                placeholder="I'd love to discuss..."
                                rows={4}
                                registration={register("purpose", { required: "Purpose is required" })}
                                error={errors.purpose?.message}
                            />

                            {status === "error" && (
                                <p className="text-sm text-red-500 dark:text-red-400">
                                    Something went wrong. Please try again.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="mt-1 inline-flex items-center justify-center gap-2
                  rounded-lg bg-blue-600 hover:bg-blue-700
                  px-6 py-3 text-sm font-semibold text-white
                  transition-colors disabled:opacity-60 disabled:cursor-not-allowed
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  dark:focus:ring-offset-zinc-900"
                            >
                                {status === "submitting" ? "Sending…" : "Send Message"}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/40">
                <svg
                    className="h-7 w-7 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Message sent!
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Thanks for reaching out. I&apos;ll get back to you soon.
            </p>
            <button
                type="button"
                onClick={onReset}
                className="mt-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
                Send another message
            </button>
        </div>
    );
}
