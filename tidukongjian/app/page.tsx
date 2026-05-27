import Link from "next/link";

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
            src="/images/banner.png"
            alt="梯度空间 Banner"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Brand Introduction */}
      <div className="mx-auto max-w-7xl px-4 pb-12">
        <div className="flex items-start gap-4 mb-12">
          <div className="flex-shrink-0 w-2 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            梯度空间 · 不止于一方座位
          </h2>
        </div>

        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <p className="text-xl sm:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-relaxed">
            我们是智慧学习环境的构建者，更是学习者终身成长的陪伴者与赋能者
          </p>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed px-4">
            我们致力于打造以智能技术为基、以人文关怀为核的新一代学习空间。通过“有温度”的沉浸环境、“有态度”的服务关怀与“有梯度”的专业赋能，我们构建层次清晰、持续进化的成长支持体系，旨在赋能每一位使用者，使其潜能与效率得到最大化释放。
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">
          我们的服务
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Offline Product Card */}
          <Link href="/offline" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-pointer h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                线下产品
              </h3>
              <p className="text-gray-600 leading-relaxed">
                沉浸式学习空间，高能量学习氛围，守护式配套服务
              </p>
            </div>
          </Link>

          {/* Online Product Card */}
          <Link href="/online" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-pointer h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                线上产品
              </h3>
              <p className="text-gray-600 leading-relaxed">
                梯度助手聚合主流AI模型优势，提供一站式智能体验
              </p>
            </div>
          </Link>

          {/* Solutions Card */}
          <Link href="/solutions" className="group">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-white transition-all duration-300 cursor-pointer h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                解决方案
              </h3>
              <p className="text-gray-600 leading-relaxed">
                线上线下多种定制化解决方案，打造高品质AI自习室
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
