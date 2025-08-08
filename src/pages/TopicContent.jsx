import React from "react";
import { Outlet } from "react-router-dom";

function TopicContent() {
  return (
    <>
      <section className="topicontent w-[80%] h-dvh min-h-dvh flex absolute left-[300px] overflow-y-auto bg-white">
        <div className="study-content w-[80%] border-r border-r-[#ccc]">
          <Outlet />
        </div>
        <aside className="advertisment min-w-2xs w-[20%] bg-red-300">
          <div className="part w-full h-screen bg-amber-300"></div>
          <div className="part w-full h-screen bg-amber-500"></div>         
        </aside>
      </section>
    </>
  );
}

export default TopicContent;
