import Chrome from "../../components/apps/Chrome";
import { Dock } from "../../components/Dock";
import { HeaderComponent } from "../../components/Header";
import { Footer } from "./styles";

export function Desktop() {
  return (
    <>
      <HeaderComponent /> 
           
      <Footer>
        <Dock />
      </Footer>     
    </>
  )
}