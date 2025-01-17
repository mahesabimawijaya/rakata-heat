import Container from "@/components/atoms/container";
import Flex from "@/components/atoms/flex";
import SectionTitle from "@/components/atoms/section-title";
import { Reveal } from "@/components/templates/Reveal";
import { FC } from "react";
import Image from "next/image";

const images = [
  "/img/gallery/gallery-1.jpeg",
  "/img/gallery/gallery-2.jpeg",
  "/img/gallery/gallery-3.jpeg",
  "/img/gallery/gallery-4.jpeg",
  "/img/gallery/gallery-5.jpeg",
  "/img/gallery/gallery-6.jpeg",
  "/img/gallery/gallery-7.jpeg",
  "/img/gallery/gallery-8.jpeg",
  "/img/gallery/gallery-9.jpeg",
  "/img/gallery/gallery-10.jpeg",
  "/img/gallery/gallery-11.jpeg",
  "/img/gallery/gallery-12.jpeg",
];

const GallerySection: FC = () => {
  return (
    <section className="w-full py-20">
      <Container>
        <Flex direction="col" directionMd="col" align="start" gap="gap-3" className="mb-10">
          <Reveal>
            <SectionTitle>Gallery</SectionTitle>
          </Reveal>
          <Reveal>
            <p className="capitalize font-medium">Dokumentasi karya kami</p>
          </Reveal>
        </Flex>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, columnIndex) => (
            <div key={columnIndex} className="grid gap-4">
              {images.slice(columnIndex * 3, columnIndex * 3 + 3).map((src, index) => (
                <Reveal key={index}>
                  <div>
                    <Image className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery item ${index + 1}`} width={500} height={500} />
                  </div>
                </Reveal>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
