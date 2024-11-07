import { RiArrowRightLine } from "@remixicon/react";
import Image from "next/image";

const Challenge2 = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg max-w-[340px] shadow-sm-secondary">
      <div className="relative h-[288px] w-full overflow-hidden rounded-tl-lg rounded-tr-lg">
        <Image
          src="/spacejoy-YqFz7UMm8qE-unsplash.jpg"
          alt="avatar"
          fill
          className="object-cover h-[288px] w-full"
        />
      </div>
      <div className="flex flex-col gap-4 py-6 px-4">
        <div className="flex flex-col gap-2">
          <div className="px-2 py-px bg-green-50 border border-green-200 rounded-full text-sm text-green-700 w-fit">
            Interior
          </div>
          <h4 className="text-lg font-semibold text-neutral-900">
            Top 5 Living Room Inspirations
          </h4>
        </div>
        <div className="flex flex-col gap-6">
          <h6 className="text-base text-neutral-600">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </h6>
          <button className="flex items-center gap-1.5 text-base rounded-[4px] text-indigo-700 transition-colors hover:text-indigo-800 focus:text-indigo-800 focus:shadow-button-focus disabled:text-neutral-400">
            Read more <RiArrowRightLine size={20} className="text-indigo-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge2;
