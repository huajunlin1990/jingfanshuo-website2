import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/common/Section';
import { SectionTitle } from '../components/common/Section';
import { Button } from '../components/common/Button';
import { companyInfo } from '../data/company';
import { Phone, Mail, MapPin, Clock, Send, User } from 'lucide-react';
import SEO from '../components/common/SEO';
import { useForm, validators } from '../hooks/useForm';
import { Input, TextArea } from '../components/common/FormFields';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    getFieldProps,
    handleSubmit,
    reset,
  } = useForm<FormData>({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
    validationRules: {
      name: [validators.required('请输入您的姓名'), validators.minLength(2, '姓名至少2个字符')],
      phone: [validators.required('请输入手机号码'), validators.phone('请输入有效的手机号码')],
      email: [validators.email('请输入有效的邮箱地址')],
      message: [validators.required('请输入留言内容'), validators.minLength(10, '留言内容至少10个字符')],
    },
    onSubmit: async (_values) => {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    },
  });

  return (
    <>
      <SEO
        title="联系我们"
        description="联系深圳市晶凡硕新材料科技有限公司，获取产品报价和技术支持。我们的专业团队将为您提供最佳的装饰材料解决方案。"
        canonical="/contact"
      />

      <section className="relative bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            联系我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-lg"
          >
            期待与您的合作
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle
              subtitle="联系方式"
              title="与我们取得联系"
              align="left"
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              无论您有任何问题或合作意向，都欢迎随时与我们联系。
              我们的专业团队将在第一时间为您提供服务。
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-accent/20 transition-colors duration-300">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">公司地址</h4>
                  <p className="text-gray-600">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-accent/20 transition-colors duration-300">
                  <Phone className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">联系电话</h4>
                  <p className="text-gray-600">{companyInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-accent/20 transition-colors duration-300">
                  <Mail className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">电子邮箱</h4>
                  <p className="text-gray-600">{companyInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 hover:bg-accent/20 transition-colors duration-300">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">工作时间</h4>
                  <p className="text-gray-600">周一至周五 9:00 - 18:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-2xl font-bold text-primary mb-6">在线留言</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-primary mb-2">提交成功！</h4>
                  <p className="text-gray-600">我们会尽快与您取得联系</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    id="name"
                    label="您的姓名 *"
                    placeholder="请输入您的姓名"
                    icon={<User className="w-5 h-5" />}
                    value={values.name}
                    onChange={(e) => getFieldProps('name').onChange(e.target.value)}
                    onBlur={getFieldProps('name').onBlur}
                    error={touched.name ? errors.name : undefined}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      id="phone"
                      label="联系电话 *"
                      type="tel"
                      placeholder="请输入您的电话"
                      icon={<Phone className="w-5 h-5" />}
                      value={values.phone}
                      onChange={(e) => getFieldProps('phone').onChange(e.target.value)}
                      onBlur={getFieldProps('phone').onBlur}
                      error={touched.phone ? errors.phone : undefined}
                    />
                    <Input
                      id="email"
                      label="电子邮箱"
                      type="email"
                      placeholder="请输入您的邮箱"
                      icon={<Mail className="w-5 h-5" />}
                      value={values.email}
                      onChange={(e) => getFieldProps('email').onChange(e.target.value)}
                      onBlur={getFieldProps('email').onBlur}
                      error={touched.email ? errors.email : undefined}
                    />
                  </div>

                  <TextArea
                    id="message"
                    label="留言内容 *"
                    rows={5}
                    placeholder="请描述您的需求或问题"
                    value={values.message}
                    onChange={(e) => getFieldProps('message').onChange(e.target.value)}
                    onBlur={getFieldProps('message').onBlur}
                    error={touched.message ? errors.message : undefined}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        提交中...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        提交留言
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Section>

      <div className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p>地图位置</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
