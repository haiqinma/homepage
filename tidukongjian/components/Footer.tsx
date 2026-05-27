export default function Footer() {
  return (
    <footer className="py-12 mt-auto">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-gray-600 mb-2">© 2025 梯度空间</p>
        <p className="text-gray-500 text-sm">
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
            className="hover:text-blue-600 transition-colors"
          >
            浙公网安备33019202002822号
          </a>
        </p>
      </div>
    </footer>
  );
}
