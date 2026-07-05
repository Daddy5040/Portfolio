import { Canvas, useThree } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Component, Suspense, useEffect, useRef, type ElementRef, type ReactNode } from 'react';
import type { ViewerModel } from '../../data';

function Model({ path }: { path: string }) {
  const gltf = useGLTF(path);

  return <primitive object={gltf.scene} scale={1.6} position={[0, -0.8, 0]} />;
}

function LoadingState() {
  return (
    <Html center>
      <div className="rounded-2xl border border-white/10 bg-[#050505]/85 px-5 py-4 text-center text-sm text-[#F5F5F5] backdrop-blur-xl">
        <p className="font-semibold text-[#F5A623]">Loading model</p>
        <p className="mt-1 text-[#A3A3A3]">Preparing GLB preview...</p>
      </div>
    </Html>
  );
}

function ViewerScene({ autoRotate, modelPath, resetSignal }: { autoRotate: boolean; modelPath: string; resetSignal: number }) {
  const controls = useRef<ElementRef<typeof OrbitControls>>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(3.4, 2.1, 4.2);
    controls.current?.reset();
  }, [camera, resetSignal]);

  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 6, 5]} intensity={2.4} />
      <pointLight position={[-3, 2, -4]} color="#F5A623" intensity={16} />
      <Suspense fallback={<LoadingState />}>
        <Model path={modelPath} />
      </Suspense>
      <OrbitControls ref={controls} autoRotate={autoRotate} autoRotateSpeed={0.85} enableDamping dampingFactor={0.08} enablePan enableZoom minDistance={2} maxDistance={9} />
    </>
  );
}

class ModelErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 grid place-items-center p-6">
          <div className="max-w-md rounded-[1.5rem] border border-[#F5A623]/30 bg-[#050505]/85 p-6 text-center backdrop-blur-xl">
            <p className="text-lg font-semibold text-[#F5F5F5]">Model could not be loaded.</p>
            <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">Place a valid GLB or GLTF file at <span className="text-[#F5A623]">/public/models/sample.glb</span> and refresh the viewer.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}


export function ModelViewer({ autoRotate, model, resetSignal }: { autoRotate: boolean; model: ViewerModel; resetSignal: number }) {
  return (
    <div className="relative min-h-[32rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:min-h-[42rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,166,35,0.18),transparent_34%),linear-gradient(180deg,#121212,#050505)]" />
      <ModelErrorBoundary>
        <Canvas camera={{ position: [3.4, 2.1, 4.2], fov: 45 }} dpr={[1, 2]}>
          <ViewerScene autoRotate={autoRotate} modelPath={model.path} resetSignal={resetSignal} />
        </Canvas>
      </ModelErrorBoundary>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
