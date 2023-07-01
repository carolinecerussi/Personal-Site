import React from 'react';

function Home() {

  const footerStyle = {
    backgroundColor: 'transparent',
position:'fixed',
color:'black',
float:'left',
textAlign:'center',
width:'100%',
fontSize:'20pt'

  }



  return (

<React.Fragment >

      <div className='footerStyle' style={footerStyle}>
<a><p>HOME</p></a>

        
      </div>
    </React.Fragment>
  )

}


export default Home;