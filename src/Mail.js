import React from 'react';
import {useHistory} from 'react-router-dom';
import './Mail.css';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import ErrorIcon from "@material-ui/icons/Error";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PrintIcon from "@material-ui/icons/Print";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function Mail() {
    const history = useHistory();
    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton
                        onClick={() => history.push("/")}
                    >
                        <ArrowBackIcon/>
                    </IconButton>

                    <IconButton>
                        <MoveToInboxIcon/>
                    </IconButton>

                    <IconButton>
                        <ErrorIcon/>
                    </IconButton>

                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>

                    <IconButton>
                        <EmailIcon/>
                    </IconButton>

                    <IconButton>
                        <WatchLaterIcon/>
                    </IconButton>

                    <IconButton>
                        <CheckCircleIcon/>
                    </IconButton>

                    <IconButton>
                        <LabelImportantIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>


                </div>

                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMoreIcon/>
                    </IconButton>

                    <IconButton>
                        <PrintIcon/>
                    </IconButton>

                    <IconButton>
                        <ExitToAppIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>Subject</h2>
                    <LabelImportantIcon className="mail__important"/>
                    <p>Title</p>
                    <p className="mail__time">10pm</p>
                </div>

                <div className="mail__message">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis distinctio, facilis laudantium libero molestiae odit perspiciatis provident quo, reiciendis soluta sunt suscipit totam ullam, vel voluptatem voluptatibus! Atque aut doloribus fugit hic nihil obcaecati, quasi sed unde vel veritatis? Consequatur dolore error fugit harum nobis optio sint sunt! Debitis eaque illo nesciunt possimus. Animi esse ipsum nostrum porro quae sit voluptates. Aspernatur, aut, commodi, culpa cumque dolor dolores ea error eum fugiat hic incidunt laboriosam maiores minima modi neque nostrum possimus quae quasi ratione sint unde veniam veritatis vitae? Ad cumque dignissimos earum fuga hic neque odio possimus veniam.</p>
                </div>
            </div>
        </div>
    );
}

export default Mail;