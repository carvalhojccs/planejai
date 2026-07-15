import {
  CalendarClock,
  CreditCard,
  GoalIcon,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'

import type { FormStepProps } from '@/components/features/Simulation/FormStep'

export const simulationFormSteps: FormStepProps[] = [
  {
    id: 'income',
    icon: PiggyBank,
    title: 'Renda Mensal Bruta',
    question:
      'Qunato é depositado na sua conta todo mês (somando todas as fontes)?',
    inputProps: {
      placeholder: 'Ex: R$ 5.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'expenses',
    icon: CreditCard,
    title: 'Custos fixos de vida',
    question:
      'Quanto você gasta mensalmente com custos fixos (moradia, transporte, alimentação, etc.)?',
    inputProps: {
      placeholder: 'Ex: R$ 2.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'debts',
    icon: Landmark,
    title: 'Dívidas / Parcelas',
    question:
      'Você tem algum valor comprometido com parcelas ou empréstimos mensalmente?',
    inputProps: {
      placeholder: 'Ex: R$ 500,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalName',
    icon: GoalIcon,
    title: 'Nome da meta',
    question: 'Qual é o objetivo que você deseja alcançar?',
    inputProps: {
      placeholder: 'Ex: Viagem para a Europa',
      maxLength: 50,
    },
  },
  {
    id: 'goalAmount',
    icon: Wallet,
    title: 'Custo da meta',
    question: 'Quanto custa o objetivo que você deseja alcançar?',
    inputProps: {
      placeholder: 'Ex: R$ 15.000,00',
      prefix: 'R$',
      maxLength: 12,
    },
  },
  {
    id: 'goalDeadline',
    icon: CalendarClock,
    title: 'Prazo desejado',
    question: 'Em quantos meses você planeja atingir esse objetivo?',
    inputProps: {
      type: 'number',
      placeholder: 'Ex: 12',
      suffix: 'meses',
      min: 1,
      max: 12,
    },
    submitButtonProps: {
      label: 'Gerar simulação',
      emojiIcon: '⚡',
    },
  },
]
