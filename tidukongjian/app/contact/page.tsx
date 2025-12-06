'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('感谢您的留言！我们会尽快与您联系。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-100 via-indigo-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-pink-100 via-transparent to-purple-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            联系我们
          </h1>
          <p className="text-2xl text-gray-700">
            期待与您携手，共创智慧学习新未来
          </p>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                联系方式
              </h2>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">邮箱</h3>
                  <p className="text-gray-600">contact@tidukongjian.com</p>
                  <p className="text-gray-600">support@tidukongjian.com</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">电话</h3>
                  <p className="text-gray-600">400-XXX-XXXX</p>
                  <p className="text-gray-600 text-sm">工作时间：周一至周日 9:00-21:00</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">地址</h3>
                  <p className="text-gray-600">待填写</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  新媒体矩阵
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 hover:bg-white transition-colors duration-200">
                      <span className="text-gray-500 text-sm font-medium">微信公众号</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 hover:bg-white transition-colors duration-200">
                      <span className="text-gray-500 text-sm font-medium">小红书</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 hover:bg-white transition-colors duration-200">
                      <span className="text-gray-500 text-sm font-medium">抖音</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                在线留言
              </h2>
              <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-xl p-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="请输入您的姓名"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="请输入您的邮箱"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="请输入您的电话"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    公司/机构
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="请输入您的公司或机构名称"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    留言内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-200"
                    placeholder="请输入您的留言内容"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  提交留言
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            常见问题
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "如何预约参观线下学习空间？",
                a: "您可以通过电话、邮箱或在线留言的方式联系我们，我们会尽快安排专人与您对接，确定参观时间。"
              },
              {
                q: "梯度助手支持哪些AI模型？",
                a: "我们支持包括GPT-4、Claude、文心一言、通义千问等多个主流AI模型，并持续接入更多优质模型。"
              },
              {
                q: "是否提供企业定制服务？",
                a: "是的，我们为企业提供定制化解决方案，包括私有化部署、知识库管理、专属培训等服务。"
              },
              {
                q: "如何获取更多产品信息？",
                a: "您可以关注我们的微信公众号、小红书或抖音账号，获取最新的产品动态和活动信息。"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
