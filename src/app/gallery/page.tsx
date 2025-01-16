import EquipmentsSection from "@/components/organisms/equipments-section";
import GallerySection from "@/components/organisms/gallery-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";

export default function Gallery() {
  return (
    <>
      <SemiHeroSection title="Gallery" subtitle="Showcasing Our Finest Creations" imgUrl="/img/gallery/gallery.png" />
      <GallerySection />
      <EquipmentsSection />
    </>
  );
}
