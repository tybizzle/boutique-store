import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className='text-center text-title my-2'>
      <h1 className='text-bold'>
        {name} {title}
      </h1>
    </div>
  );
};

export default Title;
