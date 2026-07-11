import { PiggyBank } from 'lucide-react'

import FormStep from './FormStep'
import { StepProgress } from './Progress'

export const SimulationForm = () => {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={6} />
      <FormStep
        icon={PiggyBank}
        title="Identificação"
        question="Qual é o seu nome completo?"
        inputProps={{
          placeholder: 'Digite seu nome completo',
          prefix: 'Nome',
          type: 'text',
        }}
      />
    </>
  )
}
