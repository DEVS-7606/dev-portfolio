import { Component } from "react";
import type { ReactNode } from "react";

/**
 * Error boundary for purely decorative, lazily loaded effects (background,
 * 3D block). If one fails to load or crashes, render nothing instead of taking
 * the whole page down.
 */
export default class SilentBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("Decorative effect disabled:", error);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
