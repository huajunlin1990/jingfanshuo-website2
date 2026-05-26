export interface News {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'company' | 'industry';
}

export const news: News[] = [
  {
    id: '1',
    title: '晶凡硕荣获2024年度中国建材行业百强企业称号',
    date: '2024-03-15',
    excerpt: '我司凭借卓越的产品质量和服务水平，成功入选2024年度中国建材行业百强企业榜单。',
    content: '在刚刚结束的中国建材行业年度评选中，深圳市晶凡硕新材料科技有限公司凭借卓越的产品质量、完善的服务体系和良好的市场口碑，成功入选2024年度中国建材行业百强企业榜单。这是对公司多年来坚持品质第一、客户至上理念的最好肯定。',
    coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    category: 'company',
  },
  {
    id: '2',
    title: '新型环保塑胶地板研发成功，引领行业绿色发展',
    date: '2024-02-28',
    excerpt: '我司研发团队历时两年，成功推出全新一代环保塑胶地板，VOC释放量远低于国家标准。',
    content: '经过公司研发团队两年的不懈努力，全新一代环保塑胶地板正式面世。该产品采用创新配方，VOC释放量仅为国家标准的十分之一，真正实现了绿色环保。同时，产品在耐磨、防滑等性能方面也有显著提升，获得了多项国家专利。',
    coverImage: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
    category: 'company',
  },
  {
    id: '3',
    title: '2024年中国建筑装饰材料行业发展趋势分析',
    date: '2024-02-15',
    excerpt: '随着消费者对健康环保的重视，绿色建材将成为未来市场主流。',
    content: '近年来，随着消费者健康意识的提升和国家环保政策的推动，绿色建材市场呈现快速发展态势。据行业协会数据显示，2023年我国绿色建材市场规模突破5000亿元，预计2024年将保持15%以上的增速。环保、智能、定制化将成为行业发展的主要方向。',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    category: 'industry',
  },
  {
    id: '4',
    title: '晶凡硕与多家知名地产企业达成战略合作',
    date: '2024-01-20',
    excerpt: '新的一年，我司与万科、恒大、碧桂园等多家知名地产企业签署战略合作协议。',
    content: '在2024年初，我司成功与万科、恒大、碧桂园等多家国内知名地产企业签署了年度战略合作协议。根据协议，晶凡硕将为这些企业的全国项目提供优先供应和专属服务。这标志着公司在工程渠道的拓展迈上了新的台阶。',
    coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    category: 'company',
  },
  {
    id: '5',
    title: '塑胶地板在医疗领域的应用前景广阔',
    date: '2024-01-10',
    excerpt: '抗菌、易清洁的特性使塑胶地板成为医院装修的首选材料。',
    content: '在医疗环境中，地面材料的选择至关重要。塑胶地板因其抗菌、防滑、易清洁、脚感舒适等特性，正被越来越多的医院所采用。数据显示，2023年国内医院新建项目中，塑胶地板的使用率已超过70%，未来增长空间巨大。',
    coverImage: 'https://images.unsplash.com/photo-1516549655169-102d22c879c8?w=800',
    category: 'industry',
  },
];
