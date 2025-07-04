import React from 'react'

import Footer from '../../Component/footer/Footer'
import Header from '../../Component/Header/Header'


function LayOut({children}) {
    return (
      <div>
          <Header/>
          {children}
          <Footer/>
      </div>
    )
  }
  
  export default LayOut