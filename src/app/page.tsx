import Challenge1 from "./components/challenge-1";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 h-screen p-24">
      <h1 className="text-4xl font-bold">GreatFrontEnd Challenges</h1>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Challenges</h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold">Challenge 1</h3>
          <Challenge1 />
        </div>
      </div>
    </div>
  );
}
