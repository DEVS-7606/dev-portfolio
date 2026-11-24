export type ContactMessagePayload = {
    name: string;
    contactNumber: string;
    email: string;
    purpose: string;
};

export const ContactService = {
    /**
     * Submits a contact message to the Supabase database.
     */
    async submitMessage(data: ContactMessagePayload): Promise<void> {
        const submissionData = {
            name: data.name,
            contactNumber: data.contactNumber,
            email: data.email,
            purpose: data.purpose,
        };
        // Load the Supabase client only when the form is submitted, so its
        // ~100 kB isn't part of the initial page load.
        const { supabase } = await import("@/supabase-client");
        const { error } = await supabase.from("users").insert(submissionData);

        if (error) {
            console.error("Contact form submission failed:", error.message);
            throw error;
        }
    },
};
