'use client';

import { useState, useEffect } from "react";

export default function OfflinePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/images/study-room-4.jpg", alt: "自习室照片 1" },
    { src: "/images/study-room-2.jpg", alt: "自习室照片 2" },
    { src: "/images/study-room-3.jpg", alt: "自习室照片 3" },
    { src: "/images/study-room-1.jpg", alt: "自习室照片 4" },
    { src: "/images/study-room-5.jpg", alt: "自习室照片 5" },
  ];

  // 自动播放功能
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen relative">
      {/* Unified Gradient Background for entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-orange-100 via-pink-50 to-red-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-red-100 via-transparent to-orange-50 opacity-60 -z-10" />

      {/* Hero Text */}
      <div className="mx-auto max-w-7xl px-4 pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            线下产品
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            打造高品质的线下学习空间
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl">
            立即预约
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">沉浸式学习空间</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                精心设计的学习环境，让您专注于学习，远离干扰
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">高能量学习氛围</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                与志同道合的学习者一起，在积极向上的氛围中提升自己
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">守护式配套服务</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                从饮水到休息，从技术支持到学习辅导，全方位守护您的学习之旅
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Carousel Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            自习室实拍
          </h2>
          <div className="relative max-w-5xl mx-auto">
            {/* Carousel Container */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
              aria-label="上一张"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-900 w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
              aria-label="下一张"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentImageIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`查看第 ${index + 1} 张图片`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            配套服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "24小时开放", desc: "全天候为您提供学习空间" },
              { title: "高速Wi-Fi", desc: "千兆网络，流畅在线学习" },
              { title: "打印复印", desc: "便捷的文印服务" },
              { title: "茶水供应", desc: "免费茶水咖啡供应" },
              { title: "储物柜", desc: "安全的个人物品存储" },
              { title: "休息区", desc: "舒适的休息放松空间" },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
