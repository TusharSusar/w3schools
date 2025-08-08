import React from "react";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <main className="content w-full min-h-screen">
      <section className="learntocode w-full min-h-[60vh] flex flex-col justify-center items-center bg-subnav-bg">
        <h1 className="text-6xl font-bold text-btn-txt">Learn to Code</h1>
        <h2 className="text-2xl my-8 font-semibold text-[#FFF4A3]">
          With the world's largest web developer site.
        </h2>
        <div className="search-container w-[25%] mb-8 flex justify-between items-center rounded-full overflow-hidden bg-bg-pri">
          <input type="search" placeholder="Search our tutorial, e.g.HTML" className="flex-1 px-5 outline-none text-[1rem] font-bold" />
          <button type="button" className="px-10 py-3 cursor-pointer bg-btn-bg">
            <IoSearch color="#f1f1f1" size={20} />
          </button>
        </div>
        <p className="text-white font-semibold underline">Not Sure Where To Begin?</p>
      </section>
    </main>
  );
}

export default Home;
