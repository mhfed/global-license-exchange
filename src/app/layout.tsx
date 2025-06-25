import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

// This layout only renders the children as the actual layout is in [locale]/layout.tsx
export default function RootLayout({ children }: Props) {
  return children;
}
