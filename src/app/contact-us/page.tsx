import ContactUsSection from "@/components/organisms/contact-us-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";

export default function ContactUs() {
  return (
    <>
      <SemiHeroSection title="Contact Us" subtitle="Need our help?" imgUrl="/img/contact-us/contact-us.jpg" />
      <ContactUsSection />
    </>
  );
}
