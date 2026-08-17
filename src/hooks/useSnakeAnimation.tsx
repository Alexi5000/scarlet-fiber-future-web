
import { useAnimationState } from './animation/useAnimationState';
import { usePathInitialization } from './animation/usePathInitialization';
import { useAnimationLoop } from './animation/useAnimationLoop';
import type { UseSnakeAnimationProps } from './animation/types';

export const useSnakeAnimation = ({
  isVisible,
  canvasReady,
  renderError,
  canvasRef,
  pathGeneratorRef,
  pathCount,
  heroGlowIntensity,
  isMobile,
  setRenderError
}: UseSnakeAnimationProps) => {
  
  const { animationState, setAnimationState, updateAnimationState } = useAnimationState();

  usePathInitialization({
    canvasReady,
    pathGeneratorRef,
    pathCount,
    setRenderError,
    updateAnimationState
  });

  useAnimationLoop({
    isVisible,
    canvasReady,
    renderError,
    canvasRef,
    pathGeneratorRef,
    heroGlowIntensity,
    isMobile,
    setRenderError,
    animationState,
    setAnimationState
  });

  return { paths: animationState.paths };
};
