import { useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0)
  let my_obj = {
    username: "akku",
    age: 21
  }

  let newarray =[1,2,3]

  return (
    <>
  
<h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 drop-shadow-lg text-center mb-8 tracking-wide animate-bounce border-s-fuchsia-200 shadow-fuchsia-100">
  TADIPAR
</h1>
      <Card
  username="LAKSHAY PAHWA"
  testboxtxt="Hey, I'm Lakshay Pahwa"
  member="Member #1"
  img="IMG_8504.JPG"
/>

<Card
  username="TUSHAR SINGH"
  testboxtxt="Hello from Tushar Singh"
  member="Member #2"
  img="IMG_8892.JPG"
/>

<Card
  username="YASH PRATAP SINGH"
  testboxtxt="This is Yash Pratap Singh"
  member="Member #3"
  img="yash.png"
/>

<Card
  username="PRATEEK PAL"
  testboxtxt="Hi! PRATEEK PAL here"
  member="Member #4"
  img="IMG_8660.JPG"
/>

<Card
  username="PRATEEK KUMAR"
  testboxtxt="Hello from PRATEEK KUMAR"
  member="Member #5"
  img="IMG_8686.JPG"
/>

<Card
  username="VISHESH YADAV"
  testboxtxt="Hey! I'm VISHESH YADAV"
  member="Member #6"
  img="IMG_8647.JPG"
/>

<Card
  username="SUMIT JAIN"
  testboxtxt="Hi! I'm SUMIT JAIN"
  member="Member #7"
  img="sumit.JPG"
/>



    </>
  )
}

export default App
