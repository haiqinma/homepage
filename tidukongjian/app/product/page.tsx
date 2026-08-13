import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "产品中心 - 梯度空间",
};

export default function ProductPage() {
  const aiModels = [
    {
      name: "通义千问",
      desc: "阿里云推出的AI助手",
      icon: "https://img.alicdn.com/imgextra/i4/O1CN01Ue4htA1hduZMvHQlx_!!6000000004301-2-tps-270-90.png",
    },
    {
      name: "豆包",
      desc: "字节跳动AI对话助手",
      icon: "https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png",
    },
    {
      name: "腾讯混元",
      desc: "腾讯自研大语言模型",
      icon: "https://cloud.tencent.com/favicon.ico",
    },
  ];

  const featureRows = [
    ["开箱即用", "注册即用，网页端随时调用"],
    ["成本透明", "实时日志溯源，每笔消费精确到Token，对账清晰无忧"],
    ["高性价比", "聚合渠道优势，显著降低调用成本，让预算发挥最大价值"],
    ["隐私安全", "数据独立存储，全链路加密传输，企业核心资产绝对隔离"],
    ["灵活调用", "一次集成，覆盖全球主流大模型，不再受限于单一厂商"],
    ["稳定可靠", "企业级高可用架构，毫秒级响应，保障业务平稳运行"],
  ];

  const productImages = [
    "/images/product-pic01.png",
    "/images/product-pic02.png",
    "/images/product-pic02.png",
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      <div className="mx-auto max-w-7xl px-4 pt-28 pb-4">
        <img
          src="/images/product-top.png"
          alt="产品中心"
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </div>

      <section className="mx-auto max-w-5xl px-4 pb-12 text-center">
        <Link
          href="/test-drive"
          className="text-base text-blue-600 hover:text-blue-700 transition-colors"
        >
          立即体验
        </Link>

        <div className="mt-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            AI聚合平台
          </h1>
          <p className="text-base font-bold text-gray-900 mb-8">
            一次集成，全域调用
          </p>
          <div className="text-base text-gray-700 leading-relaxed space-y-2">
            <p>梯度AI聚合平台是专为效率而生的AI模型中转枢纽</p>
            <p>
              通过屏蔽了底层多厂商的复杂差异，向上提供统一、简洁、可靠的API服务，让您轻松驾驭全球顶尖AI力量
            </p>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            支持的AI模型
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiModels.map((model) => (
              <div
                key={model.name}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={model.icon}
                    alt={model.name}
                    className={`object-contain ${
                      model.name === "通义千问" ? "w-32 h-16" : "w-16 h-16"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {model.name}
                </h3>
                <p className="text-gray-600">{model.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8 text-lg">
            持续接入更多优质AI模型...
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md">
          <table className="w-full border-collapse text-base text-gray-700">
            <tbody>
              {featureRows.map(([title, description]) => (
                <tr key={title} className="border-b border-gray-200 last:border-b-0">
                  <td className="w-32 px-5 py-4 font-bold text-gray-900">
                    {title}
                  </td>
                  <td className="px-5 py-4">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 space-y-10">
        {productImages.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt={`产品展示 ${index + 1}`}
            className="mx-auto w-full h-auto rounded-2xl shadow-md"
          />
        ))}
      </section>
    </div>
  );
}
