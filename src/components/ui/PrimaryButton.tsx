import { IPrimaryButtonProps } from "@/interfaces/PrimaryButtonProps";


export default function PrimaryButton({ children, className, onClick }: IPrimaryButtonProps) {
    return (
        <button className={`bg-main-gradient text-white font-medium cursor-pointer bg-main-gradient-hover hover:rounded transition-all duration-300 ease-in-out bg-main-gradient-active active:scale-95 ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}