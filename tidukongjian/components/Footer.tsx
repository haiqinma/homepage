export default function Footer() {
  return (
    <footer className="py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-4 flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-left">
          <p className="text-gray-600 mb-6">@2026 梯度空间(杭州)科技有限公司</p>
          <div className="text-gray-500 space-y-2">
            <a
              href="https://beian.miit.gov.cn/#/Integrated/index"
              target="_blank"
              rel="noreferrer"
              className="block hover:text-blue-600 transition-colors"
            >
              浙ICP备2025164887号-2
            </a>
            <a
              href="https://beian.mps.gov.cn/#/query/webSearch?code=33019202002822"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              <img
                src="/images/police-icon.png"
                alt=""
                className="h-[1em] w-auto"
              />
              浙公网安备33019202002822号
            </a>
          </div>
        </div>

        <div className="space-y-2 text-left text-gray-600">
          <p>联系电话：17706514288</p>
          <p>邮箱：tidukongjian@163.com</p>
          <p>微信公众号：梯度空间</p>
          <p>小红书：梯度空间</p>
        </div>
      </div>
    </footer>
  );
}
