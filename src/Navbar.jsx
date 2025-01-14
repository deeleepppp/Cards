import React from "react";

export default function Navbar({data}) {
    const cartCount = data.filter(item => item.added).length;
    
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center">
      <h3 className="italic font-semibold text-orange-600 underline">Orange</h3>
      <div className="flex p-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-2 ">
        <h3>Favorites</h3>
        <h4>{cartCount}</h4>
      </div>
    </div>
  );
}
