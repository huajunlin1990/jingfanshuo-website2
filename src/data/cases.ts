export interface Case {
  id: string;
  title: string;
  type: string;
  images: string[];
  description: string;
  location: string;
  year: string;
  products: string[];
}

export const cases: Case[] = [
  {
    id: '1',
    title: '深圳宝安国际机场T3航站楼',
    type: '交通枢纽',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800'],
    description: '为深圳宝安国际机场T3航站楼提供大面积塑胶地板解决方案，总面积超过50000平米，满足高流量、高耐磨的使用需求。',
    location: '深圳',
    year: '2020',
    products: ['1', '4'],
  },
  {
    id: '2',
    title: '北京大学深圳医院',
    type: '医疗健康',
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800'],
    description: '为北京大学深圳医院提供医疗专用抗菌塑胶地板，环保安全，易于清洁消毒。',
    location: '深圳',
    year: '2021',
    products: ['1'],
  },
  {
    id: '3',
    title: '深圳万象城购物中心',
    type: '商业空间',
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800'],
    description: '深圳万象城购物中心整体地面解决方案，高端大气，经久耐用。',
    location: '深圳',
    year: '2019',
    products: ['1', '6'],
  },
  {
    id: '4',
    title: '深圳体育中心游泳馆',
    type: '运动场馆',
    images: ['https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800'],
    description: '专业防滑橡胶地板，适用于潮湿环境，保障运动安全。',
    location: '深圳',
    year: '2022',
    products: ['2', '5'],
  },
  {
    id: '5',
    title: '华为总部研发中心',
    type: '办公空间',
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'],
    description: '为华为总部研发中心提供防静电地板和整体办公空间装饰方案。',
    location: '深圳',
    year: '2021',
    products: ['3', '4', '6'],
  },
  {
    id: '6',
    title: '深圳实验学校',
    type: '教育机构',
    images: ['https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800'],
    description: '深圳实验学校整体校园地面解决方案，环保安全，色彩丰富。',
    location: '深圳',
    year: '2020',
    products: ['1', '5'],
  },
];
