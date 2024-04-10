import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({ name: 'Mohit', age: 20, job: 'Teacher' })

  function updatePerson() {
    // setPerson({ name: 'Rahul', age: 30, job: 'Developer' })
    // setPerson({ name: 'Rahul', age: 20, job: 'Teacher' })

    // { name: 'Mohit', age: 20, job: 'Teacher', name: 'Rahul' }
    setPerson({ ...person, name: 'Rahul' })
  }

  return (
    <div className='text-center'>
      <h2 className='font-semibold text-3xl'>{person.name}</h2>
      <p>{person.age}</p>
      <h3 className='font-medium text-sm mb-4'>{person.job}</h3>

      <button className='py-2 px-3 bg-red-400 rounded text-white' onClick={updatePerson}>
        update person
      </button>
    </div>
  )
}
export default UseStateObject

/*
setup three state value
  name
  age
  job

render in the browser

create a button
  setup function
    update all three state values

as a result once the user clicks the button, new person is displayed in the browser
*/
