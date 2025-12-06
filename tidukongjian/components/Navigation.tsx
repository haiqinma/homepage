'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: '线下产品', path: '/offline' },
    { name: '线上产品', path: '/online' },
    { name: '解决方案', path: '/solutions' },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center" style={{ backdropFilter: 'blur(10px)' }}>
      <nav className="flex items-center justify-between py-4 w-full px-5 lg:px-2 xl:w-5/6">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="flex items-center cursor-pointer">
            <span className="text-xl font-bold text-gray-900 opacity-85">梯度空间</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 text-base">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`cursor-pointer opacity-85 transition-colors duration-200 ${
                pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
          >
            <span className="sr-only">打开主菜单</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
