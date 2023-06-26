import { ChangeEvent, FocusEvent, ReactNode } from 'react'

export interface CPFInputInterface {
  label?: string

  id?: string
  className?: string

  name: string
  value?: string
  required?: boolean
  showReset?: boolean

  afterIcon?: ReactNode
  beforeIcon?: ReactNode
  infoMessageIcon?: ReactNode

  infoMessage?: string
  invalidMessage?: string
  requiredMessage?: string
  successMessage?: string

  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void

  theme?: 'a' | 'b' | 'c' | 'a-rounded' | 'b-rounded' | 'c-rounded'
  [key: string]: unknown
}
