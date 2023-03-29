import React from 'react';

const SingleData = (props) => {
    const { published_in, features, name, image, id } = props.singledata;
    // const handleId = () => {
    //     console.log('modal btn clicked', id);
    // }
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='h-64 w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body h-[385px]">
                    <h2 className="card-title">Features</h2>
                    {
                        features.map((feature, index) => <p key={index}>{index + 1}. {feature}</p>)
                    }
                    <hr className='border border-stone-400' />
                    <h3 className='text-2xl font-bold'>{name}</h3>
                    <div className='flex justify-between align-middle my-4'>
                        <p>&#128197; {published_in}</p>
                        <label onClick={() => props.setUniqueId(id)} htmlFor="my-modal-5" className='bg-red-700 rounded-full p-1 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SingleData;

// https://youtu.be/de3zhw6VsGU
// https://github.com/gias-uddin-swe/SPA-with-localstorage-solution