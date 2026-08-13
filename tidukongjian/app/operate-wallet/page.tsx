import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "创建并备份钱包 - 梯度空间",
};

export default function OperateWalletPage() {
  const workflows = [
    {
      title: "创建钱包",
      description:
        "首次使用时，通过夜莺钱包插件创建新钱包，设置钱包密码，并按提示完成初始化。",
      points: ["打开夜莺钱包插件", "选择创建钱包", "设置并确认钱包密码", "进入钱包首页确认地址已生成"],
    },
    {
      title: "查看钱包",
      description:
        "钱包创建完成后，可在插件内查看账户地址、余额和基础账户信息，后续充值和服务授权都会使用该钱包。",
      points: ["打开插件进入账户页", "核对当前钱包地址", "查看余额和账户状态", "复制地址时注意完整性"],
    },
    {
      title: "备份钱包",
      description:
        "备份是钱包安全的核心步骤。请在安全环境中查看助记词或私钥，并使用离线方式妥善保存。",
      points: ["进入钱包备份入口", "按要求输入钱包密码", "记录助记词或私钥", "确认备份内容保存完整且不外泄"],
    },
    {
      title: "导入钱包",
      description:
        "更换设备或恢复账户时，可通过已有助记词或私钥导入钱包。导入后请再次核对钱包地址。",
      points: ["选择导入钱包", "输入助记词或私钥", "设置本地钱包密码", "导入完成后核对账户地址"],
    },
  ];

  const safetyTips = [
    "不要把助记词、私钥、钱包密码发送给任何人。",
    "不要在截图、云文档或聊天软件中保存完整私钥。",
    "建议至少保留一份离线备份，并确认自己可以独立恢复钱包。",
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      <section className="mx-auto max-w-5xl px-4 pt-32 pb-12 text-center">
        <div className="mt-16">
          <p className="text-base font-bold text-blue-600 mb-3">夜莺钱包账户管理</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            创建并备份钱包
          </h1>
          <p className="text-base font-bold text-gray-900 mb-8">
            创建、查看、备份和导入钱包，确保账户可用且可恢复
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            钱包用于识别账户、管理余额和完成服务授权。创建完成后，请优先完成备份，再继续充值和创建令牌。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {workflows.map((workflow) => (
            <div
              key={workflow.title}
              className="rounded-xl border border-gray-200 bg-white/80 p-8 shadow-md backdrop-blur-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{workflow.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{workflow.description}</p>
              <ul className="space-y-3 text-gray-700">
                {workflow.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 pb-20">
        <div className="rounded-2xl bg-white/80 px-6 py-10 shadow-md backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">安全提醒</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {safetyTips.map((tip) => (
              <div key={tip} className="rounded-lg bg-white/70 p-5 text-gray-700 leading-relaxed">
                {tip}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/operate-router"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
            >
              下一步：充值并创建令牌
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
