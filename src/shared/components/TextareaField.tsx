import type { UseFormRegisterReturn } from "react-hook-form";

type TextareaFieldProps = {
    id: string;
    label: string;
    placeholder: string;
    rows?: number;
    registration: UseFormRegisterReturn<string>;

    error?: string;
};

export function TextareaField({
    id,
    label,
    placeholder,
    rows = 4,
    registration,
    error,
}: TextareaFieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
                {label}
                {registration.required && <span className="ml-1 text-blue-600 dark:text-blue-400">*</span>}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                rows={rows}
                {...registration}
                className={`rounded-lg border bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow resize-none ${error ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                    }`}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
