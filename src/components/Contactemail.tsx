import { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contactemail = () => {
    const myFormRef = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (myFormRef.current) {
            emailjs.sendForm('service_f3l46d9', 'template_p48hjt9', myFormRef.current, 'BCM1vWIVYz1UdXPbP')
                .then((result) => {
                    console.log(result.text);
                    alert("Email sent successfully!");
                })
                .catch((error) => {
                    console.log(error.text);
                    alert("Error sending email. Please try again later.");
                });
        } else {
            console.error("Form reference is null");
            alert("Error: Form reference is null");
        }
    };

    return (
        <Fragment>
            <form className="newsLatterform" ref={myFormRef} onSubmit={sendEmail}>
                <div className="flex inputs">
                    <input type="email" placeholder="Email" name="from_email" required className="email" />
                </div>
                <button className="play" type="submit" value="send">
                    <div className="playBtn thertyfive">
                        <i className="bx bx-send submit"></i>
                    </div>
                </button>
            </form>
        </Fragment>
    );
};

export default Contactemail;
