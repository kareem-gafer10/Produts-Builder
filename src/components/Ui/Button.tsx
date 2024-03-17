import { ReactNode,  } from "react";


    interface IProos{
        children:ReactNode;
        className?: string;
         width?: "w-full" | "w-fit";
    }


const Button = ({children,className,width = "w-full", ...rest}:IProos) => {
  return (
    <button className={`${className} ${width} p-2  rounded-md text-white`}  {...rest}>
        {children}
    </button>
  )
}

export default Button