export interface Product {
  id: string;
  name: string;
  category: 'vinyl-floor' | 'rubber' | 'decoration';
  categoryName: string;
  images: string[];
  description: string;
  specifications: {
    material: string;
    thickness: string;
    color: string;
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: '商用塑胶地板系列',
    category: 'vinyl-floor',
    categoryName: '塑胶地板',
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'],
    description: '高品质商用塑胶地板，耐磨、防滑、环保，适用于商场、医院、学校等公共场所。',
    specifications: {
      material: 'PVC',
      thickness: '2.0mm',
      color: '多种可选',
      wearLayer: '0.5mm',
    },
  },
  {
    id: '2',
    name: '运动橡胶地板',
    category: 'rubber',
    categoryName: '橡胶制品',
    images: ['https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800'],
    description: '专业运动橡胶地板，减震效果优异，保护运动员安全，适用于健身房、运动场馆。',
    specifications: {
      material: '天然橡胶',
      thickness: '15mm',
      color: '红/蓝/绿',
      hardness: 'Shore A 60',
    },
  },
  {
    id: '3',
    name: '室内装饰墙板',
    category: 'decoration',
    categoryName: '装饰材料',
    images: ['https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800'],
    description: '新型环保装饰墙板，安装便捷，款式多样，适用于酒店、办公空间等室内装饰。',
    specifications: {
      material: '竹木纤维',
      thickness: '9mm',
      color: '木纹系列',
      size: '300x3000mm',
    },
  },
  {
    id: '4',
    name: '防静电地板',
    category: 'vinyl-floor',
    categoryName: '塑胶地板',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    description: '专业防静电地板，适用于数据中心、实验室等对静电有严格要求的场所。',
    specifications: {
      material: '导静电PVC',
      thickness: '3.0mm',
      color: '蓝/灰',
      resistance: '10^6-10^9Ω',
    },
  },
  {
    id: '5',
    name: '安全橡胶地垫',
    category: 'rubber',
    categoryName: '橡胶制品',
    images: ['https://images.unsplash.com/photo-1554435493-93422e8220c8?w=800'],
    description: '儿童乐园安全橡胶地垫，缓冲性能好，色彩鲜艳，保障儿童活动安全。',
    specifications: {
      material: 'EPDM橡胶',
      thickness: '25mm',
      color: '多彩',
      certification: 'EN1177',
    },
  },
  {
    id: '6',
    name: '装饰线条系列',
    category: 'decoration',
    categoryName: '装饰材料',
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'],
    description: '精品装饰线条，PS环保材质，款式丰富，为空间增添精致细节。',
    specifications: {
      material: 'PS发泡',
      thickness: '多种规格',
      color: '纯白/仿木',
      style: '欧式/简约',
    },
  },
];

export const categories = [
  { id: 'vinyl-floor', name: '塑胶地板', icon: 'floor' },
  { id: 'rubber', name: '橡胶制品', icon: 'rubber' },
  { id: 'decoration', name: '装饰材料', icon: 'decoration' },
];
