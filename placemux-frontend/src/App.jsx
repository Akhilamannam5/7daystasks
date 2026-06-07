import {useState,useEffect} from "react";
import AppRoutes from "./routes/AppRoutes";

function App(){

const [dark,setDark]=useState(
localStorage.getItem("theme")==="dark"
);

useEffect(()=>{

if(dark){
document.body.classList.add("dark");
}else{
document.body.classList.remove("dark");
}

localStorage.setItem(
"theme",
dark?"dark":"light"
);

},[dark]);

return(
<>

<button
style={{
position:"fixed",
top:"20px",
right:"20px",
zIndex:"999"
}}
onClick={()=>setDark(!dark)}
>
{dark?"☀":"🌙"}
</button>

<AppRoutes/>

</>
);

}

export default App;
