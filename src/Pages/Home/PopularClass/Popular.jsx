import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PopularCard from '../../../Components/PopularCard/PopularCard';
import Text from '../../../Components/GoogleLogin/HeadingText/Text';

const Popular = () => {
    const { data: classes = [], refetch } = useQuery(["users"], async () => {
      const res = await axios.get(
        "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/popularClass"
      );
      return res.data;
    });
    
    return (
      <div className='my_container'>
        <Text text='Popular Classes'></Text>
        <div className="lg:grid lg:grid-cols-3">
          {classes.map((c) => (
            <PopularCard key={c._id} card={c}></PopularCard>
          ))}
        </div>
      </div>
    );
};

export default Popular;