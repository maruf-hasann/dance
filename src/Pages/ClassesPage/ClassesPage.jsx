import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ClassCard from '../../Components/ClassCard/ClassCard';
import useTitle from '../../Hooks/useTitle';

const ClassesPage = () => {
  useTitle('Classes')
      const { data: classes = [], refetch } = useQuery(["users"], async () => {
        const res = await axios.get(
          "https://b7a12-summer-camp-server-side-maruf-hasann.vercel.app/popularClass"
        );
        return res.data;
      });
    // console.log(classes);
    return (
        <div className='my_container'>
            <div className='lg:grid lg:grid-cols-3'>
                {
                    classes.map(c => <ClassCard card={c} key={c._id}></ClassCard>)
                }
          </div>
        </div>
    );
};

export default ClassesPage;