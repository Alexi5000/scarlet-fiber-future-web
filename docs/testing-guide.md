# Testing Guide

## Scarlet Fiber Future Web - Testing Documentation

This project follows a comprehensive testing strategy using Jest and React Testing Library.

## Test Structure

```
tests/
├── components/           # Component unit tests
├── hooks/               # Custom hook tests
├── utils/               # Utility function tests
├── pages/               # Page integration tests
└── __mocks__/           # Mock files
```

## Getting Started

### Installation
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Running Tests
```bash
npm test                 # Run all tests
npm run test:coverage    # Run with coverage
```

## Component Testing Example

```typescript
// tests/components/CTAButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { CTAButton } from '@/components/CTAButton';

describe('CTAButton', () => {
  it('renders with correct text', () => {
    render(<CTAButton>Click me</CTAButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<CTAButton onClick={handleClick}>Click me</CTAButton>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Testing Guidelines

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **Accessibility Tests**: Test ARIA labels and keyboard navigation
4. **Performance Tests**: Test animation performance

## Coverage Requirements

- **Statements**: > 80%
- **Branches**: > 75%
- **Functions**: > 80%
- **Lines**: > 80%
