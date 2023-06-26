import { Col, Row } from 'antd'
import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'
import CPFInput from './components/cpf-input'

function App() {
  const [results, setResults] = useState<string>('28065617875')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResults(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <Row>
        <Col span={8}>
          <CPFInput
            name="cpf"
            value={results}
            onChange={handleChange}
            // showReset
            // theme="b-rounded"
            // beforeIcon={<HiOutlineIdentification />}
            // afterIcon={<HiOutlineIdentification />}
            // infoMessage="Cadastro de Pessoa Física"
          />
        </Col>
      </Row>

      {/* <button type="submit">gravar</button>
      <code>{JSON.stringify(outro)}</code> */}
    </form>
  )
}

export default App
