import './CategoryForm.css'
const CategoryForm = () => {
    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="image" className='form-label'>
                                    <img src="https://placehold.co/48x48" alt="" width={48} />
                                </label>
                                <input type="file" name="image" id="image" className='form-control' hidden />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className='form-name'>Name</label>
                                <input type="text"
                                    name='name'
                                    id='name'
                                    className='form-control'
                                    placeholder='Category Name'
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Description" className='form-name'>Description</label>
                                <textarea
                                    rows="5"
                                    name='description'
                                    id='description'
                                    className='form-control'
                                    placeholder='Write content here...'
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bgcolor" className='form-label'>Background color </label>
                                <br/>
                                <input type="color"
                                    name='bgColor'
                                    id='bgcolor'
                                    placeholder='#ffffff' />
                            </div>
                            <button type='submit' className='btn btn-warning w-100'>save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CategoryForm;
