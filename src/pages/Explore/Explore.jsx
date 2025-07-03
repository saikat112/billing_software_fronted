import {useContext, useState} from 'react';
import './Explore.css'
import { AppContext } from '../../context/AppContext';
import DisplayCategory from "../../components/DisplayCategory/DisplayCategory.jsx";
import CustomerForm from "../../components/CustomerForm/CustomerForm.jsx";
import CartItems from "../../components/CartItems/CartItems.jsx";
import CartSummary from "../../components/CartSummary/CartSummary.jsx";
import DisplayItems from "../../components/Displayitems/DisplayItems.jsx";
const Explore= () => {
    const {categories} = useContext(AppContext);
    const [selectedCategory, setSelectedCategory] = useState("");

    const [mobileNumber, setMobileNumber] = useState("");
    const [customerName, setCustomerName] = useState("");
    return (
        <div className="explore-container text-light">
            <div className="left-column">
                <div className="first-row" style={{overflowX:'auto'}}>
                    <DisplayCategory
                        selectedCategory = {selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        categories={ categories }/>
                </div>
                <hr className="horizontal-line" />
                <div className="second-row" style={{overflowY:'auto'}}>
                    <DisplayItems selectedCategory = {selectedCategory}  />
                </div>
            </div>
            <div className="right-column d-flex flex-column">
                <div className="customer-form-container" style={{height:'15%'}}>
                   <CustomerForm
                       customerName={customerName}
                       mobileNumber={mobileNumber}
                       setMobileNumber={setMobileNumber}
                       setCustomerName={setCustomerName}

                   />
                </div>
                <hr className="my-3 text-light" />
                <div className="cart-item-container" style={{height:'55%', overflowY:'auto'}}>
                    <CartItems/>
                </div>
                <div className="cart-summary-cotainer" style={{height:'30%'}}>
                    <CartSummary
                        customerName={customerName}
                        mobileNumber={mobileNumber}
                        setMobileNumber={setMobileNumber}
                        setCustomerName={setCustomerName}
                    />
                </div>
            </div>
        </div>
    )

}
export default Explore;
