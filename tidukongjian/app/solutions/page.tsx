import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "解决方案 - 梯度空间",
  description: "线上线下融合的解决方案，系统化推进降本增效",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-cyan-100 via-transparent to-green-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            解决方案
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            线上线下融合，打造智慧学习生态
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            预约咨询
          </button>
        </div>
      </div>

      {/* Process Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            实施流程
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "需求调研", desc: "深入了解您的需求和痛点" },
              { step: "02", title: "方案设计", desc: "量身定制解决方案" },
              { step: "03", title: "实施部署", desc: "专业团队落地执行" },
              { step: "04", title: "持续优化", desc: "数据驱动不断改进" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-5xl font-bold text-green-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solutions Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-16">
            {/* Solution 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                线上线下融合解决方案
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                拓展你的学习空间
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">线下空间与线上平台无缝对接</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">学习数据实时同步与分析</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">智能学习路径规划</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">跨平台学习体验优化</span>
                </li>
              </ul>
            </div>

            {/* Solution 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                高品质服务标准
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                打造AI自习室服务标杆
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">标准化服务流程体系</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">专业团队培训认证</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">持续的服务质量监控</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">用户反馈快速响应机制</span>
                </li>
              </ul>
            </div>

            {/* Solution 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 sm:p-12 hover:bg-white hover:shadow-lg transition-all duration-300">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                降本增效方案
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                系统化推进战略优先级
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">AI赋能提升学习效率</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">智能资源调度与优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">数据驱动的决策支持</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  <span className="text-lg">规模化运营降低成本</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            适用行业
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "教育培训机构", icon: "🎓" },
              { name: "企业培训部门", icon: "🏢" },
              { name: "科研院所", icon: "🔬" },
              { name: "自习室运营商", icon: "📚" },
              { name: "在线教育平台", icon: "💻" },
              { name: "图书馆", icon: "📖" }
            ].map((industry, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
