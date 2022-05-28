
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const AddReview = () => {

    const { handleSubmit, formState: { errors }, register, reset } = useForm();
    // const imageStorageKey = '98d8e72d8c8c610857be60935438dd11';

    const onSubmit = async data => {



        // event.preventDefault();
        // const image = event.target.image.value;
        // const name = event.target.name.value;
        // const description = event.target.description.value;
        // const minQuantity = parseInt(event.target.minQuantity.value);
        // const availableQuantity = parseInt(event.target.availableQuantity.value);
        // const price = parseInt(event.target.price.value);
        // console.log({ image, name, description, minQuantity, availableQuantity, price });




        const review = {

            name: data.name,
            review: data.review,


        }
        // send to db
        fetch('https://desolate-garden-75654.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Review added successfully')
                    reset()
                }
                else {
                    toast.error('Failed to add the Review')
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
                    <span className="label-text">Your Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Your Name"
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
                    <span className="label-text">My Review</span>
                </label>
                <input
                    type="text"
                    placeholder="My Review"
                    className="input input-bordered w-full max-w-xs"
                    {...register("review", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        }
                    })}
                />
                <label className="label">
                    {errors.review?.type === 'required' && <span className="label-text-alt text-red-500">{errors.review.message}</span>}
                </label>
            </div>







            <input className='btn w-full max-w-xs btn-info text-white' type="submit" value="Add" />
        </form>

    );
};

export default AddReview;