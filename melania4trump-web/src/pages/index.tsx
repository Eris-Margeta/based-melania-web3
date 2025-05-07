import Head from "next/head";
import BuyMeCoffee from "@/components/pages/index/BuyMeCoffee";
import WalletStatus from "@/components/pages/index/WalletStatus";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Head>
				<title>Based $MELANIA</title>
				<meta name="description" content="MAKE TRUMP FREE AGAIN" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div
				className={`flex min-h-screen flex-col items-center justify-between`}
			>
				<div className="w-full absolute h-screen -z-100">
					<Image
						src={"/assets/images/mel-universe.webp"}
						className="Images_hollowplanets__NOFlf"
						width={1300}
						height={1300}
						alt="universe"
						loading="eager"
					/>
					<div className="planet">
						<Image
							src={"/assets/images/planet.svg"}
							className="Images_bigplanet__LgSiS"
							width={200}
							height={200}
							alt="Moon"
							loading="eager"

						/>
					</div>
					<Image
						src={"/assets/images/planet.svg"}
						className="Images_smallplanet__JD3DP"
						width={200}
						height={200}
						alt="planet image"
						loading="eager"

					/>
				</div>
				<div className=" relative z-100 mt-24 max-w-[800px] justify-center ">
					<div className="flex justify-center mb-8">
						<div className="hidden lg:block">
							<Image
								src={"/assets/images/hero.webp"}
								className=""
								width={1200}
								height={630}
								alt="Based $MELANIA"
								loading="eager"
							/>
						</div>
						<div className="block lg:hidden top-0">
							<Image
								src={"/assets/images/mobilehero.webp"}
								className=""
								width={1200}
								height={1200}
								alt="Based $MELANIA"
								loading="eager"
							/>
						</div>
					</div>
				</div>
				<div className="container h-screen relative z-100 mt-40 max-w-[700px] justify-center px-2 md:px-8">
					<div className="mb-12 md:mb-12 ">
						<h1 className="welcomeText px-4">Based $MELANIA</h1>
						<p className="font-bold mt-2 text-white px-4">
							From EUROPE to WASHINGTON.D.C &rarr; MAKE TRUMP FREE AGAIN !
							<span className="mt-2 mb-4 text-lg prose-md block text-gray-200 font-light">
								Launching $MELANIA coin on Base and a collection of 16 exclusive
								NFTs.
							</span>
							<span className="mt-2  text-gray-300 font-light  text-base">
								Network: BASE<br></br>
								Ticker: $MELANIA | Based Melania<br></br>
								Category: PolitiFi<br></br>
								Total supply: 47 million<br></br>
								Tokenomics: deflationary shrinking<br></br>
								Transaction tax: 2%<br></br>
								50% of tax is burned into LP<br></br>
								50% of tax is distributed as dividends<br></br>
								Dividend collectors: all &gt;1% holders<br></br>-<br></br>
							</span>
							<span className="mt-2  text-gray-300 font-light  block text-sm overflow-clip">
								CA:&nbsp;
								<span className="text-blue-500 underline underline-offset-2 text-lg ">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://basescan.org/token/0xEB14eB409E6C8FC3f62Ad80b7865bC04CDB6c8F2"
									>
										0xEB14eB409E6C8FC3f62Ad80b7865bC04CDB6c8F2
									</a>
								</span>
							</span>
							<span className="mt-2  text-gray-300 font-light  block text-sm">
								Presale Address:&nbsp;
								<span className="text-blue-500 underline underline-offset-2 text-lg ">
									<a
										target="_blank"
										rel="noopener noreferrer"
										href="https://etherscan.io/address/0xb1799cc6334726E28f1574B1CD1d5ea91658D0e5"
									>
										basedmelania.eth
									</a>
								</span>
							</span>
						</p>
						<Link href="https://x.com/0xBasedMelania" passHref legacyBehavior>
							<a target="_blank" rel="noopener noreferrer">
								<Button variant="glass" className="mt-8 gap-4">
									<Icon icon="ph:x-logo" className="size-6" />
									Twitter
								</Button>
							</a>
						</Link>
						<Link href="https://t.me/BasedMelania" passHref legacyBehavior>
							<a target="_blank" rel="noopener noreferrer">
								<Button variant="glass" className="mt-4 gap-4 ml-2">
									<Icon icon="ph:telegram-logo" className="size-6" />
									Telegram
								</Button>
							</a>
						</Link>
					</div>
					<div className="mt-4">
						<WalletStatus />
					</div>

					<div className="">
						<Tabs defaultValue="matic" className="mt-12 ">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="matic">$MELANIA</TabsTrigger>
								<TabsTrigger value="contract">NFTs / Coming Soon</TabsTrigger>
							</TabsList>
							<TabsContent value="matic">
								<div className="mt-4 ">
									<BuyMeCoffee />
								</div>
							</TabsContent>
							<TabsContent value="contract">
								<div className="h-[800px]"></div>
							</TabsContent>
						</Tabs>
						<div className="h-52"></div>
					</div>
				</div>
			</div>
		</>
	);
}
