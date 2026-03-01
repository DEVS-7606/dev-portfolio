import { supabase } from "@/supabase-client";

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
        console.log(submissionData);
        const { error } = await supabase.from("users").insert(submissionData);

        if (error) {
            console.log(error);
            throw error;
        }
    },
};
