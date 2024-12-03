import './App.css'

function App() {
  
  const bodyStyle = {
    background: "#ECE7CA"
  }

  const mySkills = [
    {
      name:'JavaScript',
      comfort: 9,
      frontEnd: true,
      backend: true
    },
    {
      name:'CSS',
      comfort: 8,
      frontEnd: true,
      backend: false
    },
    {
      name:'HTML',
      comfort: 10,
      frontEnd: true,
      backend: false
    },
  ]


  return (
    <body style={bodyStyle}> 
    <div>
    <h1 className='header'> Hi, My name is Abdullah Durrani.</h1>
    <h2 className='header'>I am Software Engineer.</h2>
    </div>
    <ul>
      {mySkills.map((skills, index) =>
      <li key={index}>
        {skills.name}
      </li>
      )}
    </ul>
    </body>
  )
}

export default App
