import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Users from "@/components/users";
import Voice from "@/components/voice";
import Values from "@/components/values";
import Story from "@/components/story";
import Vision from "@/components/vision";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Users />
      <Voice />
      <Values />
      <Story />
      <Vision />
    </div>
  );
}
