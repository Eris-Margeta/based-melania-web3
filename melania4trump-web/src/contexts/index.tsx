"use client";

import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Setup queryClient
const queryClient = new QueryClient();

export default function Web3ModalProvider({
	children,
	initialState,
}: {
	children: ReactNode;
	initialState?: any;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
