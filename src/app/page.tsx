import { redirect } from 'next/navigation';

// This page handles the root path and redirects to default locale
export default function RootPage() {
  redirect('/vi');
} 