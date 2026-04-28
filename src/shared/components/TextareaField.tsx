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
        className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]"
      >
        {label}
        {registration.required && (
          <span className="ml-1 text-[var(--color-accent)]">*</span>
        )}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        {...registration}
        className={`rounded-lg border bg-transparent px-4 py-3 text-sm font-body text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] outline-none transition-all duration-300 focus:border-[var(--color-accent)] resize-none ${
          error
            ? "border-[var(--color-accent)]"
            : "border-[var(--color-border)] hover:border-[var(--color-border-hover)]"
        }`}
      />
      {error && (
        <span className="font-mono text-[10px] text-[var(--color-accent)]">
          {error}
        </span>
      )}
    </div>
  );
}
