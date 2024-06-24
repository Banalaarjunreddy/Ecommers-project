import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios'
export default function AddProduct() {
    const [name, setName]=useState("")
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [stock,setStock]=useState('')
    const userRole=localStorage.getItem("userRole")
    async function handleAddProduct(){
        const newProduct={name,price,description,category,stock,role:userRole}
        const response=await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/products/add`,newProduct)
        console.log(response)
    }
    return (
        <div className='add-product-container'>
            <div className='form-group'>
                <label>Name</label>
                <input 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Price</label>
                <input 
                    value={price}
                    onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Description</label>
                <input 
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Category</label>
                <input 
                    value={category}
                    onChange={(e)=>setCategory(e.target.value)}/>
            </div>
            <div className='form-group'>
                <label>Stock</label>
                <input 
                    value={stock}
                    onChange={(e)=>setStock(e.target.value)}/>
            </div>
            <button onClick={handleAddProduct}>Add product</button>
        </div>
    )
}