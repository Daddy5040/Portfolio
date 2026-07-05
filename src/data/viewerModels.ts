export type ViewerModel = {
  name: string;
  category: string;
  path: string;
  software: string[];
  polycount: string;
  renderEngine: string;
  description: string;
};

export const featuredViewerModel: ViewerModel = {
  name: 'Sample Product Visualization Model',
  category: 'GLB / GLTF Preview',
  path: '/models/sample.glb',
  software: ['Blender', '3ds Max', 'Corona Renderer', 'Photoshop'],
  polycount: '125k triangles placeholder',
  renderEngine: 'Real-time WebGL preview',
  description: 'A placeholder model entry for the portfolio viewer. Replace the sample file with a production-ready GLB or GLTF asset.',
};
