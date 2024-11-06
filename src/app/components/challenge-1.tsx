import Image from "next/image";

const Challenge1 = () => {
  return (
    <div className="flex flex-col gap-4 bg-white rounded-lg p-6 max-w-[340px] shadow-sm">
      <div className="flex items-center gap-4">
        <Image
          src="/profile-thumbnail.png"
          alt="avatar"
          width={48}
          height={48}
        />
        <div className="flex flex-col gap-px">
          <h4 className="text-lg font-semibold text-neutral-900">Sarah Dole</h4>
          <h6 className="text-sm text-neutral-600">@sarahdole</h6>
        </div>
      </div>
      <p className="text-base text-neutral-600">
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </p>
    </div>
  );
};

export default Challenge1;
