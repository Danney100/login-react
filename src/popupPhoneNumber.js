import React from "react";
import './popup.css';
// import Popup from "reactjs-popup";

// export default () => {
//     return (
//     <Popup trigger={<button> Trigger </button>} position="right center">
//         <div>Popup phonenumber</div>
//     </Popup>
//     )
// };

class Popup extends React.Component {
    render() {
        return(
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                    <input placeholder='Input PhoneNumber'></input>
                    <button onClick={this.props.closePopup}>close</button>
                </div>
            </div>
        );
    };
};

export default Popup;