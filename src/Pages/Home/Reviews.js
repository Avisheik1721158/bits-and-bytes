import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading, refetch } = useQuery('reviews', () => fetch(`https://desolate-garden-75654.herokuapp.com/review`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {/* <div className="mockup-phone  ">
                <div className="camera"></div>
                <div className="display">
                    <div className="artboard artboard-demo phone-1">
                        <h2 className='text-bold text-emerald-600 text-2xl'> Reviews</h2>
                        <div className="mockup-code mt-2">

                            <pre data-prefix=">" className="text-warning"><code>{reviews.length}</code></pre>
                            <pre data-prefix=">" className="text-success"><code></code></pre>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* key={review._id}

            review={review}

            refetch={refetch} */}

            {
                reviews.map((review) =>

                    <div
                        key={review._id}

                        // review={review}

                        refetch={refetch}
                        class="card w-96 bg-secondary text-primary-content">
                        <div class=" card-body">
                            <h2 class="card-title">Review!</h2>
                            <p>{review.name}</p>
                            <p>{review.review}</p>

                        </div>
                    </div>

                )
            }

        </div>
    );
};

export default Reviews;