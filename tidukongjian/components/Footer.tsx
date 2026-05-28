export default function Footer() {
  return (
    <footer className="py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-gray-600 mb-2">梯度空间(杭州)科技有限公司</p>
        <p className="text-base text-gray-500">
          <a
            href="https://beian.miit.gov.cn/#/Integrated/index"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            浙ICP备2025164887号-2
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://beian.mps.gov.cn/#/query/webSearch?code=33019202002822"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <img src="/images/beian-badge.png" alt="公安备案图标" width="20" height="20" className="block" />
            <span>浙公网安备33019202002822号</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
