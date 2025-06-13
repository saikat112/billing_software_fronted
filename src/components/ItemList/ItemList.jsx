import {useContext, useState} from "react";
import {AppContext} from "../../context/AppContext.jsx";
import {deleteItem} from "../../service/ItemService.js";
import toast from "react-hot-toast";
import './ItemList.css'

const ItemList = () =>{
    const { itemsData, setItemsData } = useContext(AppContext);
   const [searchTerm, setSearchTerm] = useState("");
   const filteredItems = itemsData.filter((item) => {
       return item.name.toLowerCase().includes(searchTerm.toLowerCase());
   }) ;

   const removeItem = async (itemId) => {
       try{
           const response =  await deleteItem(itemId);
            if(response.status === 204){
                const updatedItems = itemsData.filter((item) => item.itemId !== itemId);
                setItemsData(updatedItems);
                toast.success("Item deleted");
            } else {
                toast.error("Error deleting item");
            }
       }catch(error){
           console.error(error);
            toast("Error deleting item");
       }
   }

    return (
        <div className="category-list-container" style={{height:'100vh', overflowY:'auto', overflowX:'hidden'}}>
            <div className="row pe-2">
                <div className="input-group mb-3">
                    <input type="text"
                           name="keyword"
                           id="keyword"
                           placeholder="Search by keyword"
                           className='form-control'
                           onChange={(e) => setSearchTerm(e.target.value)}
                           value={searchTerm}
                    />
                    <span className="input-group-text bg-warning">
                       <i className="bi bi-search"></i>
                   </span>
                </div>
            </div>
            <div className="row g-3 pe-2">
                {filteredItems.map((item, index) => (
                    <div className="col-12" key={index}>
                        <div className="card p-3 bg-dark">
                            <div className="d-flex align-items-center">
                                <div  style={{marginRight: '10px'}}>
                                    <img src={item.imgUrl} alt={item.name} className="item-image" />
                                </div>
                                <div className="flex-grow-1">
                                    <h6 className="mb-1 text-white">{item.name}</h6>
                                    <p className="mb-0 text-white">
                                        Category : {item.categoryName}
                                    </p>
                                    <spam className="mb-0 text-block badge rounded-pill text-bg-warning">
                                        &#8377; {item.price}
                                    </spam>
                                </div>
                                <div>
                                    <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.itemId)}>
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemList;