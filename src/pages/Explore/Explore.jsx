import './Explore.css'
const Explore= () => {
    return (
        <div className="explore-container text-light">
            <div className="left-column">
                <div className="first-row" style={{overflowX:'auto'}}>
                    caregories
                </div>
                <hr className="horizontal-line" />
                <div className="second-row" style={{overflowY:'auto'}}>
                    items
                </div>
            </div>
            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{height:'15%'}}>
                    Customer Form
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-item-container" style={{height:'55%', overflowY:'auto'}}>
                    cart Items
                </div>
                <div className="cart-summary-cotainer" style={{height:'30%'}}>
                    cary summary
                </div>
            </div>
        </div>
    )

}
export default Explore;
