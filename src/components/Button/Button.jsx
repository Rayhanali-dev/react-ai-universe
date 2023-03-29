import React from 'react';

const Button = (props) => {
    const {children} = props
    return (
        <div className='text-center my-10'>
            <button className="btn btn-active btn-accent">{children}</button>
        </div>
    );
};

export default Button;