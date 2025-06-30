# Development Guide

## Scarlet Fiber Future Web - Developer Documentation

### 🚀 Quick Start

#### Prerequisites
- Node.js 18+ (recommended: use nvm)
- npm or bun package manager
- Modern browser with WebGL support

#### Installation
```bash
# Clone the repository
git clone <repository-url>
cd scarlet-fiber-future-web

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

#### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build for development
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

## 🏗️ Architecture Overview

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: CSS Animations + WebGL (Three.js)
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router DOM
- **State Management**: React hooks + Context API

### Project Structure Philosophy
```
src/
├── components/     # Reusable UI components
│   ├── ui/        # Base UI components (shadcn/ui)
│   ├── fiber/     # Fiber animation system
│   └── contact/   # Contact form components
├── hooks/         # Custom React hooks
│   ├── animation/ # Animation-specific hooks
│   └── performance/ # Performance monitoring hooks
├── pages/         # Page-level components
├── utils/         # Pure utility functions
├── styles/        # Global CSS files
└── config/        # Configuration files
```

## 🎨 Component Development

### Component Guidelines
1. **Functional Components**: Use function components with hooks
2. **TypeScript**: All components must be fully typed
3. **Props Interface**: Define props interface for each component
4. **Default Props**: Use default parameters instead of defaultProps
5. **Error Boundaries**: Wrap complex components in error boundaries

### Example Component Structure
```typescript
// src/components/ExampleComponent.tsx
import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ExampleComponentProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onAction?: () => void;
}

export const ExampleComponent: FC<ExampleComponentProps> = ({
  children,
  variant = 'primary',
  className,
  onAction
}) => {
  return (
    <div 
      className={cn(
        'base-styles',
        variant === 'primary' && 'primary-styles',
        variant === 'secondary' && 'secondary-styles',
        className
      )}
      onClick={onAction}
    >
      {children}
    </div>
  );
};
```

### Component Testing Structure
```typescript
// tests/components/ExampleComponent.test.ts
import { render, screen, fireEvent } from '@testing-library/react';
import { ExampleComponent } from '@/components/ExampleComponent';

describe('ExampleComponent', () => {
  it('renders children correctly', () => {
    render(<ExampleComponent>Test Content</ExampleComponent>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const mockAction = jest.fn();
    render(<ExampleComponent onAction={mockAction}>Click me</ExampleComponent>);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockAction).toHaveBeenCalled();
  });
});
```

## 🎯 Custom Hooks Development

### Hook Guidelines
1. **Single Responsibility**: Each hook should have one clear purpose
2. **Reusability**: Design hooks to be reusable across components
3. **Performance**: Use useMemo and useCallback appropriately
4. **Error Handling**: Include proper error handling and cleanup

### Example Hook Structure
```typescript
// src/hooks/useExample.tsx
import { useState, useEffect, useCallback } from 'react';

interface UseExampleOptions {
  initialValue?: string;
  onValueChange?: (value: string) => void;
}

export const useExample = ({ 
  initialValue = '', 
  onValueChange 
}: UseExampleOptions = {}) => {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const updateValue = useCallback((newValue: string) => {
    setValue(newValue);
    onValueChange?.(newValue);
  }, [onValueChange]);

  useEffect(() => {
    // Cleanup function
    return () => {
      // Cleanup logic here
    };
  }, []);

  return {
    value,
    loading,
    updateValue
  };
};
```

## 🎨 Styling Guidelines

### Tailwind CSS Conventions
```typescript
// Use cn() utility for conditional classes
import { cn } from '@/lib/utils';

const buttonClasses = cn(
  // Base styles
  'px-4 py-2 rounded-md font-medium transition-colors',
  // Conditional styles
  variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
  variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  disabled && 'opacity-50 cursor-not-allowed',
  className
);
```

### CSS Custom Properties
```css
/* Define CSS variables for dynamic values */
:root {
  --fiber-primary: rgba(187, 0, 0, 1);
  --glow-intensity: 0.3;
  --animation-duration: 3s;
}

/* Use in components */
.fiber-strand {
  color: var(--fiber-primary);
  box-shadow: 0 0 20px var(--fiber-primary);
  animation-duration: var(--animation-duration);
}
```

## ⚡ Performance Guidelines

### Component Optimization
```typescript
import { memo, useMemo, useCallback } from 'react';

// Memoize expensive components
export const ExpensiveComponent = memo(({ data, onUpdate }) => {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data.map(item => expensiveProcessing(item));
  }, [data]);

  // Memoize event handlers
  const handleUpdate = useCallback((id: string) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onUpdate={handleUpdate} />
      ))}
    </div>
  );
});
```

### Animation Performance
```typescript
// Use transform instead of changing layout properties
const animationStyles = {
  transform: `translateX(${position}px) scale(${scale})`,
  opacity: opacity
};

// Prefer CSS animations for simple animations
// Use Web Animations API for complex animations
// Use WebGL for particle effects and complex graphics
```

## 🧪 Testing Strategy

### Test Structure
```
tests/
├── components/           # Component tests
├── hooks/               # Hook tests
├── utils/               # utility function tests
├── pages/               # Page integration tests
└── __mocks__/          # Mock files
```

### Testing Guidelines
1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Test ARIA labels and keyboard navigation
4. **Performance Tests**: Test animation performance and memory usage

### Example Test Suite
```typescript
// tests/components/FiberAnimation.test.ts
import { render, screen } from '@testing-library/react';
import { FiberAnimation } from '@/components/FiberAnimation';

describe('FiberAnimation', () => {
  beforeEach(() => {
    // Mock WebGL context
    HTMLCanvasElement.prototype.getContext = jest.fn();
  });

  it('renders without crashing', () => {
    render(<FiberAnimation />);
    expect(screen.getByTestId('fiber-animation')).toBeInTheDocument();
  });

  it('falls back to CSS animation when WebGL unavailable', () => {
    // Mock WebGL as unavailable
    HTMLCanvasElement.prototype.getContext = jest.fn(() => null);
    
    render(<FiberAnimation />);
    expect(screen.getByTestId('css-fallback')).toBeInTheDocument();
  });
});
```

## 🛡️ Security Guidelines

### Input Validation
```typescript
import { z } from 'zod';

// Define validation schemas
const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000)
});

// Validate on both client and server
const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};
```

### XSS Prevention
```typescript
// Sanitize user input
import DOMPurify from 'dompurify';

const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};

// Use dangerouslySetInnerHTML carefully
<div dangerouslySetInnerHTML={{ __html: sanitizeHTML(userContent) }} />
```

## 🎨 Animation System

### Fiber Animation Architecture
```typescript
// Core animation loop
const useAnimationLoop = (callback: (deltaTime: number) => void) => {
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      callback(deltaTime);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [callback]);
};
```

### Performance Monitoring
```typescript
// FPS monitoring
const useFPSMonitor = () => {
  const [fps, setFPS] = useState(60);
  
  useEffect(() => {
    let frames = 0;
    let lastTime = performance.now();
    
    const measureFPS = () => {
      frames++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        setFPS(Math.round((frames * 1000) / (currentTime - lastTime)));
        frames = 0;
        lastTime = currentTime;
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    measureFPS();
  }, []);
  
  return fps;
};
```

## 🚀 Deployment

### Build Optimization
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          three: ['three']
        }
      }
    }
  }
});
```

### Environment Variables
```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_ENVIRONMENT=production
```

## 📝 Code Style

### ESLint Configuration
```javascript
// eslint.config.js
export default [
  {
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'prefer-const': 'error'
    }
  }
];
```

### Prettier Configuration
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🐛 Debugging

### Development Tools
```typescript
// Enable performance profiler in development
if (process.env.NODE_ENV === 'development') {
  // Performance monitoring
  console.log('FPS:', currentFPS);
  console.log('Quality Level:', qualityLevel);
  console.log('WebGL Support:', hasWebGL);
}
```

### Common Issues
1. **Animation Performance**: Check FPS monitor, reduce quality level
2. **Memory Leaks**: Ensure proper cleanup in useEffect
3. **WebGL Issues**: Implement proper fallbacks
4. **Mobile Performance**: Test on actual devices, not just browser dev tools

## 📚 Resources

### Documentation Links
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Three.js Documentation](https://threejs.org/docs/)

### Development Tools
- [Vite](https://vitejs.dev)
- [ESLint](https://eslint.org)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

This guide provides a comprehensive foundation for developing and maintaining the Scarlet Fiber Future Web application. 