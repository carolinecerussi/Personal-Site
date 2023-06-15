import React from 'react';


function Footer() {

    const footContainerStyle = {
        marginBottom:'5%'
    }

    return (
        <React.Fragment>

                <div className="FootContainer" style={footContainerStyle}>
              <button type="submit"><p>Home</p></button><h2>Home</h2>
               
                </div>

        </React.Fragment>
    )

}
export default Footer;