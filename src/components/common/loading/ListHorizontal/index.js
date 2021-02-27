import React from "react";

const ListHorizontal = () => {
  return (
    <div className="animate-pulse">
      <div className="font-semibold mb-2 bg-gray-400 rounded-2xl w-32 h-9" />
      <div className="overflow-hidden whitespace-nowrap pb-3">
        <div className="bg-white rounded-lg pb-2 w-80 inline-block mx-2 text-left">
          <div className="h-44 w-full rounded-t-lg bg-gray-400" />
          <div className="px-4 py-2 whitespace-normal">
            <div className="mb-1 bg-gray-400 w-3/4 h-5 my-2 rounded-2xl" />
            <div className="bg-gray-400 h-6 my-2 rounded-2xl mb-2" />
            <div className="text-xs truncate h-3 my-2 rounded-2xl bg-gray-400" />
            <hr className="my-3 border-0 h-1 bg-gray-400" />
            <div className="mb-2">
              <div className="mt-2 flex">
                <div className="h-6 bg-gray-400 rounded-2xl w-3/5" />
              </div>
              <div className="mt-2 flex">
                <div className="truncate bg-gray-400 h-6 rounded-2xl w-4/5" />
              </div>
            </div>
            <div className="tracking-wide font-bold hover:underline bg-gray-400 w-1/3 h-7 rounded-2xl ml-auto" />
          </div>
        </div>

        <div className="bg-white rounded-lg pb-2 w-80 inline-block mx-2 text-left">
          <div className="h-44 w-full rounded-t-lg bg-gray-400" />
          <div className="px-4 py-2 whitespace-normal">
            <div className="mb-1 bg-gray-400 w-3/4 h-6 rounded-2xl" />
            <div className="bg-gray-400 h-7 rounded-2xl mb-2" />
            <div className="text-xs truncate h-4 rounded-2xl bg-gray-400" />
            <hr className="my-3 border-0 h-1 bg-gray-400" />
            <div className="mb-2">
              <div className="mt-2 flex">
                <div className="h-6 bg-gray-400 rounded-2xl w-3/5" />
              </div>
              <div className="mt-2 flex">
                <div className="truncate bg-gray-400 h-6 rounded-2xl w-4/5" />
              </div>
            </div>
            <div className="tracking-wide font-bold hover:underline bg-gray-400 w-1/3 h-7 rounded-2xl ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListHorizontal;
