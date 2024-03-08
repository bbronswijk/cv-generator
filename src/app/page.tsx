"use client";

import dynamic from "next/dynamic";

const ClientPdf = dynamic(() => import('./pdf'), {
  ssr: false,
});

export default function HomePage() {
  return <ClientPdf />;
}