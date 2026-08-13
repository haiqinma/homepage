import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "产品试用 - 梯度空间",
};

type Step = {
  label: string;
  title: string;
  href?: string;
  description: ReactNode;
};

export default function TestDrivePage() {
  const steps: Step[] = [
    {
      label: "01",
      title: "安装夜莺钱包插件",
      href: "/install-wallet",
      description:
        "当前插件主要在 Chrome 浏览器中使用。用户可按网络环境选择应用商店安装或离线安装方式。",
    },
    {
      label: "02",
      title: "创建并备份钱包",
      href: "/operate-wallet",
      description:
        "钱包是使用服务的重要标识和凭据。创建后建议及时备份助记词或私钥，并妥善保存密码。",
    },
    {
      label: "03",
      title: "充值并创建令牌",
      href: "/operate-router",
      description:
        "通过 Router 服务进行充值，可按使用场景创建多个令牌，后续可通过web页面查询token消耗明细。",
    },
    {
      label: "04",
      title: "选择使用方式",
      description:
        <>
          业务集成可使用{" "}
          <a
            href="https://router.yeying.pub"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            Router
          </a>
          ；快速体验可使用{" "}
          <a
            href="https://chat.yeying.pub"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            Chat
          </a>
          ；需要文件存储和分享时可使用{" "}
          <a
            href="https://webdav.yeying.pub"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            WebDAV
          </a>
          。
        </>,
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      <section className="mx-auto max-w-5xl px-4 pt-40 pb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          试用流程
        </h2>
        <div className="space-y-5">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white/80 p-6 shadow-md backdrop-blur-sm sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white">
                {step.label}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.href ? (
                    <Link
                      href={step.href}
                      className="transition-colors hover:text-blue-600"
                    >
                      {step.title}
                    </Link>
                  ) : (
                    step.title
                  )}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
