import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Users from "@/components/users";
import Voice from "@/components/voice";
import Values from "@/components/values";
import Story from "@/components/story";
import Vision from "@/components/vision";
import Numbers from "@/components/numbers";
import Team from "@/components/team";
import Footer from "@/components/footer";
import FormPage from "@/components/form";
export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Users />
      <Voice />
      <Values />
      <Story />
      <Vision />
      <Numbers />
      <Team />
      <FormPage />
      <Footer />
    </div>
  );
}
