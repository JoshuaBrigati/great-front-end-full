import Image from "next/image";
import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXFill
} from "@remixicon/react";

const Challenge3 = () => {
  return (
    <div className="flex flex-col gap-10 bg-white rounded-lg py-6 px-4 max-w-[340px] shadow-sm-secondary">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/profile.png"
          alt="avatar"
          width={64}
          height={64}
        />
        <div className="flex flex-col items-center gap-1">
          <h4 className="text-xl font-[500] text-neutral-900">Sarah Dole</h4>
          <h6 className="text-sm text-neutral-600">Front End Engineer @ Microsoft</h6>
        </div>
        <p className="text-base text-neutral-600 text-center">
          I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <button className="w-full h-11 rounded-[4px] bg-indigo-700 shadow-sm-secondary text-white text-base font-[500] transition-colors hover:bg-indigo-800 focus:bg-indigo-800 focus:shadow-button-focus disabled:bg-neutral-100 disabled:text-neutral-400">
          Contact me
        </button>
        <div className="w-full flex justify-center gap-4">
          <button className="p-2 rounded-[4px] transition-colors hover:bg-neutral-50 focus:shadow-button-focus">
            <RiGithubFill size={20} className="text-indigo-700" />
          </button>
          <button className="p-2 rounded-[4px] transition-colors hover:bg-neutral-50 focus:shadow-button-focus">
            <RiLinkedinBoxFill size={20} className="text-indigo-700" />
          </button>
          <button className="p-2 rounded-[4px] transition-colors hover:bg-neutral-50 focus:shadow-button-focus">
            <RiInstagramFill size={20} className="text-indigo-700" />
          </button>
          <button className="p-2 rounded-[4px] transition-colors hover:bg-neutral-50 focus:shadow-button-focus">
            <RiTwitterXFill size={20} className="text-indigo-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge3;
