'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import AgentCustomContact from './AgentCustomContact';

export default function Navigation() {
  const pathname = usePathname();
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: '产品中心', path: '/product' },
    {
      name: '解决方案',
      path: '/solutions',
      hasDropdown: true,
      subItems: [
        { name: '新一代AI自习室解决方案', path: '/solutions/ai-study-room' },
        { name: '智能助手定制解决方案', path: '/solutions/ai-assistant' },
      ]
    },
    { name: '联系我们', path: '/contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center" style={{ backdropFilter: 'blur(10px)' }}>
      <nav className="flex items-center justify-between py-4 w-full px-5 lg:px-2 xl:w-5/6">
        <div className="flex lg:flex-1 items-center">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <img src="/favicon.ico" alt="梯度空间" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900 opacity-85">梯度空间</span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-8 text-base">
          <AgentCustomContact />
          {navItems.map((item) => (
            item.hasDropdown ? (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => setShowSolutionsMenu(true)}
                onMouseLeave={() => setShowSolutionsMenu(false)}
              >
                <button
                  className={`cursor-pointer px-3 py-2 font-semibold transition-colors duration-200 ${
                    pathname.startsWith(item.path)
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </button>
                {showSolutionsMenu && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                      {item.subItems?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          href={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`cursor-pointer px-3 py-2 font-semibold transition-colors duration-200 ${
                  pathname === item.path
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">打开主菜单</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-5 py-4 space-y-1">
              <div className="px-3 py-2">
                <AgentCustomContact />
              </div>
              {navItems.map((item) => (
                item.hasDropdown ? (
                  <div key={item.path} className="space-y-1">
                    <div className="block px-3 py-2 text-base font-semibold text-gray-900">
                      {item.name}
                    </div>
                    {item.subItems?.map((subItem) => (
                      <Link
                        key={subItem.path}
                        href={subItem.path}
                        className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`block px-3 py-2 text-base font-semibold ${
                      pathname === item.path ? 'text-gray-900' : 'text-gray-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
