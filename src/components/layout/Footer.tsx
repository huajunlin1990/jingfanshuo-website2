import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { companyInfo } from '../../data/company';

const quickLinks = [
  { name: '公司简介', path: '/about' },
  { name: '发展历程', path: '/about' },
  { name: '服务网络', path: '/contact' },
  { name: '招贤纳士', path: '/contact' },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">晶</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.shortName}</h3>
                <p className="text-xs text-gray-300">新材料科技</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">快速链接</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">产品中心</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
                  塑胶地板
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
                  橡胶制品
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">
                  装饰材料
                </Link>
              </li>
              <li>
                <Link to="/cases" className="text-gray-300 hover:text-white transition-colors duration-300">
                  工程案例
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">联系我们</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-gray-300">{companyInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyInfo.name} 版权所有
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">
                隐私政策
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                使用条款
              </a>
              <a href="#" className="hover:text-white transition-colors duration-300">
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
