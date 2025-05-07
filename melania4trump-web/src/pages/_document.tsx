import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="dark min-w-0 sch">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="description" content="MAKE TRUMP FREE AGAIN" />
				<meta name="keywords" content="Based MELANIA, Base, Trump, $MELANIA, PolitiFi, memecoin" />
				<meta name="author" content="Based MELANIA Team" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://basedmelania.com" />
				<meta property="og:title" content="Based $MELANIA" />
				<meta property="og:description" content="MAKE TRUMP FREE AGAIN" />
				<meta property="og:image" content="https://basedmelania.com/og-image.png" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://basedmelania.com" />
				<meta property="twitter:title" content="Based $MELANIA" />
				<meta property="twitter:description" content="MAKE TRUMP FREE AGAIN" />
				<meta property="twitter:image" content="https://basedmelania.com/og-image.png" />
				<meta property="twitter:site" content="@0xBasedMelania" />

				<link rel="icon" href="/favicon.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
