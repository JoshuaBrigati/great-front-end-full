import Challenge1 from "./components/challenge-1";
import Challenge2 from "./components/challenge-2";
import Challenge3 from "./components/challenge-3";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 h-screen p-24">
      <h1 className="text-4xl font-bold">GreatFrontEnd Challenges</h1>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Challenge 1</h3>
        <Challenge1 />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Challenge 2</h3>
        <Challenge2 />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Challenge 3</h3>
        <Challenge3 />
      </div>
    </div>
  );
}
