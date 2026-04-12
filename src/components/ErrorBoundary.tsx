import { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  name?: string;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Log exactly which component crashed
    console.error(`[ErrorBoundary: ${this.props.name || 'Unknown'}] crashed:`, error);
    console.error('Component stack:', info.componentStack);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div style={{
          width: '100%',
          minHeight: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4F8EF7',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '12px',
          opacity: 0.3,
          padding: '20px'
        }}>
          {/* Silent fail — component hidden but app continues */}
        </div>
      );
    }
    return this.props.children;
  }
}
