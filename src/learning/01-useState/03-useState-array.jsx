import { useState } from 'react'

import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = useState(data)

  function removePerson(id) {
    // console.log(id)
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }

  function clearList() {
    setPeople([])
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='flex gap-6 mb-6'>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <button
              className='py-1 px-2 bg-slate-300 rounded'
              onClick={function () {
                removePerson(id)
              }}
            >
              remove
            </button>
          </div>
        )
      })}

      <button className='py-2 px-3 bg-slate-500 rounded text-white font-semibold' onClick={clearList}>
        clear list
      </button>
    </div>
  )
}
export default UseStateArray
