import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill } from "@remixicon/react";
import { RiInstagramFill } from "@remixicon/react";
import Image from "next/image";

const Challenge3 = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center bg-white rounded-lg py-6 px-4 text-center w-[340px] h-[428px] shadow-sm-secondary">
      <Image
        src="/profile.png"
        alt="avatar"
        className="object-cover"
        width={64}
        height={64}
      />
      <div className="flex flex-col items-center text-center gap-1 w-full">
        <h1 className="font-medium text-xl text-neutral-900 mt-[1px] mb-[3px]">Sarah Dole</h1>
        <div className="h-5 flex items-center justify-center">
          <span className="text-sm font-normal text-neutral-600">
            Front End Engineer @ Microsoft
          </span>
        </div>
        {/* <h2 className="font-normal text-sm text-neutral-600 truncate w-full"></h2> */}
      </div>
      <p className="font-normal text-base text-neutral-600 mb-4">
        I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.
      </p>

      <button
        className="text-base font-medium text-white h-11 bg-indigo-700 rounded w-full"
        aria-label="Contact me"
      >
        Contact me
      </button>
      <div className="flex w-44 mx-auto justify-between h-9 items-center">
        <RiGithubFill size={20} color="#4338CA" aria-label="GitHub" />
        <RiLinkedinBoxFill size={20} color="#4338CA" aria-label="LinkedIn" />
        <RiInstagramFill size={20} color="#4338CA" aria-label="Instagram" />
        <RiTwitterXFill size={20} color="#4338CA" aria-label="Twitter" />
      </div>
    </div>
  );
};

export default Challenge3;
