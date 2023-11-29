import { Fragment, useRef } from 'react';
import emailjs from '@emailjs/browser';
import GetQuotebtn from './GetQuotebtn';

export const Contactform = () => {
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
            <form className="form" ref={myFormRef} onSubmit={sendEmail}>
                <div className="flex inputs">
                    <input type="text" placeholder="Name" name="from_name"  required className="name" />
                    <input type="email" placeholder="Email" name="from_email"  required className="email" />
                </div>
                <textarea name="message" id="" rows={5} cols={60} className="message" placeholder="Message"  required></textarea>
                <button type="submit" value="send" className="submit">
                    <GetQuotebtn text="Get A Quote" />
                </button>
            </form>
        </Fragment>
    );
};

export default Contactform;
