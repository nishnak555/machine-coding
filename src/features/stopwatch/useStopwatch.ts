
import { useRef, useState } from "react"
export const useStopwatch = () =>{
const timerRef =   useRef<NODEJS.Timeout |null>(null)  
const[time,setTime]  = useState<number>(0)

const start = ()=>{
  timerRef.current =  setInterval(()=>{
setTime((t)=>t+1)
  },1000)
}

const pause = ()=>{
  clearInterval(timerRef.current)
  timerRef.current = null
}

const reset = ()=>{
  pause()
  setTime(0)
}


const reverse = () =>{
  pause()
  timerRef.current = setInterval(() => {
    setTime((t)=>(t > 0 ? t-1 : 0))
  },1000);
}
return {start,time,pause,reset,reverse}
}


