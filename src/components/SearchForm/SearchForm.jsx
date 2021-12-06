import './SearchForm.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SearchForm = () => {

  const navigate = useNavigate()
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState('-- Select a Category --')

  useEffect(() => {
    
    const getCategories = async () => {
      try {
        const response = await fetch('https://api.publicapis.org/categories')
        const json = await response.json()
        setCategories(json)
      } catch (err) {
        console.log(err)
      }
    }

    getCategories()
  }, [])

  const handleFormSubmission = (e) => {
    e.preventDefault()
    if (category === '-- Select a Category --') {
      console.log('You must select a category')
    } else {
      navigate('/results', { state: { category }})
    }
  }

  const handleInputChange = (e) => {
    
    // index 0 is the only word needed to query api
    setCategory(e.target.value.split(' ')[0])
  }

  return (
    <>
      {
        !categories.length ? <h1 className='loading'>Loading . . .</h1> : (
          <form className='search-form' onSubmit={handleFormSubmission}>
            <select
              name='form-select'
              id='form-select'
              className='form-select'
              onChange={handleInputChange}
            >
              <option className='form-option'>-- Select a Category --</option>
              {categories.map((category) => {
                return <option
                  className='form-option'
                  key={category}
                  value={category}
                >{category}</option>
              })}
            </select>
            <button className='form-submit-button'>Submit</button>
          </form>
        )
      }
    </>
  )
}