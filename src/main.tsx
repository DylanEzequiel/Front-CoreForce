
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { SocketProvider } from "./providers/SocketProvider.tsx";




ReactDOM.createRoot(document.getElementById("root")!).render(
 <SocketProvider>
   <App /> 
 </SocketProvider>    
);
