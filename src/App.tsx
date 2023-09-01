// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Header from './component/Heder/Heder'
import Main from './component/Main/Main'
import Footer from './component/Footer/Footer'

const data = [
  {
  title : 'A Song of Ice and Fire 1',
  src: 'https://loremflickr.com/320/440/israel',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 1',
  src: 'https://loremflickr.com/320/440/israel',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 1',
  src: 'https://loremflickr.com/320/440/israel',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 2',
  src: 'https://loremflickr.com/320/440/fotball',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 3',
  src: 'https://upload.wikimedia.org/wikipedia/en/2/24/AStormOfSwords.jpg',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 4',
  src: 'https://upload.wikimedia.org/wikipedia/en/5/5d/A_Dance_With_Dragons_US.jpg',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire',
  src: 'https://upload.wikimedia.org/wikipedia/he/thumb/2/27/A_Game_of_Thrones.jpg/220px-A_Game_of_Thrones.jpg',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
},
{
  title : 'A Song of Ice and Fire 5',
  src: 'https://upload.wikimedia.org/wikipedia/en/9/93/AGameOfThrones.jpg',
  alt: 'A Song of Ice and Fire',
  size: 'medium',
  text: `A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin. He began writing the first volume, A Game of Thrones in 1991, publishing it in 1996. Martin originally envisioned the series as a trilogy but as of 2023 has released five out of a planned seven volumes. The fifth and most recent entry in the series, A Dance with Dragons, was published in 2011. As of 2023 Martin continues to write the sixth novel, titled The Winds of Winter.A seventh novel, A Dream of Spring, is planned to follow.`
}
]
function App() {
  
  return (
    <>
    <Header size='large' title="my website" />
    <Main data={data} />
    <Footer/>
 

    </>
  )
}

export default App
