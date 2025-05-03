import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export default function PrimaryButton({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition",
        className
      )}
      {...props}
    />
  );
}