import React from 'react'
import { useFetch } from '../hooks'

export function Feedback() {
  const [inputValue, setInputValue] = React.useState('')

  const { makeRequest, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/feedback`, {
    options: { method: 'POST', body: { inputValue } },
    autorun: false,
  })

  return (
    <>
      <h2>Feedback</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          makeRequest()
        }}
      >
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        <input type="submit" value={isLoading ? 'Submitting ⏳' : 'Submit'} />
      </form>
    </>
  )
}
