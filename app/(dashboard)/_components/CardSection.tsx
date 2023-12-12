import Image from "next/image";
import wedding from "@/public/weeding.png";
import drink from "@/public/drink.png";
import chair from "@/public/chair.png";

const CardSection = () => {
  return (
    <div className="flex flex-col px-8 md:flex-row">
      <div className="flex  flex-col items-center justify-center px-4 py-4 text-center">
        <h1 className="py-4">WEDDINGS</h1>
        <div className="h-[300px] w-[300px]">
          <Image alt="wedding" src={wedding} className="rounded-full" />
        </div>
        <p className="py-2">
          With every last detail taken care of, we&apos;re here to ensure the
          day you&apos;ve always dreamed of will be the day you&apos;ll never
          forget.
        </p>
      </div>
      <div className="flex  flex-col items-center justify-center px-4 py-4 text-center">
        <h1 className="py-4">CORPORATE EVENTS</h1>
        <div className="h-[300px] w-[300px] ">
          <Image alt="drink" src={drink} className="rounded-full" />
        </div>
        <p className="py-2">
          Wow your guests with a unique corporate experience that aligns with
          your company&apos;s mission and elevates your brand.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-4 text-center">
        <h1 className="py-4">SOCIAL GATHERINGS</h1>
        <div className="h-[300px] w-[300px] ">
          <Image alt="chair" src={chair} className="rounded-full" />
        </div>
        <p className="py-2">
          From a show stopping engagement celebration to an epic surprise
          birthday party, you dream it and we`&apos;ll make it a reality.
        </p>
      </div>
    </div>
  );
};

export default CardSection;
