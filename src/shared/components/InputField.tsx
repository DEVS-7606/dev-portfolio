import type { UseFormRegisterReturn } from "react-hook-form";

type InputFieldProps = {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registration: UseFormRegisterReturn<any>;
    error?: string;
};

export function InputField({
    id,
    label,
    type,
    placeholder,
    registration,
    error,
}: InputFieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
                {label}
                {registration.required && <span className="ml-1 text-blue-600 dark:text-blue-400">*</span>}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                {...registration}
                className={`rounded-lg border bg-white dark:bg-zinc-900 px-4 py-2.5 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-shadow ${error ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                    }`}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
