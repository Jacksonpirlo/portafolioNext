import Navbar from "@/components/organism/Nav";
import HomePage from "@/components/template/Home";

export default function Home() {
  return (
    <div className="w-full">

      <div className="block lg:hidden">
        <HomePage />
      </div>

      <div className="hidden lg:block">
        <Navbar />
      </div>
      
    </div>
  );
}
