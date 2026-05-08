"use client";
import { useAppContext } from "./contexto/appcontext";
export default function Home(){
  const { nombre } = useAppContext();
  return(
    <div>
      {nombre}
    </div>
  );
}