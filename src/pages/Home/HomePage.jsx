import React from 'react'
import NavBar from '../../Components/Home/NavBar'
import LargeText from '../../Components/Common/LargeText'
import H1 from '../../Components/Common/H1'
import SmallText from '../../Components/Common/SmallText'

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='mx-52 my-24 flex justify-between items-center'>
        <div>
          <H1 val='Get Pay fast' />
          <LargeText value="automatically set aside your earnings." />
          <SmallText val='Empowering small businesses with easy invoicing, seamless integrations, and smart cash flow tools.'/>
        </div>
        <div>
          <H1 val='Get Pay fast' />
          <LargeText value="automatically set aside your earnings." />
          <SmallText val='Empowering small businesses with easy invoicing, seamless integrations, and smart cash flow tools.'/>
        </div>

      </div>
    </div>
  )
}

export default HomePage