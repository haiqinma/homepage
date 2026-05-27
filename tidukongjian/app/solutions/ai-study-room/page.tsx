export default function AIStudyRoomPage() {
  const softwareFeatures = [
    {
      title: "小程序",
      subtitle: "智能化座位管理 · 自动化运营",
      desc: "自习室小程序为商家打造了一个集智能管理、精准营销、数据驱动于一体的综合工具。"
    },
    {
      title: "管理平台",
      subtitle: "一站式全局掌控 · 智能化营销工具",
      desc: "可实现从\"被动处理事务\"到\"主动优化经营\"的跨越，是提升盈利能力与市场竞争力的核心引擎。"
    },
    {
      title: "梯度助手",
      subtitle: "引导型工具 · 人工智能交互",
      desc: "在显著降低运营成本的同时，提升服务标准与客户体验，为用户提供更精准高效的学习伴侣。"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-100 via-teal-50 to-cyan-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-cyan-100 via-transparent to-green-50 opacity-60 -z-10" />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-12">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            新一代AI自习室解决方案
          </h1>
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-6">
            一站式打造高品质 · AI智能管理自习室
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              梯度空间以科技赋能学习环境，通过自主研发的智能预约系统、智能电源控制系统等软件，与智能门禁、灯光、储物柜等硬件深度融合，为运营者提供高效管理工具。同时提供专业的空间设计与装修服务，共同打造静谧、舒适、高效的沉浸式自习场所，助力每一位学习者专注前行、成就梦想。
            </p>
          </div>
        </div>
      </div>

      {/* Intelligent Products Title */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              （一）智能化产品
            </h2>
          </div>
        </div>
      </section>

      {/* Software Systems */}
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              01 软件系统
            </h3>
            <p className="text-xl text-gray-700 mb-2">
              为商家与用户实现无人自动化运营与操作
            </p>
            <div className="flex justify-center gap-8 text-lg text-gray-600">
              <span>· 有效提升用户消费体验</span>
              <span>· 助力商家实现降本增效</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {softwareFeatures.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
                <h4 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h4>
                <p className="text-green-600 font-medium mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/intelligent-products.png"
              alt="智能化产品"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Supporting Equipment */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              02 配套装备
            </h3>
            <div className="space-y-2 text-lg text-gray-700">
              <p>为商家实现“无人化”运营和成本控制</p>
              <p>为用户提供“无缝化”的自由体验和安全保障</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/supporting-equipment.png"
              alt="配套装备"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            专业化服务
          </h2>
          <div className="space-y-8">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/professional-service-1.png"
                alt="专业化服务1"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/professional-service-2.png"
                alt="专业化服务2"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
