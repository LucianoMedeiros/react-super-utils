import classNames from 'classnames'
import { ChangeEvent, FocusEvent, useState } from 'react'
import { BsInfoCircle } from 'react-icons/bs'
import './cpf-input.css'
import { CPFInputInterface } from './interface'
import { setMask } from './mask'
import { validateCPF } from './validate'

const CPFInput = ({
  label = 'CPF',

  id,
  className,

  name,
  value = '',
  required,
  showReset,

  afterIcon,
  beforeIcon,
  infoMessageIcon = <BsInfoCircle />,

  infoMessage,
  invalidMessage = 'CPF inválido!',
  requiredMessage = 'Campo obrigatório!',
  successMessage = 'CPF válido!',

  onBlur,
  onChange,

  theme = 'c-rounded',
  ...props
}: CPFInputInterface) => {
  const [fieldValue, setFieldValue] = useState(setMask(value))
  const [isValid, setIsValid] = useState(true)
  const [isTouched, setIsTouched] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const resetField = () => {
    setFieldValue('')
    setIsValid(true)
    setIsTouched(false)
    setIsComplete(false)
  }

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsTouched(true)
    const inputValue = e.target.value

    if (inputValue.length === 14) {
      setIsComplete(true)
    } else {
      setIsComplete(false)
      setIsValid(false)
    }
    setIsValid(validateCPF(inputValue))

    onBlur?.(e)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true)

    let inputValue = e.target.value

    inputValue = setMask(inputValue)

    if (inputValue.length === 14) {
      setIsComplete(true)
      setIsValid(validateCPF(inputValue))
    }
    setFieldValue(inputValue)
    e.target.value = inputValue
    onChange?.(e)
  }

  const showInvalidCPFError = required
    ? !isValid && isTouched && required && fieldValue.length > 0
    : !isValid && isTouched && fieldValue.length > 0
  const showRequiredError =
    !isValid && isTouched && required && fieldValue.length === 0
  const showSuccessMessage = isValid && isComplete

  return (
    <div
      className={classNames(
        'rsu-cpf-input',
        `theme-${theme}`,
        { 'has-reset-button': showReset },
        { 'has-before-icon': beforeIcon },
        { 'has-after-icon': afterIcon },
        { error: showInvalidCPFError || showRequiredError },
        className
      )}
    >
      <label htmlFor={name}>
        {label}
        {required && <b>{' *'}</b>}
        {infoMessage && (
          <div className="info-message-icon">
            {infoMessageIcon}
            <span>{infoMessage}</span>
          </div>
        )}
      </label>
      <div className="field">
        <input
          id={id || name}
          className={className}
          type="text"
          name={name}
          value={fieldValue}
          onChange={handleChange}
          onBlur={handleBlur}
          maxLength={14}
          {...props}
        />
        {afterIcon && <span className="after-icon">{afterIcon}</span>}
        {beforeIcon && <span className="before-icon">{beforeIcon}</span>}
        {showReset && (
          <button title="reset" onClick={resetField}>
            x
          </button>
        )}

        {showInvalidCPFError && (
          <span className={classNames('feedback', 'error')}>
            {invalidMessage}
          </span>
        )}
        {showRequiredError && (
          <span className={classNames('feedback', 'error')}>
            {requiredMessage}
          </span>
        )}
        {showSuccessMessage && (
          <span className={classNames('feedback', 'success')}>
            {successMessage}
          </span>
        )}
      </div>
    </div>
  )
}

export default CPFInput
