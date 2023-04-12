import { useState } from 'react';

interface propsType {
  progress: string;
}

const ProgressBar = (props: propsType) => {
  const [progress, setProgress] = useState(props.progress);
  const progressClass = `bg-red-600 h-1 rounded-full dark:bg-red-500 w-[9%]`;

  return (
    <div className="px-5">
      <div className="mb-1 text-black text-md font-medium">Progress</div>
      <div className="w-full h-1 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
        <div className={progressClass}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
