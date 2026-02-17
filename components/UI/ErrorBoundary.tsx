import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-navy-900 text-white p-4 font-sans">
          <div className="max-w-md text-center bg-navy-800 p-8 rounded-lg border border-white/10 shadow-2xl">
            <span className="material-symbols-outlined text-4xl text-gray-500 mb-4">error_outline</span>
            <h1 className="text-xl font-bold mb-2">Application Error</h1>
            <p className="text-gray-400 mb-6 text-sm">We're unable to load the application at this moment. Please try reloading.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-bold uppercase tracking-wide rounded transition-colors"
            >
              Reload Page
            </button>
            {this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-xs text-gray-600 cursor-pointer hover:text-gray-400">Technical Details</summary>
                <pre className="mt-2 p-3 bg-black/50 rounded text-[10px] text-red-300 overflow-auto max-h-32">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}