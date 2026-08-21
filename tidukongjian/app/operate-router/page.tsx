import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "充值并创建令牌 - 梯度空间",
};

export default function OperateRouterPage() {
  const steps = [
    {
      title: "登录并授权",
      description:
        "进入 Router 服务后，通过夜莺钱包完成登录或授权，确保当前钱包地址与准备充值的钱包一致。",
    },
    {
      title: "完成充值",
      description:
        "在充值入口选择金额并按页面提示完成支付或链上确认。充值完成后，返回账户页核对余额。",
    },
    {
      title: "创建访问令牌",
      description:
        "按项目、成员或用途创建不同令牌，便于后续区分调用来源和控制使用范围。令牌创建后请及时保存。",
    },
    {
      title: "查询与管理",
      description:
        "通过 Router 页面查询 token 消耗明细、调用记录和消费日志。如令牌不再使用，可及时删除或停用。",
    },
  ];

  const usageNotes = [
    ["按用途拆分", "为测试、生产、不同项目分别创建令牌，避免所有调用共用同一凭据。"],
    ["及时核对余额", "充值后先确认账户余额，再把令牌配置到业务系统中。"],
    ["保存调用记录", "通过日志查看调用量和费用，有助于定位异常消耗和评估成本。"],
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 opacity-80 -z-10" />
      <div className="fixed inset-0 bg-gradient-to-tl from-purple-100 via-transparent to-cyan-50 opacity-60 -z-10" />

      <section className="mx-auto max-w-5xl px-4 pt-32 pb-12 text-center">
        <div className="mt-16">
          <p className="text-base font-bold text-blue-600 mb-3">Router 服务配置</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            充值并创建令牌
          </h1>
          <p className="text-base font-bold text-gray-900 mb-8">
            账户充值，令牌管理，明细查询
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Router支持多令牌创建，可根据业务场景创建不同令牌，可通过页面查看调用与消费情况。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">操作流程</h2>
        <div className="space-y-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white/80 p-6 shadow-md backdrop-blur-sm sm:flex-row sm:items-start"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-base font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 pb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">使用建议</h2>
        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white/80 backdrop-blur-sm shadow-md">
          <table className="w-full border-collapse text-base text-gray-700">
            <tbody>
              {usageNotes.map(([title, description]) => (
                <tr key={title} className="border-b border-gray-200 last:border-b-0">
                  <td className="w-32 px-5 py-4 font-bold text-gray-900">{title}</td>
                  <td className="px-5 py-4">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://router.yeying.pub"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-700"
          >
            打开 Router
          </a>
        </div>
      </section>
    </div>
  );
}
