import React from 'react';

const Modal = (props) => {
    const {image_link, description, integrations, features, input_output_examples, pricing

    } = props.singledata;

    return (
        <>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="card grid gap-6 grid-cols-1 lg:grid-cols-2 bg-base-100">
                        <div className="card-body border-2 border-warning">
                            <h2 className="card-title">{description ? description : "data not found"}</h2>

                            <div className='grid grid-cols-1 lg:grid-cols-3'>
                                <div className='bg-slate-500 p-4 text-center text-white font-bold text-1xl'>
                                    <h3>{pricing ? pricing[0].plan : 'data not found'}</h3>
                                    <h3>{pricing ? pricing[0].price : 'data not found'}</h3>
                                </div>
                                <div className='bg-orange-400 p-4 text-center text-white font-bold text-1xl'>
                                    <h3>{pricing ? pricing[1].plan : 'data not found'}</h3>
                                    <h3>{pricing ? pricing[1].price : 'data not found'}</h3>
                                </div>
                                <div className='bg-orange-800 p-4 text-center text-white font-bold text-1xl'>
                                    <h3>{pricing ? pricing[2].plan : 'data not found'}</h3>
                                    <h3>{pricing ? pricing[2].price : 'data not found'}</h3>
                                </div>
                            </div>

                            <div className='flex justify-between flex-col lg:flex-row'>
                                <div>
                                    <h3 className='text-xl font-bold'>Features</h3>
                                    {
                                        Object.values(features || {}).map(feature => <li key={feature.feature_name}>{feature.feature_name ? feature.feature_name : "data not found"}</li>)
                                    }
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold'>Intregrations</h3>
                                    {
                                        integrations ? integrations?.map((int, index) => <li key={index}>{int}</li>): <li>data not found</li>
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <figure><img className='w-full h-64' src={image_link ? image_link[0] : 'img not found'} alt="Album" /></figure>
                            { 
                                <h2 className='text-center text-2xl font-bold'>{input_output_examples ? input_output_examples[0].input : 'data not found'}</h2>
                            }
                            { 
                                <h2 className='text-center'>{input_output_examples ? input_output_examples[0].output : 'data not found'}</h2>
                            }
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;