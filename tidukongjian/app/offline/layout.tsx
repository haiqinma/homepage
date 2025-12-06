import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "线下产品 - 梯度空间",
  description: "沉浸式学习空间，高能量学习氛围，守护式配套服务",
};

export default function OfflineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
