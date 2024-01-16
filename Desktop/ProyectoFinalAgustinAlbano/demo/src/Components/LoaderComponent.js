import { useState, useEffect } from "react"

const LoaderComponent = () => {
    const [loading, setLoading] = useState(true)

  useEffect(()=>{
   const timer = setTimeout(()=>{
    setLoading(false);
   }, 2000)
   return () => clearTimeout(timer);
  }, [])

  return loading ? <div> Renderizando Productos.... </div> : null;
}

export default LoaderComponent