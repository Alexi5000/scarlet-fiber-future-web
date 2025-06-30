# Project Directory Map

## Scarlet Fiber Future Web - Complete Directory Structure

### Root Level
```
scarlet-fiber-future-web/
├── 📁 docs/                           # Documentation files
├── 📁 public/                         # Static assets
├── 📁 src/                            # Source code
├── 📄 package.json                    # Dependencies & scripts
├── 📄 vite.config.ts                  # Vite configuration
├── 📄 tailwind.config.ts              # Tailwind CSS configuration
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 eslint.config.js                # ESLint configuration
├── 📄 components.json                 # shadcn/ui configuration
└── 📄 README.md                       # Project overview
```

### Documentation (`/docs/`)
```
docs/
├── 📄 directory-map.md               # This file - complete project structure
├── 📄 hero-customization.md          # Hero section customization guide
└── 📄 hero-performance-guide.md      # Performance optimization guide
```

### Public Assets (`/public/`)
```
public/
├── 📁 lovable-uploads/               # Uploaded images
├── 📄 favicon.ico                    # Site favicon
├── 📄 placeholder.svg                # Placeholder image
├── 📄 robots.txt                     # Search engine directives
└── 📄 sw.js                         # Service worker
```

### Source Code (`/src/`)
```
src/
├── 📁 components/                    # React components
├── 📁 hooks/                        # Custom React hooks
├── 📁 pages/                        # Page components
├── 📁 styles/                       # CSS stylesheets
├── 📁 utils/                        # Utility functions
├── 📁 config/                       # Configuration files
├── 📁 lib/                          # Library utilities
├── 📄 App.tsx                       # Main application component
├── 📄 main.tsx                      # Application entry point
└── 📄 index.css                     # Global styles
```

## Components Architecture (`/src/components/`)

### Main Components
```
components/
├── 📄 AboutHero.tsx                  # About page hero section
├── 📄 AccessibilityControls.tsx     # Accessibility features
├── 📄 AnimatedFiber.tsx              # Fiber animation component
├── 📄 AnimatedSVGBackground.tsx      # SVG background animations
├── 📄 CertificationsSection.tsx     # Company certifications
├── 📄 CompanyStory.tsx               # Company story section
├── 📄 CompanyValues.tsx              # Company values section
├── 📄 CSSFiberAnimation.tsx          # CSS-based fiber animations
├── 📄 CTAButton.tsx                  # Call-to-action button
├── 📄 EnhancedHero.tsx               # Enhanced hero section
├── 📄 FiberBackground.tsx            # Fiber background component
├── 📄 FloatingParticles.tsx          # Particle effects
├── 📄 Footer.tsx                     # Site footer
├── 📄 Hero.tsx                       # Basic hero component
├── 📄 HeroAnimationCanvas.tsx        # Canvas-based hero animations
├── 📄 HeroAnimationContent.tsx       # Hero content animations
├── 📄 HeroAnimationStyles.tsx        # Hero animation styles
├── 📄 HeroAnimationSystem.tsx        # Hero animation system
├── 📄 Navbar.tsx                     # Navigation component
├── 📄 ProjectCard.tsx                # Project showcase card
├── 📄 ProjectGallery.tsx             # Project gallery
├── 📄 ProjectModal.tsx               # Project detail modal
├── 📄 QuoteWidget.tsx                # Quote request widget
├── 📄 ResourcePreloader.tsx          # Resource preloading
├── 📄 ScrollIndicator.tsx            # Scroll progress indicator
├── 📄 SecureContactForm.tsx          # Secure contact form
├── 📄 SecureQuoteWidget.tsx          # Secure quote widget
├── 📄 SecurityHeaders.tsx            # Security headers component
├── 📄 ServiceAreaMap.tsx             # Service area map
├── 📄 Services.tsx                   # Services section
├── 📄 SimpleCTA.tsx                  # Simple call-to-action
├── 📄 SnakeFiberAnimation.tsx        # Snake-like fiber animation
├── 📄 StaticFiberBackground.tsx      # Static fiber background
├── 📄 StatsStrip.tsx                 # Statistics strip
├── 📄 TeamSection.tsx                # Team members section
├── 📄 Testimonials.tsx               # Customer testimonials
├── 📄 WebGLFiberRenderer.tsx         # WebGL fiber renderer
├── 📄 WhyChooseUs.tsx                # Why choose us section
└── 📄 WhyChooseUsDetailed.tsx        # Detailed why choose us
```

### Contact Components (`/src/components/contact/`)
```
contact/
├── 📄 ContactFormMain.tsx            # Main contact form
├── 📄 ContactFormValidation.tsx      # Form validation logic
├── 📄 ContactInfoDisplay.tsx         # Contact information display
└── 📄 types.ts                       # Contact form types
```

### Fiber Animation System (`/src/components/fiber/`)
```
fiber/
├── 📁 core/                          # Core fiber logic
│   └── 📄 SnakeGenerator.ts          # Snake path generation
├── 📁 generators/                    # Animation generators
│   └── 📄 EnhancedSnakeGenerator.ts  # Enhanced snake generation
├── 📁 types/                         # Type definitions
│   └── 📄 snakeTypes.ts              # Snake animation types
├── 📁 utils/                         # Fiber utilities
│   ├── 📄 pathGeneration.ts          # Path generation utilities
│   └── 📄 pathUpdater.ts             # Path update utilities
├── 📄 EnhancedSnakeGenerator.tsx     # Enhanced snake generator component
├── 📄 EnhancedSnakeRenderer.tsx      # Enhanced snake renderer
├── 📄 fiberConfig.ts                 # Fiber configuration
├── 📄 FiberStrand.tsx                # Individual fiber strand
├── 📄 FiberStyles.tsx                # Fiber styling system
├── 📄 SnakePathGenerator.tsx         # Snake path generator
├── 📄 SnakeRenderer.tsx              # Snake renderer
└── 📄 types.ts                       # Fiber types
```

### UI Components (`/src/components/ui/`)
```
ui/                                   # shadcn/ui components
├── 📄 accordion.tsx                  # Accordion component
├── 📄 alert-dialog.tsx               # Alert dialog
├── 📄 alert.tsx                      # Alert component
├── 📄 aspect-ratio.tsx               # Aspect ratio utility
├── 📄 avatar.tsx                     # Avatar component
├── 📄 badge.tsx                      # Badge component
├── 📄 breadcrumb.tsx                 # Breadcrumb navigation
├── 📄 button.tsx                     # Button component
├── 📄 calendar.tsx                   # Calendar component
├── 📄 card.tsx                       # Card component
├── 📄 carousel.tsx                   # Carousel component
├── 📄 chart.tsx                      # Chart components
├── 📄 checkbox.tsx                   # Checkbox component
├── 📄 collapsible.tsx                # Collapsible component
├── 📄 command.tsx                    # Command palette
├── 📄 context-menu.tsx               # Context menu
├── 📄 dialog.tsx                     # Dialog component
├── 📄 drawer.tsx                     # Drawer component
├── 📄 dropdown-menu.tsx              # Dropdown menu
├── 📄 form.tsx                       # Form components
├── 📄 hover-card.tsx                 # Hover card
├── 📄 input-otp.tsx                  # OTP input
├── 📄 input.tsx                      # Input component
├── 📄 label.tsx                      # Label component
├── 📄 menubar.tsx                    # Menu bar
├── 📄 navigation-menu.tsx            # Navigation menu
├── 📄 pagination.tsx                 # Pagination component
├── 📄 popover.tsx                    # Popover component
├── 📄 progress.tsx                   # Progress indicator
├── 📄 radio-group.tsx                # Radio group
├── 📄 resizable.tsx                  # Resizable panels
├── 📄 scroll-area.tsx                # Scroll area
├── 📄 select.tsx                     # Select component
├── 📄 separator.tsx                  # Separator component
├── 📄 sheet.tsx                      # Sheet component
├── 📄 sidebar.tsx                    # Sidebar component
├── 📄 skeleton.tsx                   # Skeleton loader
├── 📄 slider.tsx                     # Slider component
├── 📄 sonner.tsx                     # Toast notifications
├── 📄 switch.tsx                     # Switch component
├── 📄 table.tsx                      # Table component
├── 📄 tabs.tsx                       # Tabs component
├── 📄 textarea.tsx                   # Textarea component
├── 📄 toast.tsx                      # Toast component
├── 📄 toaster.tsx                    # Toast container
├── 📄 toggle-group.tsx               # Toggle group
├── 📄 toggle.tsx                     # Toggle component
├── 📄 tooltip.tsx                    # Tooltip component
└── 📄 use-toast.ts                   # Toast hook
```

## Custom Hooks (`/src/hooks/`)

### Animation Hooks (`/src/hooks/animation/`)
```
animation/
├── 📄 types.ts                       # Animation type definitions
├── 📄 useAnimationLoop.tsx           # Animation loop management
├── 📄 useAnimationState.tsx          # Animation state management
└── 📄 usePathInitialization.tsx     # Path initialization
```

### Performance Hooks (`/src/hooks/performance/`)
```
performance/
├── 📄 batteryMonitor.ts              # Battery level monitoring
├── 📄 deviceCapabilities.ts         # Device capability detection
├── 📄 fpsMonitor.ts                  # FPS monitoring
├── 📄 qualityManager.ts              # Quality level management
└── 📄 types.ts                       # Performance types
```

### General Hooks
```
hooks/
├── 📄 use-mobile.tsx                 # Mobile device detection
├── 📄 use-toast.ts                   # Toast notifications
├── 📄 useCanvasSetup.tsx             # Canvas setup hook
├── 📄 useFiberInteraction.tsx        # Fiber interaction handling
├── 📄 useFiberSync.tsx               # Fiber synchronization
├── 📄 useHeroAnimationPerformance.tsx # Hero animation performance
├── 📄 useIntersectionObserver.tsx    # Intersection observer
├── 📄 useLazyFiberEffects.tsx        # Lazy fiber effects
├── 📄 usePerformanceMonitor.tsx      # Performance monitoring
├── 📄 useSnakeAnimation.tsx          # Snake animation logic
├── 📄 useTextAnimation.tsx           # Text animation effects
└── 📄 useWebGLState.tsx              # WebGL state management
```

## Pages (`/src/pages/`)
```
pages/
├── 📄 About.tsx                      # About page
├── 📄 Contact.tsx                    # Contact page
├── 📄 Index.tsx                      # Home page
├── 📄 NotFound.tsx                   # 404 error page
├── 📄 OurWork.tsx                    # Portfolio page
└── 📄 Services.tsx                   # Services page
```

## Styles (`/src/styles/`)
```
styles/
├── 📄 accessibility.css              # Accessibility styles
├── 📄 animations.css                 # Animation definitions
├── 📄 base.css                       # Base styles
├── 📄 components.css                 # Component styles
└── 📄 hero-animations.css            # Hero animation styles
```

## Utilities (`/src/utils/`)
```
utils/
├── 📄 deviceDetection.ts             # Device detection utilities
├── 📄 fiberGeometry.ts               # Fiber geometry calculations
├── 📄 fiberPerformance.ts            # Fiber performance utilities
├── 📄 particleSystem.ts              # Particle system utilities
├── 📄 security.ts                    # Security utilities
├── 📄 shaderMaterials.ts             # WebGL shader materials
├── 📄 snakeRenderer.ts               # Snake rendering utilities
├── 📄 webglDetection.ts              # WebGL capability detection
└── 📄 webglScene.ts                  # WebGL scene management
```

## Configuration (`/src/config/`)
```
config/
└── 📄 security.ts                    # Security configuration
```

## Library (`/src/lib/`)
```
lib/
└── 📄 utils.ts                       # General utility functions
```

## Key Features by Directory

### 🎨 **Animation System**
- **Location**: `/src/components/fiber/`, `/src/hooks/animation/`
- **Purpose**: Advanced fiber optic animations with WebGL and CSS fallbacks
- **Key Files**: Snake generators, path utilities, animation hooks

### 🚀 **Performance Optimization**
- **Location**: `/src/hooks/performance/`, `/src/utils/fiberPerformance.ts`
- **Purpose**: FPS monitoring, quality management, device capability detection
- **Key Files**: Battery monitor, FPS monitor, quality manager

### 🛡️ **Security**
- **Location**: `/src/config/security.ts`, `/src/utils/security.ts`
- **Purpose**: Security headers, form validation, input sanitization
- **Key Files**: Security configuration, security utilities

### 📱 **Responsive Design**
- **Location**: `/src/hooks/use-mobile.tsx`, `/src/utils/deviceDetection.ts`
- **Purpose**: Mobile-first responsive design with device-specific optimizations
- **Key Files**: Mobile detection, device capabilities

### ♿ **Accessibility**
- **Location**: `/src/components/AccessibilityControls.tsx`, `/src/styles/accessibility.css`
- **Purpose**: WCAG compliance, reduced motion support, screen reader compatibility
- **Key Files**: Accessibility controls, accessibility styles

### 🎯 **UI Components**
- **Location**: `/src/components/ui/`
- **Purpose**: Reusable UI components based on shadcn/ui
- **Key Files**: 50+ pre-built components for consistent design

This directory structure follows modern React best practices with clear separation of concerns, modular architecture, and comprehensive feature coverage. 