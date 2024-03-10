import React from "react";

export default function Home({ children }: { children: React.ReactNode }) {
	return <main className="max-w-7xl mx-auto">{children}</main>;
}
