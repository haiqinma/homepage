import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "安装夜莺钱包插件 - 梯度空间",
};

export default function InstallWalletPage() {
  const installOptions = [
    {
      title: "在线安装",
      description:
        "适合可以访问 Chrome 应用商店的用户。进入夜莺钱包插件页面后，选择添加到 Chrome，并在浏览器提示中确认安装。",
      steps: ["打开 Chrome 应用商店插件页面", "点击添加到 Chrome", "在弹窗中确认添加扩展程序", "安装完成后在扩展管理中固定插件"],
    },
    {
      title: "离线安装",
      description:
        "适合无法访问应用商店或需要手动安装的用户。下载插件压缩包后解压，并通过浏览器扩展管理页面加载。",
      steps: ["下载并解压夜莺钱包插件包", "打开 Chrome 扩展程序管理页面", "开启开发者模式", "选择加载已解压的扩展程序并选择插件目录"],
    },
  ];

  const checks = [
    "建议使用 Chrome 浏览器或兼容 Chromium 内核的浏览器。",
    "插件安装后，可将夜莺钱包固定到浏览器工具栏，后续创建钱包和签名更方便。",
    "如果离线安装后插件未出现，请确认选择的是解压后的插件目录，而不是压缩包文件。",
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      <section className="mx-auto max-w-5xl px-4 pt-32 pb-12 text-center">
        <div className="mt-16">
          <p className="text-base font-bold text-blue-600 mb-3">夜莺钱包准备工作</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            安装夜莺钱包插件
          </h1>
          <p className="text-base font-bold text-gray-900 mb-8">
            选择在线安装或离线安装，完成后即可继续创建钱包
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            夜莺钱包是使用平台服务的重要入口。首次试用前，请先完成浏览器插件安装，并确认插件可以正常打开。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {installOptions.map((option) => (
            <div
              key={option.title}
              className="rounded-xl border border-gray-200 bg-white/80 p-8 shadow-md backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{option.description}</p>
              <ol className="space-y-3 text-gray-700">
                {option.steps.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 pb-20">
        <div className="rounded-2xl bg-white/80 px-6 py-10 shadow-md backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">安装后检查</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {checks.map((check) => (
              <div key={check} className="rounded-lg bg-white/70 p-5 text-gray-700 leading-relaxed">
                {check}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/operate-wallet"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              下一步：创建并备份钱包
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
