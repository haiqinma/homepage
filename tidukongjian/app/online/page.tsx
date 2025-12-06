import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "线上产品 - 梯度空间",
  description: "梯度助手 - 专为追求高效的个人学习者、研究者及企业团队打造",
};

export default function OnlinePage() {
  const features = [
    { title: "无限对话", description: "不限次数的AI对话，随时随地解答您的问题" },
    { title: "云端存储", description: "对话记录云端保存，多设备同步访问" },
    { title: "按需使用", description: "灵活的使用方式，按需选择不同的AI模型" },
    { title: "平衡成本与效果", description: "合理的定价策略，最优的性价比" }
  ];

  const aiModels = [
    { name: "GPT-4", desc: "OpenAI 最强大的语言模型" },
    { name: "Claude", desc: "Anthropic 的对话式AI助手" },
    { name: "文心一言", desc: "百度出品的中文大语言模型" },
    { name: "通义千问", desc: "阿里云推出的AI助手" },
    { name: "智谱清言", desc: "清华技术支持的AI模型" },
    { name: "Gemini", desc: "Google 的多模态AI" },
  ];

  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-100 via-sky-50 to-blue-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-blue-100 via-transparent to-indigo-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            梯度助手
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            专为追求高效的个人学习者、研究者及企业团队打造
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
            立即体验
          </button>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              一站式智能学习体验
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                梯度助手深度聚合国内外主流AI模型优势，提供<strong className="text-blue-600">一站式</strong>智能体验。无需切换平台，即可按需调用最佳模型，获取更精准、全面的答案。
              </p>
              <p>
                产品具备<strong className="text-blue-600">开箱即用</strong>的便捷性，并支持<strong className="text-blue-600">私有化部署</strong>，确保企业数据绝对安全。内置强大的<strong className="text-blue-600">知识库管理</strong>功能，可对接企业内部文档，打造专属知识大脑，提升研究与办公效率。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            支持的AI模型
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{model.name}</h3>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            持续接入更多优质AI模型...
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            应用场景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">个人学习</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 知识点解答</li>
                <li>• 论文写作辅助</li>
                <li>• 语言学习练习</li>
                <li>• 编程代码帮助</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">科研工作</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 文献调研</li>
                <li>• 数据分析</li>
                <li>• 实验设计</li>
                <li>• 报告撰写</li>
              </ul>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">企业应用</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 知识库管理</li>
                <li>• 客户服务</li>
                <li>• 内容创作</li>
                <li>• 业务分析</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
