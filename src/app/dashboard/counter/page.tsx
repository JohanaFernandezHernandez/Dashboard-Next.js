
import { CardCounter } from "@/app/shopping-cart";



export const metadata ={
  title: "Shopping Card",
  description: "Esta pagina es el contador",
}

export default function CounterPage() {

 

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>    
      <CardCounter value={20}/>
    </div>
  );
}