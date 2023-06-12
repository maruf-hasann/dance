import React from 'react';
import { Fade} from "react-awesome-reveal";
const Text = ({text}) => {
    return (
      <div>
        <Fade>
          <h2 className="font-bold text-4xl text-center mb-14">{text}</h2>
        </Fade>
      </div>
    );
};

export default Text;