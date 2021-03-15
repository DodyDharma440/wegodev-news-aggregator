import React from "react";

const ListHorizontal = () => {
  return (
    <div className="animate-pulse">
      <div className="font-semibold mb-2 bg-gray-400 rounded-2xl w-32 h-9" />
      <div className="overflow-hidden whitespace-nowrap pb-8 -mx-2">
        <div className="bg-white rounded-2xl pb-2 w-80 inline-block mx-2">
          <div className="h-44 w-full rounded-t-2xl bg-gray-400" />
          <div className="px-4 py-2 whitespace-normal">
            <div className="mb-1 bg-gray-400 w-3/4 h-5 my-2 rounded-2xl" />
            <div className="bg-gray-400 h-6 my-2 rounded-2xl mb-2" />
            <div className="text-xs truncate h-3 my-2 rounded-2xl bg-gray-400" />
            <hr className="my-3 border-0 h-1 bg-gray-400" />
            <div className="flex mb-2 items-center">
              <div
                className="text-5xl bg-gray-400 m-1 rounded-full w-10 h-10"
                style={{ width: 38.4, height: 38.4 }}
              />
              <div className="ml-2 w-10/12">
                <div className="mb-1 bg-gray-400 h-3 my-2 w-full rounded-2xl" />
                <div className="mb-1 bg-gray-400 h-3 my-2 w-auto rounded-2xl" />
              </div>
            </div>
            <div className="tracking-wide font-bold hover:underline bg-gray-400 w-1/3 h-7 rounded-2xl ml-auto" />
          </div>
        </div>

        <div className="bg-white rounded-2xl pb-2 w-80 inline-block mx-2">
          <div className="h-44 w-full rounded-t-2xl bg-gray-400" />
          <div className="px-4 py-2 whitespace-normal">
            <div className="mb-1 bg-gray-400 w-3/4 h-5 my-2 rounded-2xl" />
            <div className="bg-gray-400 h-6 my-2 rounded-2xl mb-2" />
            <div className="text-xs truncate h-3 my-2 rounded-2xl bg-gray-400" />
            <hr className="my-3 border-0 h-1 bg-gray-400" />
            <div className="flex mb-2 items-center">
              <div
                className="text-5xl bg-gray-400 m-1 rounded-full w-10 h-10"
                style={{ width: 38.4, height: 38.4 }}
              />
              <div className="ml-2 w-10/12">
                <div className="mb-1 bg-gray-400 h-3 my-2 w-full rounded-2xl" />
                <div className="mb-1 bg-gray-400 h-3 my-2 w-auto rounded-2xl" />
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
