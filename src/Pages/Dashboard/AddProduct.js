
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddProduct = () => {

    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    const imageStorageKey = '98d8e72d8c8c610857be60935438dd11';

    const onSubmit = async data => {



        // event.preventDefault();
        // const image = event.target.image.value;
        // const name = event.target.name.value;
        // const description = event.target.description.value;
        // const minQuantity = parseInt(event.target.minQuantity.value);
        // const availableQuantity = parseInt(event.target.availableQuantity.value);
        // const price = parseInt(event.target.price.value);
        // console.log({ image, name, description, minQuantity, availableQuantity, price });


        const formData = new FormData();
        const image = data.image[0];
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log('image-bb', result)
                if (result.success) {
                    const img = result.data.url;
                    const newProduct = {
                        image: img,
                        name: data.name,
                        description: data.description,
                        minQuantity: parseInt(data.minQuantity),
                        availableQuantity: parseInt(data.availableQuantity),
                        price: parseInt(data.availableQuantity)

                    }
                    // send to db
                    fetch('https://desolate-garden-75654.herokuapp.com/item', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Product added successfully')
                                reset()
                            }
                            else {
                                toast.error('Failed to add the product')
                            }
                        })
                }
            })

    }


    return (

        // <form onSubmit={handleSubmit}>

        //     <input type="file" name="image" placeholder="Product image" class="mt-5  input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="text" name="name" placeholder="Product name" class="mt-5  input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="text" name="description" placeholder="Product description" class="mt-5 input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="number" name="minQuantity" placeholder="Minimum Quantity" class="mt-5  input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="number" name="availableQuantity" placeholder="Available Quantity" class="mt-5  input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="number" name="price" placeholder="Price" class="mt-5  input input-bordered w-full max-w-xs" />
        //     <br />
        //     <input type="submit" value="Add" class="mt-5 btn btn-success" />

        // </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input
                    type="file"
                    placeholder="Product Image"
                    className="input input-bordered w-full max-w-xs"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Product Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Product Name"
                    className="input input-bordered w-full max-w-xs"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input
                    type="text"
                    placeholder="Description"
                    className="input input-bordered w-full max-w-xs"
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder="Available Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("availableQuantity", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Minimum Quantity</span>
                </label>
                <input
                    type="number"
                    placeholder="Minimum Quantity"
                    className="input input-bordered w-full max-w-xs"
                    {...register("minQuantity", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minQuantity.message}</span>}
                </label>
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Price(per unit)</span>
                </label>
                <input
                    type="number"
                    placeholder="Price"
                    className="input input-bordered w-full max-w-xs"
                    {...register("price", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                </label>
            </div>





            <input className='btn w-full max-w-xs btn-info text-white' type="submit" value="Add" />
        </form>

    );
};

export default AddProduct;