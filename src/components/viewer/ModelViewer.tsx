import { Canvas, useThree } from '@react-three/fiber';
import { Center, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { AlertTriangle, Box } from 'lucide-react';
import { Component, Suspense, useEffect, useRef, type ElementRef, type ReactNode } from 'react';
import type { ViewerModel } from '../../data';

function Model({ path }: { path: string }) {
  const gltf = useGLTF(path);

  return (
    <Center>
      <primitive object={gltf.scene} scale={1.45} />
    </Center>
  );
}

function LoadingState() {
  return (
    <Html center>
      <div className="rounded-2xl border border-[#F5A623]/25 bg-[#050505]/90 px-6 py-5 text-center text-sm text-[#F5F5F5] shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-[#F5A623]/25 border-t-[#F5A623]" />
        <p className="font-semibold text-[#F5A623]">Loading model</p>
        <p className="mt-1 text-[#A3A3A3]">Preparing interactive GLB preview...</p>
      </div>
    </Html>
  );
}

function ViewerScene({ autoRotate, modelPath, resetSignal }: { autoRotate: boolean; modelPath: string; resetSignal: number }) {
  const controls = useRef<ElementRef<typeof OrbitControls>>(null);
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(3.4, 2.1, 4.2);
    controls.current?.target.set(0, 0, 0);
    controls.current?.reset();
  }, [camera, resetSignal]);

  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 5]} intensity={2.6} />
      <directionalLight position={[-4, 2, -3]} intensity={0.7} color="#F5A623" />
      <pointLight position={[-3, 2, -4]} color="#F5A623" intensity={14} />
      <Suspense fallback={<LoadingState />}>
        <Model path={modelPath} />
      </Suspense>
      <OrbitControls
        ref={controls}
        autoRotate={autoRotate}
        autoRotateSpeed={0.75}
        enableDamping
        dampingFactor={0.08}
        enablePan={false}
        enableZoom
        minDistance={2}
        maxDistance={9}
      />
    </>
  );
}

class ModelErrorBoundary extends Component<{ children: ReactNode; modelPath: string }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(previousProps: { modelPath: string }) {
    if (previousProps.modelPath !== this.props.modelPath && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 grid place-items-center p-6">
          <div className="max-w-lg rounded-[1.75rem] border border-[#F5A623]/30 bg-[#050505]/90 p-7 text-center shadow-[0_24px_90px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <AlertTriangle className="mx-auto h-9 w-9 text-[#F5A623]" />
            <p className="mt-4 text-xl font-semibold text-[#F5F5F5]">Model preview unavailable</p>
            <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">
              Add a valid GLB file at <span className="font-medium text-[#F5A623]">public/models/sample.glb</span>. It will be served in the app as <span className="font-medium text-[#F5A623]">/models/sample.glb</span>.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function ModelViewer({ autoRotate, model, resetSignal }: { autoRotate: boolean; model: ViewerModel; resetSignal: number }) {
  return (
    <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] border border-white/10 bg-[#050505] shadow-[0_30px_140px_rgba(0,0,0,0.55)] md:min-h-[46rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(245,166,35,0.20),transparent_32%),radial-gradient(circle_at_16%_76%,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#111111,#050505)]" />
      <div className="pointer-events-none absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#D7D7D7] backdrop-blur-xl">
        <Box className="h-3.5 w-3.5 text-[#F5A623]" /> Live 3D Preview
      </div>
      <ModelErrorBoundary modelPath={model.path}>
        <Canvas camera={{ position: [3.4, 2.1, 4.2], fov: 45 }} dpr={[1, 2]}>
          <ViewerScene autoRotate={autoRotate} modelPath={model.path} resetSignal={resetSignal} />
        </Canvas>
      </ModelErrorBoundary>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505] to-transparent" />
    </div>
  );
}
