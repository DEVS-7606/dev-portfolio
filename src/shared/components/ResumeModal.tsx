import { useEffect, useCallback } from "react";

const RESUME_PDF_PATH = "/Dev_Resume_FS.pdf";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label="Resume Preview"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-[95vw] h-[92vh] max-w-5xl flex flex-col rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-primary)] overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-tertiary)]">
            Resume
          </span>

          <div className="flex items-center gap-3">
            {/* Download Button */}
            <a
              href={RESUME_PDF_PATH}
              download="Dev_Shah_Resume.pdf"
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-all duration-300"
              aria-label="Download Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="font-mono text-[10px] font-medium uppercase tracking-wider hidden sm:inline">
                Download
              </span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-white transition-all duration-300"
              aria-label="Close resume preview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[var(--color-bg-secondary)]">
          <iframe
            src={RESUME_PDF_PATH}
            title="Dev Shah Resume"
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
