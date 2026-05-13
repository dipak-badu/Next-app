import Ads from "@/components/ads/Ads";
import Hero from "@/components/banner/Hero";
export default function Home() {
  return (
    <section className="flex flex-col gap-10 w-full">
      <Hero />
      <Ads />
      <section>Flash sales</section>
      <section>Categories</section>
      <section>Products</section>
    </section>
  );
}
