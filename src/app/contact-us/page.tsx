import ContactUsSection from "@/components/organisms/contact-us-section";
import SemiHeroSection from "@/components/organisms/semi-hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Rakata Heat",
  description: "Get in touch with us for inquiries, support, or feedback. Reach out via phone, email, or our online form, and we’ll respond promptly to assist you.",
};

export default function ContactUs() {
  return (
    <>
      <main>
        <SemiHeroSection title="Contact Us" subtitle="Need our help?" imgUrl="/img/contact-us/contact-us.jpg" />
        <ContactUsSection />
      </main>
    </>
  );
}
