import React from 'react';

function Home() {

  const headerStyle = {
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

      <div className='footerStyle' style={headerStyle}>
<a href="App.js" ><button><i class="fa fa-angle-up"></i>
</button></a>

        
      </div>
    </React.Fragment>
  )

}


export default Home;