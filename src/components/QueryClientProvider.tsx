"use client";

import { useState } from "react";
import {
  QueryClientProvider as TanstackQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

export default function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Crée le client une seule fois pour toute l’app
  const [client] = useState(() => new QueryClient());

  return (
    <TanstackQueryClientProvider client={client}>
      {children}
    </TanstackQueryClientProvider>
  );
}
