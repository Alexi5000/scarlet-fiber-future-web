
import { EnhancedSnakePath, EnhancedSnakeNode, PathGenerationConfig } from '../types/snakeTypes';

export const createMainNetworkPath = (
  index: number, 
  color: string, 
  config: PathGenerationConfig
): EnhancedSnakePath => {
  const { containerWidth, containerHeight, isMobile } = config;
  const nodes: EnhancedSnakeNode[] = [];
  const segmentLength = isMobile ? 12 : 18; // Longer segments for better visibility
  
  // CRITICAL FIX: Deterministic positioning to avoid overlapping paths
  const pathType = index % 3 === 0 ? 'horizontal' : index % 3 === 1 ? 'diagonal' : 'curved';
  
  if (pathType === 'horizontal') {
    // Create horizontal paths with fixed spacing
    const yPosition = (containerHeight / 7) * (1 + (index % 5));
    const nodeCount = Math.floor(containerWidth / (isMobile ? 45 : 60));
    
    for (let i = 0; i < nodeCount; i++) {
      const progress = i / (nodeCount - 1);
      const x = progress * containerWidth;
      
      // Predictable wave motion
      const waveOffset = Math.sin(progress * Math.PI * 2 + index * 0.8) * (isMobile ? 30 : 60);
      const finalY = Math.max(50, Math.min(containerHeight - 50, yPosition + waveOffset));
      
      nodes.push({
        id: `main-horizontal-${index}-${i}`,
        x: Math.max(0, Math.min(containerWidth, x)),
        y: finalY,
        isActive: false,
        intensity: 0,
        pulsePhase: (i * 0.3) % (Math.PI * 2), // Predictable phase
        connectionStrength: 0.8 + (i % 3) * 0.1
      });
    }
  } else if (pathType === 'diagonal') {
    // Create diagonal paths
    const startX = (index % 4) * (containerWidth / 4);
    const endX = containerWidth - startX;
    const startY = containerHeight * 0.2;
    const endY = containerHeight * 0.8;
    const nodeCount = Math.floor(Math.abs(endX - startX) / (isMobile ? 50 : 70));
    
    for (let i = 0; i < nodeCount; i++) {
      const progress = i / (nodeCount - 1);
      const x = startX + (endX - startX) * progress;
      const y = startY + (endY - startY) * progress;
      
      nodes.push({
        id: `main-diagonal-${index}-${i}`,
        x: Math.max(0, Math.min(containerWidth, x)),
        y: Math.max(0, Math.min(containerHeight, y)),
        isActive: false,
        intensity: 0,
        pulsePhase: (i * 0.4) % (Math.PI * 2),
        connectionStrength: 0.7 + (i % 2) * 0.2
      });
    }
  } else {
    // Create curved paths
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 2;
    const radius = Math.min(containerWidth, containerHeight) * 0.3;
    const nodeCount = Math.floor((Math.PI * radius) / (isMobile ? 40 : 55));
    
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2 + index * 0.5;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      nodes.push({
        id: `main-curved-${index}-${i}`,
        x: Math.max(0, Math.min(containerWidth, x)),
        y: Math.max(0, Math.min(containerHeight, y)),
        isActive: false,
        intensity: 0,
        pulsePhase: (angle + index) % (Math.PI * 2),
        connectionStrength: 0.6 + Math.abs(Math.sin(angle)) * 0.3
      });
    }
  }

  console.log(`Generated main path ${index} (${pathType}):`, {
    nodeCount: nodes.length,
    segmentLength,
    firstNode: nodes[0],
    lastNode: nodes[nodes.length - 1]
  });

  return {
    id: `enhanced-main-${index}`,
    nodes,
    direction: pathType === 'horizontal' ? 'horizontal' : pathType === 'diagonal' ? 'diagonal' : 'curved',
    speed: 0.6 + (index % 3) * 0.3, // Varied but predictable speeds
    color,
    width: isMobile ? 5 : 7,
    activeSegmentIndex: (index * 5) % Math.max(nodes.length - segmentLength, 1), // Staggered start positions
    segmentLength,
    pathType: 'main',
    layer: index % 3,
    opacity: 0.8 + (index % 2) * 0.1,
    glowIntensity: 0.7 + (index % 3) * 0.2
  };
};

export const createBranchPath = (
  index: number, 
  color: string, 
  config: PathGenerationConfig
): EnhancedSnakePath => {
  const { containerWidth, containerHeight, isMobile } = config;
  const nodes: EnhancedSnakeNode[] = [];
  const nodeCount = isMobile ? 10 : 15;
  const segmentLength = isMobile ? 8 : 12;
  
  // CRITICAL FIX: Create predictable connecting paths
  const startX = (index % 6) * (containerWidth / 6);
  const startY = (index % 4) * (containerHeight / 4);
  const angle = (index * Math.PI) / 3; // 60-degree increments
  const length = isMobile ? 200 : 300;
  
  for (let i = 0; i < nodeCount; i++) {
    const progress = i / (nodeCount - 1);
    const x = startX + Math.cos(angle) * length * progress;
    const y = startY + Math.sin(angle) * length * progress;
    
    nodes.push({
      id: `branch-${index}-${i}`,
      x: Math.max(0, Math.min(containerWidth, x)),
      y: Math.max(0, Math.min(containerHeight, y)),
      isActive: false,
      intensity: 0,
      pulsePhase: (i * 0.5 + index) % (Math.PI * 2),
      connectionStrength: 0.5 + (i % 2) * 0.3
    });
  }

  console.log(`Generated branch path ${index}:`, {
    nodeCount: nodes.length,
    segmentLength,
    angle: angle * 180 / Math.PI,
    startPosition: { x: startX, y: startY }
  });

  return {
    id: `enhanced-branch-${index}`,
    nodes,
    direction: 'diagonal',
    speed: 1.0 + (index % 2) * 0.4,
    color,
    width: isMobile ? 3 : 4,
    activeSegmentIndex: (index * 3) % Math.max(nodes.length - segmentLength, 1),
    segmentLength,
    pathType: 'branch',
    layer: (index % 2) + 1,
    opacity: 0.6 + (index % 3) * 0.2,
    glowIntensity: 0.5 + (index % 2) * 0.3
  };
};

export const getDefaultColors = (): string[] => [
  'rgba(255, 50, 50, 1)',
  'rgba(255, 100, 100, 0.9)',
  'rgba(220, 30, 30, 0.8)',
  'rgba(187, 0, 0, 0.9)',
  'rgba(255, 80, 80, 0.7)',
  'rgba(200, 20, 20, 0.85)',
  'rgba(255, 120, 120, 0.8)',
  'rgba(180, 10, 10, 0.9)'
];
