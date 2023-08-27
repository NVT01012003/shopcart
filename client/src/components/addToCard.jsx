import Tick from "../imgs/tick.png";
import Close from "../imgs/close.png";
import "../styles/cartAdded.scss";

export const AddToCard = ({ item, show }) => {
    const { showAdded, setShowAdded } = show;
    return (
        <div className="add-to-cart-wrapper" id={showAdded ? "showAdded" : ""}>
            <div>
                <img src={Tick} alt="tick-icon" />
                <span>Item added to your cart</span>
            </div>
            <div className="product-wrapper">
                <img
                    src={item.photos[0]}
                    alt="product-photo"
                    className="product-photo"
                />
                <div>
                    <h4>{item.name}</h4>
                    <span>Color: {item.specifications.color}</span>
                </div>
            </div>
            <div className="outline-btn-wrapper">
                <button>
                    <a href="/cart">View cart</a>
                </button>
            </div>
            <div className="btn-wrapper">
                <button>Check out</button>
            </div>
            <div className="close-wrapper">
                <img
                    src={Close}
                    alt="close-icon"
                    onClick={() => setShowAdded(false)}
                />
            </div>
        </div>
    );
};
