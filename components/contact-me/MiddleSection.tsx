"use client";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import ContactForm from "./ContactForm";

const MiddleSection = () => {
  const user = useCurrentUser();
  return (
    <>
        {user && (<ContactForm/>)}
    </>
  );
};

export default MiddleSection;
