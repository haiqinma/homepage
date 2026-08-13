export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      {/* Banner Image */}
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24">
        <div className="relative w-full">
          <img
            src="/images/homepage-top.png"
            alt="产品体验"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Brand Introduction */}
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <div className="flex items-start gap-4 mb-12">
          <div className="flex-shrink-0 w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <a
            href="https://wiki.yeying.pub/shelves/3c59d"
            target="_blank"
            rel="noreferrer"
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight hover:text-blue-600 transition-colors"
          >
            产品体验
          </a>
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-center text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-10">
            AI聚合平台
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8">
            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  成本透明，有迹可循
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  实时日志记录，每一笔消费清晰可查
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  极致性价比，实惠看得见
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  更低的成本，享受更丰富的AI能力
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  数据隔离，安全无忧
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  独立数据空间，全链路隐私防护
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gray-900"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  一平台融通，随需调用
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  告别多平台切换，一个集成入口，轻松调度全球主流AI大模型
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          应用场景
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img
            src="/images/homepage-scene-study.png"
            alt="学习场景"
            className="w-full h-auto rounded-2xl shadow-md"
          />
          <img
            src="/images/homepage-scene-work.png"
            alt="工作场景"
            className="w-full h-auto rounded-2xl shadow-md"
          />
          <img
            src="/images/homepage-scene-life.png"
            alt="生活场景"
            className="w-full h-auto rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
