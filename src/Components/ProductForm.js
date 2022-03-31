import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductForm() {
    const [productType, setProductType] = useState('');

    const handleSelect = (e) => {
        const selectedValue = e.target.value
        if (selectedValue === 'dvd') {
            setProductType(selectedValue);
        } else if (selectedValue === 'furniture') {
            setProductType(selectedValue);
        } else if (selectedValue === 'book') {
            setProductType(selectedValue);
        } else {
            setProductType('');
        };
    };

  return (
      <div className="card mb-3" style={{margin:'1rem', padding:'1rem'}}>
        <form>
            <fieldset>
                <div style={{display:'flex', margin:'0.5rem'}}>
                    <legend>Product Add</legend>
                    <Link to="/">
                    <button type="button" class="btn btn-success" style={{margin:'0.5rem'}}>Save</button>
                    </Link>
                    <Link to="/">
                        <button type="button" class="btn btn-danger" style={{margin:'0.5rem'}}>Cancel</button>
                    </Link>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputSku1" className="form-label mt-4">SKU</label>
                    <input type="text" className="form-control" id="exampleInputSku1" aria-describedby="skuHelp" placeholder="SKU"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputName1" className="form-label mt-4">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPrice1" className="form-label mt-4">Price ($)</label>
                    <input type="price" className="form-control" id="exampleInputPrice1" placeholder="Price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1" className="form-label mt-4">Type Switcher</label>
                    <select className="form-select" id="exampleSelect1" onChange={handleSelect}>
                        <option value="">Select type</option>
                        <option value="dvd">DVD</option>
                        <option value="furniture">Furniture</option>
                        <option value="book">Book</option>
                    </select>
                </div>
                <div className="form-group">
                    {productType === 'dvd' && (
                        <>
                            <label htmlFor="exampleInputSize1" className="form-label mt-4">Size (MB)</label>
                            <input type="size" className="form-control" id="exampleInputSize1" placeholder="Please, provide size"/>
                        </>
                    )}
                    {productType === 'furniture' && (
                        <>
                            <label htmlFor="exampleInputHeight1" className="form-label mt-4">Height (CM)</label>
                            <input type="height" className="form-control" id="exampleInputHeight1" placeholder="Please, provide height"/>
                            <label htmlFor="exampleInputWidth1" className="form-label mt-4">Width (CM)</label>
                            <input type="width" className="form-control" id="exampleInputWidth1" placeholder="Please, provide width"/>
                            <label htmlFor="exampleInputLength1" className="form-label mt-4">Length (CM)</label>
                            <input type="length" className="form-control" id="exampleInputLength1" placeholder="Please, provide length"/>
                        </>
                    )}
                    {productType === 'book' && (
                        <>
                            <label htmlFor="exampleInputWeight1" className="form-label mt-4">Weight (KG)</label>
                            <input type="weight" className="form-control" id="exampleInputWeight1" placeholder="Please, provide weight"/>
                        </>
                    )}
                </div>
            </fieldset>
        </form>
      </div>
  );
};