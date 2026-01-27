import { usePathname, useRouter } from "next/navigation";
import { useSound } from "./useSound";

const useHandleSound = () => {
    const router = useRouter();
        const pathname = usePathname()
        const playClickSound = useSound("/sounds/click.wav", 0.5);
        
        const handleBackClick = () => {
            playClickSound();
            router.push("/");
        };
    return{
        pathname,
        handleBackClick
    }
}

export default useHandleSound;