import "../styles/info.scss";

const contact = {
    trade_name: "Your Business Name Inc.",
    phone_number: "+1.123-456.7891",
    email: "yourbusinessemail@address.com",
    vat: "FRXX999999999",
    trade_number: "123456789",
};

const phone_number_fotmater = (p) => {
    p = p.replace(/\D+/g, "");
    p = p.substr(0, 3) + "-" + p.substr(3, 3) + "-" + p.substr(6, 4);
    return p;
};

export const ContactUs = () => {
    return (
        <div className="contactus-container container">
            <div className="wrapper">
                <div className="contactus">
                    <div className="contact-content">
                        <h2>Contact us</h2>
                        <span className="trade_name">
                            Trade name: {contact.trade_name}
                        </span>
                        <span className="phone_number">
                            Phone number: +
                            {phone_number_fotmater(contact.phone_number)}
                        </span>
                        <span className="email">Email: {contact.email}</span>
                        <span className="VAT number">
                            VAT number: {contact.vat}
                        </span>
                        <span className="trade_number">
                            Trade number: {contact.trade_number}
                        </span>
                    </div>
                    <div className="contact-form">
                        <div>
                            <input
                                placeholder="Name"
                                className="name input-border"
                                type="text"
                            />
                            <input
                                placeholder="Email*"
                                className="email input-border"
                                type="email"
                            />
                        </div>
                        <input
                            placeholder="Phone Number"
                            className="phone_number input-border"
                            type="text"
                        />
                        <textarea
                            placeholder="Comment"
                            className="comment input-border"
                        />
                        <div className="btn-wrapper">
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
