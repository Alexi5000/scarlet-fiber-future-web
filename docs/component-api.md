# Component API Reference

## Scarlet Fiber Future Web - Component Documentation

### 🎯 Core Components

## Hero & Animation Components

### `EnhancedHero`
The main hero section with fiber optic animations and performance optimizations.

```typescript
interface EnhancedHeroProps {
  className?: string;
  quality?: 'static' | 'low' | 'medium' | 'high';
  enableSound?: boolean;
  onQualityChange?: (quality: string) => void;
}
```

**Usage:**
```tsx
<EnhancedHero 
  quality="high"
  enableSound={false}
  onQualityChange={(quality) => console.log('Quality changed:', quality)}
/>
```

### `CSSFiberAnimation`
CSS-based fiber animation with fallback support.

```typescript
interface CSSFiberAnimationProps {
  fiberCount?: number;
  opacity?: number;
  speed?: string;
  className?: string;
  paused?: boolean;
}
```

**Usage:**
```tsx
<CSSFiberAnimation 
  fiberCount={10}
  opacity={0.3}
  speed="4s"
  paused={false}
/>
```

### `WebGLFiberRenderer`
WebGL-based fiber renderer for advanced graphics.

```typescript
interface WebGLFiberRendererProps {
  width?: number;
  height?: number;
  particleCount?: number;
  quality?: 'low' | 'medium' | 'high';
  onWebGLError?: (error: Error) => void;
}
```

**Usage:**
```tsx
<WebGLFiberRenderer 
  width={800}
  height={600}
  particleCount={1000}
  quality="high"
  onWebGLError={(error) => console.error('WebGL Error:', error)}
/>
```

## Form Components

### `SecureContactForm`
Secure contact form with validation and sanitization.

```typescript
interface SecureContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
  onValidationError?: (errors: ValidationError[]) => void;
  className?: string;
  showCaptcha?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject: string;
}
```

**Usage:**
```tsx
<SecureContactForm 
  onSubmit={async (data) => {
    await submitContactForm(data);
  }}
  onValidationError={(errors) => {
    console.log('Validation errors:', errors);
  }}
  showCaptcha={true}
/>
```

### `SecureQuoteWidget`
Quote request widget with service selection.

```typescript
interface SecureQuoteWidgetProps {
  services?: ServiceOption[];
  onQuoteRequest?: (quote: QuoteRequest) => Promise<void>;
  className?: string;
  showBudgetRange?: boolean;
}

interface QuoteRequest {
  contactInfo: ContactFormData;
  services: string[];
  budgetRange?: string;
  timeline?: string;
  projectDescription: string;
}
```

**Usage:**
```tsx
<SecureQuoteWidget 
  services={availableServices}
  onQuoteRequest={async (quote) => {
    await processQuoteRequest(quote);
  }}
  showBudgetRange={true}
/>
```

## Navigation Components

### `Navbar`
Responsive navigation bar with mobile menu.

```typescript
interface NavbarProps {
  logo?: ReactNode;
  menuItems?: MenuItem[];
  className?: string;
  transparent?: boolean;
  onMenuToggle?: (isOpen: boolean) => void;
}

interface MenuItem {
  label: string;
  href: string;
  icon?: ReactNode;
  submenu?: MenuItem[];
}
```

**Usage:**
```tsx
<Navbar 
  logo={<Logo />}
  menuItems={navigationItems}
  transparent={true}
  onMenuToggle={(isOpen) => console.log('Menu toggled:', isOpen)}
/>
```

### `Footer`
Site footer with links and contact information.

```typescript
interface FooterProps {
  companyInfo?: CompanyInfo;
  links?: FooterLink[];
  socialMedia?: SocialMediaLink[];
  className?: string;
  showNewsletter?: boolean;
}
```

**Usage:**
```tsx
<Footer 
  companyInfo={companyDetails}
  links={footerLinks}
  socialMedia={socialLinks}
  showNewsletter={true}
/>
```

## Content Components

### `ProjectCard`
Project showcase card with image and details.

```typescript
interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
  className?: string;
  showTags?: boolean;
  imageAspectRatio?: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  completionDate?: Date;
  featured?: boolean;
}
```

**Usage:**
```tsx
<ProjectCard 
  project={projectData}
  onClick={(project) => openProjectModal(project)}
  showTags={true}
  imageAspectRatio="16/9"
/>
```

### `ProjectGallery`
Grid layout for project showcase.

```typescript
interface ProjectGalleryProps {
  projects: Project[];
  columns?: number;
  gap?: string;
  onProjectClick?: (project: Project) => void;
  filterTags?: string[];
  className?: string;
}
```

**Usage:**
```tsx
<ProjectGallery 
  projects={allProjects}
  columns={3}
  gap="2rem"
  onProjectClick={handleProjectClick}
  filterTags={['fiber-optic', 'networking']}
/>
```

### `Testimonials`
Customer testimonials carousel.

```typescript
interface TestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
  showAvatars?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
}
```

**Usage:**
```tsx
<Testimonials 
  testimonials={customerReviews}
  autoplay={true}
  interval={5000}
  showAvatars={true}
/>
```

## Utility Components

### `AccessibilityControls`
Accessibility control panel.

```typescript
interface AccessibilityControlsProps {
  onToggleMotion?: (enabled: boolean) => void;
  onToggleSound?: (enabled: boolean) => void;
  onToggleHighContrast?: (enabled: boolean) => void;
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}
```

**Usage:**
```tsx
<AccessibilityControls 
  onToggleMotion={(enabled) => setMotionEnabled(enabled)}
  onToggleSound={(enabled) => setSoundEnabled(enabled)}
  onToggleHighContrast={(enabled) => setHighContrast(enabled)}
  position="top-right"
/>
```

### `ScrollIndicator`
Page scroll progress indicator.

```typescript
interface ScrollIndicatorProps {
  color?: string;
  height?: string;
  position?: 'top' | 'bottom';
  className?: string;
  showPercentage?: boolean;
}
```

**Usage:**
```tsx
<ScrollIndicator 
  color="rgba(187, 0, 0, 1)"
  height="4px"
  position="top"
  showPercentage={true}
/>
```

### `ResourcePreloader`
Resource preloading component.

```typescript
interface ResourcePreloaderProps {
  resources: ResourceConfig[];
  onProgress?: (loaded: number, total: number) => void;
  onComplete?: () => void;
  onError?: (error: Error, resource: string) => void;
}

interface ResourceConfig {
  url: string;
  type: 'image' | 'font' | 'script' | 'style';
  priority?: 'high' | 'medium' | 'low';
}
```

**Usage:**
```tsx
<ResourcePreloader 
  resources={criticalResources}
  onProgress={(loaded, total) => {
    setLoadingProgress((loaded / total) * 100);
  }}
  onComplete={() => setResourcesLoaded(true)}
/>
```

## Animation Components

### `AnimatedFiber`
Individual animated fiber strand.

```typescript
interface AnimatedFiberProps {
  path: string;
  duration?: string;
  delay?: string;
  opacity?: number;
  color?: string;
  glowIntensity?: number;
  className?: string;
}
```

**Usage:**
```tsx
<AnimatedFiber 
  path="M0,0 Q50,25 100,0"
  duration="3s"
  delay="0.5s"
  opacity={0.7}
  color="rgba(187, 0, 0, 1)"
  glowIntensity={0.3}
/>
```

### `FloatingParticles`
Floating particle effect component.

```typescript
interface FloatingParticlesProps {
  particleCount?: number;
  speed?: number;
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}
```

**Usage:**
```tsx
<FloatingParticles 
  particleCount={50}
  speed={2}
  size={3}
  color="rgba(187, 0, 0, 0.5)"
  opacity={0.6}
/>
```

## Service Components

### `ServiceAreaMap`
Interactive service area map.

```typescript
interface ServiceAreaMapProps {
  serviceAreas: ServiceArea[];
  center?: [number, number];
  zoom?: number;
  onAreaClick?: (area: ServiceArea) => void;
  className?: string;
  showLegend?: boolean;
}

interface ServiceArea {
  id: string;
  name: string;
  coordinates: [number, number][];
  services: string[];
  coverage: 'full' | 'partial';
}
```

**Usage:**
```tsx
<ServiceAreaMap 
  serviceAreas={coverageAreas}
  center={[40.7128, -74.0060]}
  zoom={10}
  onAreaClick={(area) => showAreaDetails(area)}
  showLegend={true}
/>
```

## Performance Components

### `StaticFiberBackground`
Static fiber background for low-performance devices.

```typescript
interface StaticFiberBackgroundProps {
  pattern?: 'lines' | 'grid' | 'radial';
  opacity?: number;
  color?: string;
  className?: string;
}
```

**Usage:**
```tsx
<StaticFiberBackground 
  pattern="lines"
  opacity={0.1}
  color="rgba(187, 0, 0, 1)"
/>
```

## Custom Hooks API

### `usePerformanceMonitor`
Monitor application performance metrics.

```typescript
interface UsePerformanceMonitorOptions {
  fpsThreshold?: number;
  memoryThreshold?: number;
  onPerformanceChange?: (metrics: PerformanceMetrics) => void;
}

interface PerformanceMetrics {
  fps: number;
  memory: number;
  quality: 'static' | 'low' | 'medium' | 'high';
  batteryLevel?: number;
  isLowPowerMode?: boolean;
}

const usePerformanceMonitor: (options?: UsePerformanceMonitorOptions) => {
  metrics: PerformanceMetrics;
  adjustQuality: (quality: string) => void;
  pauseAnimations: () => void;
  resumeAnimations: () => void;
};
```

**Usage:**
```tsx
const { metrics, adjustQuality, pauseAnimations } = usePerformanceMonitor({
  fpsThreshold: 30,
  onPerformanceChange: (metrics) => {
    if (metrics.fps < 25) {
      adjustQuality('low');
    }
  }
});
```

### `useFiberAnimation`
Manage fiber animation state.

```typescript
interface UseFiberAnimationOptions {
  fiberCount?: number;
  quality?: 'static' | 'low' | 'medium' | 'high';
  paused?: boolean;
  onAnimationFrame?: (deltaTime: number) => void;
}

const useFiberAnimation: (options?: UseFiberAnimationOptions) => {
  fibers: FiberStrand[];
  isAnimating: boolean;
  quality: string;
  setQuality: (quality: string) => void;
  pause: () => void;
  resume: () => void;
};
```

**Usage:**
```tsx
const { fibers, isAnimating, setQuality } = useFiberAnimation({
  fiberCount: 15,
  quality: 'high',
  onAnimationFrame: (deltaTime) => {
    // Custom animation logic
  }
});
```

### `useResponsiveDesign`
Handle responsive design breakpoints.

```typescript
interface UseResponsiveDesignOptions {
  breakpoints?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const useResponsiveDesign: (options?: UseResponsiveDesignOptions) => {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenSize: 'mobile' | 'tablet' | 'desktop';
  windowSize: { width: number; height: number };
};
```

**Usage:**
```tsx
const { isMobile, screenSize } = useResponsiveDesign({
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  }
});
```

## Styling Utilities

### `cn` (Class Name Utility)
Conditional class name utility.

```typescript
const cn: (...classes: (string | undefined | null | boolean)[]) => string;
```

**Usage:**
```tsx
const buttonClasses = cn(
  'base-button',
  variant === 'primary' && 'button-primary',
  disabled && 'button-disabled',
  className
);
```

## Type Definitions

### Common Types
```typescript
// Animation types
interface AnimationConfig {
  duration: string;
  delay?: string;
  easing?: string;
  iterations?: number | 'infinite';
}

// Performance types
interface DeviceCapabilities {
  webgl: boolean;
  touchScreen: boolean;
  batteryAPI: boolean;
  memory: number;
  cores: number;
}

// Form types
interface ValidationError {
  field: string;
  message: string;
  code: string;
}

// Component base props
interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}
```

This API reference provides comprehensive documentation for all major components and hooks in the Scarlet Fiber Future Web application. 