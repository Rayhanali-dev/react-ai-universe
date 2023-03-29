import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import SingleData from '../SingleData/SingleData';

const Card = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [uniqueId, setUniqueId] = useState(null);
    const [singledata, setSingleData] = useState({});

    const showAllBtn = () => {
        setShowAll(true);
    }

    const handleSort = () => {
        const sortedData = data.sort((a, b) => {
            return new Date(a.published_in) - new Date(b.published_in);
        });
        setData([...data, sortedData])
    }

    useEffect( () => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`)
        .then(res => res.json())
        .then(data => setSingleData(data.data))
    }, [uniqueId])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setData(data.data.tools))
    }, []);

    return (
        <>
            <span onClick={handleSort}>
                <Button>Sort By Date</Button>
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 mx-10'>
            {
                data.slice(0, showAll ? 12 : 6).map((singledata) => <SingleData singledata={singledata} key={singledata.id} setUniqueId={setUniqueId}></SingleData>)
            }
            </div>
            {!showAll &&
                <span onClick={showAllBtn}>
                    <Button>See More</Button>
                </span>
            }
            <Modal singledata={singledata}></Modal>
        </>
    );
};

export default Card;