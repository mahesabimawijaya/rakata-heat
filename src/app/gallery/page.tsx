import EquipmentsSection from "@/components/organisms/equipments-section";
import GallerySection from "@/components/organisms/gallery-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Rakata Heat",
  description: "Explore our gallery to view stunning photos and videos showcasing our work, products, events, or projects. See the quality and creativity we bring to life",
};

export default function Gallery() {
  return (
    <>
      <main>
        <SemiHeroSection title="Gallery" subtitle="Showcasing Our Finest Creations" imgUrl="/img/gallery/gallery.png" />
        <GallerySection />
        <EquipmentsSection />
      </main>
    </>
  );
}
