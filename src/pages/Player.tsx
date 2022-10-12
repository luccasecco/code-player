import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Player(){
  return(
    <div className="flex flex-col min-h-screen">
      <Header 
      childrenLeft="Growth"
      childrenRight="Vibration"
      />
      <main className="flex">
        <Video />
        <Sidebar />
      </main>
        <Footer />
    </div>
  )
}