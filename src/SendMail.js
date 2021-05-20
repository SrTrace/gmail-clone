import React from 'react';
import './SendMail.css';
import CloseIcon from "@material-ui/icons/Close";
import { Button} from "@material-ui/core";
import { useForm} from "react-hook-form";

function SendMail() {
    const { register, handleSubmit, watch,  errors} = useForm();
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon
                    className="sendMail__close"
                />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="To"
                    type="text"
                    name="to"
                    {...register("to",{required: true })}
                />
                <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    {...register("subject",{required: true })}
                />
                <input
                    placeholder="Message"
                    type="text"
                    className="sendMail__message"
                    name="message"
                    {...register("message",{required: true })}
                />

                <div className="sendMail__options">
                    <Button
                        className="sendMail__send"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;