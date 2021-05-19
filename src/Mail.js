import React from 'react';
import {useHistory} from 'react-router-dom';
import './Mail.css';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

function Mail() {
    const history = useHistory();
    return (
        <div className="mail">
           <div className="mail__tools">
               <div className="mail__toolsLeft">
                    <IconButton
                        onClick={()=>history.push("/")}
                    >
                    <ArrowBackIcon/>
                    </IconButton>

                   <IconButton>

                   </IconButton>


               </div>

               <div className="mail__toolsRight">

               </div>
           </div>
            <h1>What is up User?</h1>
        </div>
    );
}

export default Mail;