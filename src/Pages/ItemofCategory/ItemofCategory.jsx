import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ArtCard from '../../components/ArtCard/ArtCard';

const ItemofCategory = () => {

    const data = useLoaderData();
    const {id} = useParams();

    return (
        <div className='w-[85%] mx-auto mb-20 mt-14'>
        <h2 className='animate__animated animate__heartBeat text-4xl font-bold text-center mb-6'>Art Items of {id}</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {data.map((card)=>(
                <ArtCard key={card._id} card={card} from="home"></ArtCard>
            ))}
        </div>
        </div>
        
    );
};

export default ItemofCategory;