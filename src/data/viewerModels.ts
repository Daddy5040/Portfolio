export type ViewerModel = {
  name: string;
  category: string;
  path: string;
  software: string[];
  polycount: string;
  renderEngine: string;
  description: string;
  benefits: string[];
  placementNote: string;
};

export const featuredViewerModel: ViewerModel = {
  name: 'Premium Product Model',
  category: 'Interactive GLB presentation',
  path: '/models/sample.glb',
  software: ['Blender', '3ds Max', 'Corona Renderer', 'Photoshop'],
  polycount: 'Optimized realtime asset',
  renderEngine: 'WebGL / React Three Fiber',
  description:
    'A client-facing 3D product presentation space designed for polished model reviews, marketing previews, and immersive digital showcases.',
  benefits: [
    'Inspect product details from every angle',
    'Improve client presentations with an interactive showcase',
    'Create premium digital experiences that feel tactile and memorable',
    'Support product marketing with reusable web-ready assets',
  ],
  placementNote:
    'Place GLB files in public/models and reference them with a root-relative path such as /models/sample.glb.',
};
