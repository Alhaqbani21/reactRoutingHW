import React from 'react';

function ButtonChanger(props) {
  return (
    <div class="block max-w-[18rem] rounded-lg bg-gray-500 text-left text-slate-900 hover:scale-110 hover:cursor-pointer hover:text-white max-md:w-[7rem]">
      <div class="max-md:p-4 text-center p-12">
        <h5 class="mb-1 text-xl font-medium leading-tight text-center max-md:text-lg">
          {props.title}
        </h5>
      </div>
    </div>
  );
}

export default ButtonChanger;
