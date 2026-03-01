import { useState } from "react";
import { useForm } from "react-hook-form";
import { ContactService, type ContactMessagePayload } from "@/services/contactService";

export type ContactFormData = ContactMessagePayload;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function useContactForm() {
    const [status, setStatus] = useState<SubmitStatus>("idle");
    const { register, handleSubmit: hookHandleSubmit, reset: hookReset, formState: { errors } } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setStatus("submitting");

        try {
            await ContactService.submitMessage(data);
            setStatus("success");
            hookReset();
        } catch (err) {
            console.error("Submission error:", err);
            setStatus("error");
        }
    };

    const reset = () => {
        setStatus("idle");
        hookReset();
    };

    return {
        status,
        register,
        handleSubmit: hookHandleSubmit(onSubmit),
        reset,
        errors
    };
}
