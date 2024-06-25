// import {PropTypes} from 'prop-types'
import { useState } from 'react';

export default function CounterButton({by, increementMethod, decreementMethod}) {

    // function increementCounterFunction(){
    //     increementMethod({by})
    // }

    // function decreementCounterFunction(){
    //     decreementMethod({by})
    // }

    return(
        <div className="counter">
            {/* <span className="count">{count}</span> */}
            <div>
                <button className="counterButton" 
                    onClick={()=>increementMethod({by})}
                    // style={{fontSize:"30px"}}
                    // style={buttonStyle}
                    >+{by}</button>
                <button className="counterButton" 
                    onClick={()=>decreementMethod({by})}>-{by}</button>
            </div>
        </div>
    );
}

// CounterButton.propTypes = {
//     by : PropTypes.number
// }

// CounterButton.defaultProps = {
//     by : 1
// }