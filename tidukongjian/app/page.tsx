import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            梯度空间 - <span className="text-blue-600">智慧学习空间</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
            有温度 有态度 有梯度
            <br />
            线上线下融合的学习解决方案，为您提供沉浸式学习体验
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-200 hover:shadow-xl">
            立即开始
          </button>
        </div>
      </div>

      {/* Banner Image */}
      <div className="mx-auto max-w-7xl px-4 pb-16">
        <div className="relative w-full">
          <img
            src="/images/banner.png"
            alt="梯度空间 Banner"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          我们的服务
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Offline Product Card */}
          <Link href="/offline" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                线下产品
              </h3>
              <p className="text-gray-600 leading-relaxed">
                沉浸式学习空间，高能量学习氛围，守护式配套服务
              </p>
            </div>
          </Link>

          {/* Online Product Card */}
          <Link href="/online" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                线上产品
              </h3>
              <p className="text-gray-600 leading-relaxed">
                梯度助手聚合主流AI模型，一站式智能体验
              </p>
            </div>
          </Link>

          {/* Solutions Card */}
          <Link href="/solutions" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                解决方案
              </h3>
              <p className="text-gray-600 leading-relaxed">
                线上线下融合，打造AI自习室高品质服务标准
              </p>
            </div>
          </Link>

          {/* Contact Card */}
          <Link href="/contact" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                联系我们
              </h3>
              <p className="text-gray-600 leading-relaxed">
                期待与您交流，为您提供最适合的学习解决方案
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
