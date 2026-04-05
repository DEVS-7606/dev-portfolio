import { useContactForm } from "@/hooks/useContactForm";
import { InputField } from "@/shared/components/InputField";
import { TextareaField } from "@/shared/components/TextareaField";
import SocialLinks from "@/components/molecules/SocialLinks";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const { status, handleSubmit, reset, register, errors } = useContactForm();
    return (
        <section id="contact" className="relative scroll-mt-24 py-16 sm:py-20 md:py-28 overflow-hidden border-t border-zinc-100 dark:border-zinc-800/50">
            {/* Section full-background glow elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center mb-16 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-accent mb-3">
                    Get in Touch
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-5 text-zinc-900 dark:text-white">
                    Let's Connect
                </h2>
                <div className="prose prose-zinc dark:prose-invert max-w-2xl px-4">
                    <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                        Whether you have a question, an opportunity, or just want to say hi, my inbox is always open. Let's build something amazing together.
                    </p>
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Left Column: Seamless Contact Info */}
                <div className="flex flex-col space-y-10 lg:sticky lg:top-32">
                    <div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 tracking-tight">Contact Information</h3>
                        
                        <div className="space-y-8">
                            <div className="flex items-start gap-5 group cursor-pointer">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-zinc-700/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-0.5">Email</p>
                                    <a href="mailto:devs95471@gmail.com" className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 transition-colors">
                                        devs95471@gmail.com
                                    </a>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-5 group cursor-default">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-zinc-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100/50 dark:border-zinc-700/50 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-0.5">Location</p>
                                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                        Ahmedabad, Gujarat
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 relative before:absolute before:top-0 before:left-0 before:w-16 before:h-px before:bg-gradient-to-r before:from-blue-500 before:to-transparent">
                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-5 uppercase tracking-widest">Connect Digitally</p>
                        <SocialLinks className="!pb-0 !gap-x-5" />
                    </div>
                </div>

                {/* Right Column: Interactive Form Portal */}
                <div className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/20 overflow-hidden backdrop-blur-xl relative">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500" />
                    
                    <div className="p-8 sm:p-10">
                        {status === "success" ? (
                            <SuccessBanner onReset={reset} />
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                                            message: "Invalid email address"
                                        }
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
                                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium border border-red-100 dark:border-red-900/30">
                                        Oops! Something went wrong while sending your message. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="group mt-2 flex items-center justify-center gap-2 w-full sm:w-auto self-start rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-8 py-3.5 text-sm font-bold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
                                >
                                    {status === "submitting" ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SuccessBanner({ onReset }: { onReset: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-12 text-center animate-fade-in">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50 dark:bg-green-900/20 text-green-500 shadow-inner mb-2 border border-green-100 dark:border-green-900/30">
                <CheckCircle2 className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
                Message Sent!
            </h3>
            <p className="text-base text-zinc-500 dark:text-zinc-400 max-w-sm">
                Thank you for reaching out. Your message has safely landed in my inbox and I'll be in touch with you shortly.
            </p>
            <button
                type="button"
                onClick={onReset}
                className="mt-6 px-6 py-2.5 rounded-lg text-sm font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
                Send Another Message
            </button>
        </div>
    );
}
