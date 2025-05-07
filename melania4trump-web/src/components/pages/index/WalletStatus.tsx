import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import Image from "next/image";

type Props = {};

const WalletStatus = (props: Props) => {
	return (
		<Card className="bg-gray-700 bg-opacity-10 backdrop-blur">
			<CardHeader className="border-b p-4 ">
				<CardTitle className="flex items-center gap-2 ">
					<Icon
						icon={"solar:wallet-money-bold-duotone"}
						className="size-9 text-purple-500"
					/>{" "}
					<span>Join $MELANIA Presale</span>
				</CardTitle>
			</CardHeader>
			<CardContent className="pt-4 ">
				<span className="mt-2  text-gray-300 font-light  block text-sm">
					Presale Address:&nbsp;
					<span className="text-blue-500 underline underline-offset-2 text-lg ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://basescan.org/address/0xb1799cc6334726E28f1574B1CD1d5ea91658D0e5"
						>
							basedmelania.eth
						</a>
					</span>
				</span>
				<Image
					src={"/assets/images/qr-basedmelania-eth.webp"}
					className="rounded-2xl shadow-md shadow-blue-800	opacity-95 mx-auto w-full  md:max-w-[80%] my-12"
					width={200}
					height={200}
					alt="QR Code image for basedmelania.eth"
					loading="lazy"
				/>
				<span className="mt-2 text-gray-300 font-light prose-md">
					Send <u>any</u> amount of ETH (mainnet or Base) to the presale
					address.
					<br></br>
					$MELANIA tokens on Base will be dropped to your address immediately
					after presale.
					<br></br>-<br></br>
					Note* 100% of presale funds will be locked in the LP. If you
					don&apos;t want to wait for the airdrop, your address will be approved
					for spending under 48hrs.
				</span>
			</CardContent>
		</Card>
	);
};

export default WalletStatus;
