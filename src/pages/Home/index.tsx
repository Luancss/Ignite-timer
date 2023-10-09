import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <input id="task" type="text" />

        <label htmlFor="minutesAmount">Durante</label>
        <input id="minutesAmount" type="number" />
        <span>Minutos.</span>
        </FormContainer>
     
      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>
      <button type="submit">
        <Play size={24}/>
        Começar
      </button>
      </form>
    </HomeContainer>
  );
}
