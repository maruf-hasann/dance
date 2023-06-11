import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import ClassCard from '../../Components/ClassCard/ClassCard';

const ClassesPage = () => {
      const { data: classes = [], refetch } = useQuery(["users"], async () => {
        const res = await axios.get("http://localhost:5000/popularClass");
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