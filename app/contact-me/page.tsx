import { CardWrapper } from "@/components/auth/card-wrapper";
import MiddleSection from "@/components/contact-me/MiddleSection";
import UpperSection from "@/components/contact-me/UpperSection";

const ContactMePage = () => {
  
  return (
    <CardWrapper headerTitle="Contact Me" headerLabel={<UpperSection/>}>
      <MiddleSection />
    </CardWrapper>
  );
};

export default ContactMePage;
