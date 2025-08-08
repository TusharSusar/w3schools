import React from "react";
import { NavLink } from "react-router-dom";

function Subtopnav() {
  const subtopnav = [
    { name: "HTML", path: "/html/default.asp" },
    { name: "CSS", path: "/css/default.asp" },
    { name: "JAVASCRIPT", path: "/js/default" },
    { name: "SQL", path: "/sql/default.asp" },
    { name: "PYTHON", path: "/python/default.asp" },
    { name: "JAVA", path: "/java/default.asp" },
    { name: "PHP", path: "/php/default.asp" },
    { name: "HOW TO", path: "/howto/default.asp" },
    { name: "W3.CSS", path: "/w3css/default.asp" },
    { name: "C", path: "/c/index.php" },
    { name: "C++", path: "/cpp/default.asp" },
    { name: "C#", path: "/cs/index.php" },
    { name: "BOOTSTRAP", path: "/bootstrap/bootstrap_ver.asp" },
    { name: "REACT", path: "/react/default.asp" },
    { name: "MYSQL", path: "/mysql/default.asp" },
    { name: "JQUERY", path: "/jquery/default.asp" },
    { name: "EXCEL", path: "/excel/index.php" },
    { name: "XML", path: "/xml/default.asp" },
    { name: "DJANGO", path: "/django/index.php" },
    { name: "NUMPY", path: "/python/numpy/default.asp" },
    { name: "PANDAS", path: "/python/pandas/default.asp" },
    { name: "NODEJS", path: "/nodejs/default.asp" },
    { name: "DSA", path: "/dsa/index.php" },
    { name: "TYPESCRIPT", path: "/typescript/index.php" },
    { name: "ANGULAR", path: "/angular/default.asp" },
    { name: "GIT", path: "/git/default.asp" },
    { name: "POSTGRESQL", path: "/postgresql/index.php" },
    { name: "MONGODB", path: "/mongodb/index.php" },
    { name: "ASP", path: "/asp/default.asp" },
    { name: "AI", path: "/ai/default.asp" },
    { name: "R", path: "/r/default.asp" },
    { name: "GO", path: "/go/index.php" },
    { name: "KOTLIN", path: "/kotlin/index.php" },
    { name: "SASS", path: "/sass/default.php" },
    { name: "VUE", path: "/vue/index.php" },
    { name: "GEN AI", path: "/gen_ai/index.php" },
    { name: "SCIPY", path: "/python/scipy/index.php" },
    { name: "CYBERSECURITY", path: "/cybersecurity/index.php" },
    { name: "DATA SCIENCE", path: "/datascience/default.asp" },
    { name: "INTRO TO PROGRAMMING", path: "/programming/index.php" },
    { name: "BASH", path: "/bash/index.php" },
    { name: "RUST", path: "/rust/index.php" },
    // { name: "HTML", href: "/html/default.asp", title: "HTML Tutorial" },
    // { name: "CSS", href: "/css/default.asp", title: "CSS Tutorial" },
    // {
    //   name: "JAVASCRIPT",
    //   href: "/js/default.asp",
    //   title: "JavaScript Tutorial",
    // },
    // { name: "SQL", href: "/sql/default.asp", title: "SQL Tutorial" },
    // { name: "PYTHON", href: "/python/default.asp", title: "Python Tutorial" },
    // { name: "JAVA", href: "/java/default.asp", title: "Java Tutorial" },
    // { name: "PHP", href: "/php/default.asp", title: "PHP Tutorial" },
    // { name: "HOW TO", href: "/howto/default.asp", title: "How to" },
    // { name: "W3.CSS", href: "/w3css/default.asp", title: "W3.CSS Tutorial" },
    // { name: "C", href: "/c/index.php", title: "C Tutorial" },
    // { name: "C++", href: "/cpp/default.asp", title: "C++ Tutorial" },
    // { name: "C#", href: "/cs/index.php", title: "C# Tutorial" },
    // {
    //   name: "BOOTSTRAP",
    //   href: "/bootstrap/bootstrap_ver.asp",
    //   title: "Bootstrap Tutorial",
    // },
    // { name: "REACT", href: "/react/default.asp", title: "React Tutorial" },
    // { name: "MYSQL", href: "/mysql/default.asp", title: "MySQL Tutorial" },
    // { name: "JQUERY", href: "/jquery/default.asp", title: "JQuery Tutorial" },
    // { name: "EXCEL", href: "/excel/index.php", title: "Excel Tutorial" },
    // { name: "XML", href: "/xml/default.asp", title: "XML Tutorial" },
    // { name: "DJANGO", href: "/django/index.php", title: "Django Tutorial" },
    // {
    //   name: "NUMPY",
    //   href: "/python/numpy/default.asp",
    //   title: "NumPy Tutorial",
    // },
    // {
    //   name: "PANDAS",
    //   href: "/python/pandas/default.asp",
    //   title: "Pandas Tutorial",
    // },
    // { name: "NODEJS", href: "/nodejs/default.asp", title: "Node.js Tutorial" },
    // { name: "DSA", href: "/dsa/index.php", title: "DSA Tutorial" },
    // {
    //   name: "TYPESCRIPT",
    //   href: "/typescript/index.php",
    //   title: "TypeScript Tutorial",
    // },
    // {
    //   name: "ANGULAR",
    //   href: "/angular/default.asp",
    //   title: "Angular.js Tutorial",
    // },
    // { name: "GIT", href: "/git/default.asp", title: "Git Tutorial" },
    // {
    //   name: "POSTGRESQL",
    //   href: "/postgresql/index.php",
    //   title: "PostgreSQL Tutorial",
    // },
    // { name: "MONGODB", href: "/mongodb/index.php", title: "MongoDB Tutorial" },
    // { name: "ASP", href: "/asp/default.asp", title: "ASP Tutorial" },
    // { name: "AI", href: "/ai/default.asp", title: "A.I. Tutorial" },
    // { name: "R", href: "/r/default.asp", title: "R Tutorial" },
    // { name: "GO", href: "/go/index.php", title: "Go Tutorial" },
    // { name: "KOTLIN", href: "/kotlin/index.php", title: "Kotlin Tutorial" },
    // { name: "SASS", href: "/sass/default.php", title: "Sass Tutorial" },
    // { name: "VUE", href: "/vue/index.php", title: "Vue.js Tutorial" },
    // { name: "GEN AI", href: "/gen_ai/index.php", title: "Gen A.I. Tutorial" },
    // { name: "SCIPY", href: "/python/scipy/index.php", title: "SciPy Tutorial" },
    // {
    //   name: "CYBERSECURITY",
    //   href: "/cybersecurity/index.php",
    //   title: "Cyber security Tutorial",
    // },
    // {
    //   name: "DATA SCIENCE",
    //   href: "/datascience/default.asp",
    //   title: "Data science Tutorial",
    // },
    // {
    //   name: "INTRO TO PROGRAMMING",
    //   href: "/programming/index.php",
    //   title: "Introduction to Programming",
    // },
    // { name: "BASH", href: "/bash/index.php", title: "Bash Tutorial" },
    // { name: "RUST", href: "/rust/index.php", title: "Rust Tutorial" },
  ];

  return (
    <section className="subtopnav md:px-14 w-full bg-subnav-bg flex overflow-x-auto text-[15px] font-medium">
      {subtopnav.map((ele, index) => (
        <NavLink
          key={index}
          to={ele.path || '#'}
          className="px-4 py-1.5 whitespace-nowrap text-subnav-txt hover:bg-black capitalize cursor-pointer"
        >
          {ele.name}
        </NavLink>
      ))}
    </section>
  );
}

export default Subtopnav;
