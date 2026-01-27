import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { useSound } from "./useSound";
import { handleData } from "@/services/contactMessage";
import { toast } from "react-toastify";

const useContact = () => {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: "", email: "", message: "" });
  const pathname = usePathname()
  const playClickSound = useSound("/sounds/click.wav", 0.5);
  
  const handleBackClick = () => {
    playClickSound();
    router.push("/");
  };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendData = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await handleData(form);
        toast.success('Message send successfully');
        setForm({ fullName: "", email: "", message: "" });
      } catch (err) {
        console.error(err);
        toast.error('Error send message');
      }
    }
    return {
        sendData,
        form,
        handleChange,
        pathname,
        handleBackClick
    }
}

export default useContact;