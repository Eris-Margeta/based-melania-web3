import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BuyMeCoffee = () => {
  const coffees = [
    { value: "0.5", heading: "Tier 1", text: "Get exclusive whitelist for NFTs", scale: 1 },
    { value: "1.5", heading: "Tier 2", text: "(10 seats) Receive trading dividends FOREVER", scale: 4 },
    { value: "3", heading: "Tier 3", text: "(5 seats) Receive 2x trading dividends FOREVER", scale: 6 },
  ];
  const [selectedCoffee, setSelectedCoffee] = useState(coffees[0]);

  return (
    <Card className="bg-gray-700 bg-opacity-10 backdrop-blur">
      <CardHeader className="border-b p-4">
        <div className="mt-4 flex justify-center mb-8">
          
          <div className="flex justify-center mb-8 max-w-[85%] md:max-w-[60%] ">
							<video
								src="/melania-animated.mp4"
								className="w-full rounded-full"
								autoPlay
								loop
								muted
								playsInline
							/>
						</div>
        </div>
        <CardTitle className="flex items-center gap-2 pl-4 text-xl md:text-2xl">
          <span>Exclusive $MELANIA Presale!</span>
        </CardTitle>
        <CardContent>
          <div className="pt-2">
            <div className="-ml-1 font-bold">Tier Bonuses:</div>
            <div className="flex pt-4 md:flex items-center justify-center w-auto">
              {coffees.map((item) => {
                const { scale, value } = item;
                const isActive = value === selectedCoffee.value;
                return (
                  <div
                    key={value}
                    className="relative"
                    onClick={() => setSelectedCoffee(item)}
                  >
                    {isActive && (
                      <div className="w-full scale-110 rounded-xl h-full absolute gradient-animation z-0"></div>
                    )}
                    <div
                      className={cn(
                        "flex bg-gray-900 rounded-xl p-4 relative z-20 flex-col justify-center items-center w-fit cursor-pointer",
                        !isActive && "bg-transparent"
                      )}
                    >
                      <Image
                        src={"/assets/images/tiny-no-bg.webp"}
                        alt="Melania"
                        width={50 * scale}
                        height={100 * scale}
                        loading="lazy"

                      />
                      <span className="w-full text-nowrap flex text-left welcomeText2 !text-xl mt-4">
                        {item.heading}
                        <br></br>
                      </span>
                      <span className="welcomeText3 !text-lg text-nowrap lg:!text-xl">
                        {value} ETH
                      </span>
                      <span className="text-sm flex-row">
                        <span className="p-2 block text-center prose-sm ">
                          {item.text}
                          <br></br>
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
};

export default BuyMeCoffee;
