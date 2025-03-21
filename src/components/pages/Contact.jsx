import { FaLongArrowAltRight } from "react-icons/fa";

export const Contact = () => {

    const handleFormSubmit = (formData) => {
        const formInputnputData = Object.fromEntries(formData.entries());
        console.log(formInputnputData);
    };

    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>

            <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input
                        type="text"
                        name="username"
                        autoComplete="of"
                        placeholder="Enter your name"
                        required />

                    <input
                        type="email"
                        name="email"
                        autoComplete="of"
                        placeholder="Enter ypur email"
                        required />

                    <textarea
                        className="form-control"
                        name="message"
                        rows="10"
                        autoComplete="of"
                        placeholder="Enter your message"
                        required></textarea>
                    <button type="submit" value="send">Send <FaLongArrowAltRight /></button>
                </form>
            </div>
        </section>
    )
};  