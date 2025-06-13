import { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";
import toast from "react-hot-toast";
import { addItem } from "../../service/ItemService.js";

const ItemForm = () => {
    const { categories, itemsData, setItemsData } = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        categoryId: "",
        price: "",
        description: "",
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Select an image");
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append("item", JSON.stringify(data)); // Send item data as JSON string
        formData.append("file", image); // File input

        try {
            const response = await addItem(formData);

            if (response.status === 201) {
                setItemsData([...itemsData, response.data]);
                toast.success("Item added");

                // Reset form
                setData({
                    name: "",
                    categoryId: "",
                    price: "",
                    description: "",
                });
                setImage(false);
            } else {
                toast.error("Unable to add an item");
            }
        } catch (error) {
            console.error(error);
            toast.error("Unable to add an item");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="item-form-container" style={{ height: '100vh', overflow: 'auto', overflowX: 'hidden' }}>
            <div className="mx-2 mt-2">
                <div className="row">
                    <div className="card col-md-8 form-container">
                        <div className="card-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">
                                        <img
                                            src={image ? URL.createObjectURL(image) : assets.upload}
                                            alt="Preview"
                                            width={48}
                                        />
                                    </label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        className="form-control"
                                        hidden
                                        onChange={onImageChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Item Name"
                                        onChange={onChangeHandler}
                                        value={data.name}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="categoryId" className="form-label">Category</label>
                                    <select
                                        name="categoryId"
                                        id="categoryId"
                                        className="form-control"
                                        onChange={onChangeHandler}
                                        value={data.categoryId}
                                    >
                                        <option value="">----SELECT CATEGORY----</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category.categoryId}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="price" className="form-label">Price</label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        className="form-control"
                                        placeholder="₹200.00"
                                        onChange={onChangeHandler}
                                        value={data.price}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        rows="5"
                                        name="description"
                                        id="description"
                                        className="form-control"
                                        placeholder="Write content here..."
                                        onChange={onChangeHandler}
                                        value={data.description}
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-warning w-100" disabled={loading}>
                                    {loading ? "Loading..." : "Save"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemForm;
