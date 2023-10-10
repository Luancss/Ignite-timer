import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import {useForm} from 'react-hook-form'



export function Home() {
  const {register, handleSubmit, watch} = useForm();

  function handleCreateNewCycle(data: any) {
    console.log(data);
  
  }

  const task = watch('task')
  const isSubmitDesabled = !task;

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
        <label htmlFor="task">Vou trabalhar em</label>
        <TaskInput
            onSubmit={handleSubmit(handleCreateNewCycle)}
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

        <label htmlFor="minutesAmount">Durante</label>
        <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
          />
        <span>Minutos.</span>
        </FormContainer>
     
      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>
      <StartCountdownButton type="submit" disabled={isSubmitDesabled}>
          <Play size={24} />
        Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
  }

