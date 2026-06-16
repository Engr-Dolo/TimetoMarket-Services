import { Component } from "react";
import { Link } from "react-router-dom";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">⚠️</div>
            <h1 className="font-display font-black text-3xl text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-[#E8E2D9]/50 text-[15px] mb-8 leading-[1.7]">
              An unexpected error occurred. Please refresh the page or go back
              home.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] hover:bg-[#c96b42] transition-all min-h-[44px]"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false })}
                className="px-6 py-3 rounded-full border border-white/10 text-white font-semibold text-[14px] hover:bg-white/5 transition-all min-h-[44px] flex items-center"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
