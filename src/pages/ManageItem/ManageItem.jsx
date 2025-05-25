import ItemForm from '../../components/ItemForm/ItemForm';
import ItemList from '../../components/ItemList/ItemList';
import './ManageItem.css'

const ManageItem= () => {
    return (
        <div className="item-container text-light">
            <div className="left-column">
                <ItemForm/>
            </div>
            <div className="right-column">
                <ItemList/>
            </div>
        </div>
    )

}
export default ManageItem;
