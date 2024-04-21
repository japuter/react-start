import { useState } from "react"

const Upload = () => {

  const [file, setFile] = useState("")
  const [name, setName] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Tiedostoa yritetään lähettää")
  }


  return <>

  <form onSubmit={handleSubmit}>
    <input
     type="file"
     name="tiedosto"
     onChange={(event) =>
     setFile(event.target.value)
     }
     />
    <label htmlFor="name">Name</label>
    <input type="text" id="name" name="name" onChange={(event) =>
    setName(event.target.value)
  } />


  </form>

  </>
}

export default Upload
