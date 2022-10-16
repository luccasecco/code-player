import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Player(){
  return(
    <>
      <Header 
      childrenLeft="Growth"
      childrenRight="Vibration"
      />
    <div className="flex flex-col min-h-screen w-[98%] m-r-auto">
      <main className="flex flex-col md:flex-row">
        <Video />
        <Sidebar />
      </main>
    </div>
      <Footer />
    </>
  )
}