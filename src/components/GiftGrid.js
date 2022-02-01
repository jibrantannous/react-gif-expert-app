import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';


export const GiftGrid = ({category}) => {

    //const [images, setImages] = useState([]);
    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            
            {loading && <p>Loading</p>}

            <div className="card-grid">
                
                
                {
                    data.map( img => (
                        <GiftGridItem 
                            key={img.id}
                            {...img} 
                        />
                    ))
                }
                
            </div>
        </>
    )
}
