import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const jsSidebarItems = [
    {
      title: "JS Tutorial",
      links: [
        { name: "JS HOME", href: "default.asp" },
        { name: "JS Introduction", href: "default/js_intro" },
        { name: "JS Where To", href: "js_whereto.asp" },
        { name: "JS Output", href: "js_output.asp" },
        { name: "JS Statements", href: "js_statements.asp" },
        { name: "JS Syntax", href: "js_syntax.asp" },
        { name: "JS Comments", href: "js_comments.asp" },
        { name: "JS Variables", href: "js_variables.asp" },
        { name: "JS Let", href: "js_let.asp" },
        { name: "JS Const", href: "js_const.asp" },
        { name: "JS Operators", href: "js_operators.asp" },
        { name: "JS Arithmetic", href: "js_arithmetic.asp" },
        { name: "JS Assignment", href: "js_assignment.asp" },
        { name: "JS Data Types", href: "js_datatypes.asp" },
        { name: "JS Functions", href: "js_functions.asp" },
        { name: "JS Objects", href: "js_objects.asp" },
        { name: "JS Object Properties", href: "js_object_property.asp" },
        { name: "JS Object Methods", href: "js_object_method.asp" },
        { name: "JS Object Display", href: "js_object_display.asp" },
        { name: "JS Events", href: "js_events.asp" },
        { name: "JS Strings", href: "js_strings.asp" },
        { name: "JS String Templates", href: "js_string_templates.asp" },
        { name: "JS Numbers", href: "js_numbers.asp" },
        { name: "JS BigInt", href: "js_bigint.asp" },
        { name: "JS Arrays", href: "js_arrays.asp" },
        { name: "JS Dates", href: "js_dates.asp" },
        { name: "JS Math", href: "js_math.asp" },
        { name: "JS Random", href: "js_random.asp" },
        { name: "JS Booleans", href: "js_booleans.asp" },
        { name: "JS Comparisons", href: "js_comparisons.asp" },
        { name: "JS If Else", href: "js_if_else.asp" },
        { name: "JS Switch", href: "js_switch.asp" },
        { name: "JS Loop For", href: "js_loop_for.asp" },
        { name: "JS Loop For In", href: "js_loop_forin.asp" },
        { name: "JS Loop For Of", href: "js_loop_forof.asp" },
        { name: "JS Loop While", href: "js_loop_while.asp" },
        { name: "JS Break", href: "js_break.asp" },
        { name: "JS Sets", href: "js_sets.asp" },
        { name: "JS Maps", href: "js_maps.asp" },
        { name: "JS Typed Arrays", href: "js_typed_arrays.asp" },
        { name: "JS Iterables", href: "js_iterables.asp" },
        { name: "JS Iterators", href: "js_iterators.asp" },
        { name: "JS typeof", href: "js_typeof.asp" },
        { name: "JS toString()", href: "js_tostring.asp" },
        { name: "JS Type Conversion", href: "js_type_conversion.asp" },
        { name: "JS Destructuring", href: "js_destructuring.asp" },
        { name: "JS Bitwise", href: "js_bitwise.asp" },
        { name: "JS RegExp", href: "js_regexp.asp" },
        { name: "JS Precedence", href: "js_precedence.asp" },
        { name: "JS Errors", href: "js_errors.asp" },
        { name: "JS Scope", href: "js_scope.asp" },
        { name: "JS Hoisting", href: "js_hoisting.asp" },
        { name: "JS Strict Mode", href: "js_strict.asp" },
        { name: "JS Classes", href: "js_classes.asp" },
        { name: "JS Modules", href: "js_modules.asp" },
        { name: "JS JSON", href: "js_json.asp" },
        { name: "JS Debugging", href: "js_debugging.asp" },
        { name: "JS Style Guide", href: "js_conventions.asp" },
        { name: "JS Best Practices", href: "js_best_practices.asp" },
        { name: "JS Mistakes", href: "js_mistakes.asp" },
        { name: "JS Performance", href: "js_performance.asp" },
        { name: "JS Reserved Words", href: "js_reserved.asp" },
        { name: "JS News 2025", href: "js_news.asp" },
      ],
    },
    {
      title: "JS Strings",
      links: [
        { name: "JS String Methods", href: "js_string_methods.asp" },
        { name: "JS String Search", href: "js_string_search.asp" },
        { name: "JS String Reference", href: "js_string_reference.asp" },
      ],
    },
    {
      title: "JS Numbers",
      links: [
        { name: "JS Number Methods", href: "js_number_methods.asp" },
        { name: "JS Number Properties", href: "js_number_properties.asp" },
        { name: "JS Number Reference", href: "js_number_reference.asp" },
        { name: "JS Math Reference", href: "js_math_reference.asp" },
      ],
    },
    {
      title: "JS Arrays",
      links: [
        { name: "JS Array Methods", href: "js_array_methods.asp" },
        { name: "JS Array Search", href: "js_array_search.asp" },
        { name: "JS Array Sort", href: "js_array_sort.asp" },
        { name: "JS Array Iterations", href: "js_array_iteration.asp" },
        { name: "JS Array Reference", href: "js_array_reference.asp" },
        { name: "JS Array Const", href: "js_array_const.asp" },
      ],
    },
    {
      title: "JS Functions",
      links: [
        { name: "Function Definitions", href: "js_function_definition.asp" },
        { name: "Function Arrows", href: "js_arrow_function.asp" },
        { name: "Function Parameters", href: "js_function_parameters.asp" },
        { name: "Function Invocation", href: "js_function_invocation.asp" },
        { name: "Function this Keyword", href: "js_function_this.asp" },
        { name: "Function Call", href: "js_function_call.asp" },
        { name: "Function Apply", href: "js_function_apply.asp" },
        { name: "Function Bind", href: "js_function_bind.asp" },
        { name: "Function Closures", href: "js_function_closures.asp" },
      ],
    },
    {
      title: "JS Objects",
      links: [
        { name: "Object Definitions", href: "js_object_definition.asp" },
        { name: "Object Constructors", href: "js_object_constructors.asp" },
        { name: "Object this Keyword", href: "js_this.asp" },
        { name: "Object Prototypes", href: "js_object_prototypes.asp" },
        { name: "Object Methods", href: "js_object_methods.asp" },
        { name: "Object Properties", href: "js_object_properties.asp" },
        { name: "Object Get / Set", href: "js_object_accessors.asp" },
        { name: "Object Protection", href: "js_object_protection.asp" },
        { name: "Object Reference", href: "js_object_reference.asp" },
      ],
    },
    {
      title: "JS Classes",
      links: [
        { name: "JS Class Introduction", href: "js_classes_intro.asp" },
        { name: "JS Class Inheritance", href: "js_classes_inheritance.asp" },
        { name: "JS Class Static", href: "js_classes_static.asp" },
        { name: "JS Class Super", href: "js_classes_super.asp" },
        { name: "JS Class Reference", href: "js_classes_reference.asp" },
      ],
    },
    {
      title: "JS Sets & Maps",
      links: [
        { name: "JS Sets", href: "js_sets.asp" },
        { name: "JS Set Methods", href: "js_set_methods.asp" },
        { name: "JS Maps", href: "js_maps.asp" },
        { name: "JS Map Methods", href: "js_map_methods.asp" },
      ],
    },
    {
      title: "JS Date",
      links: [
        { name: "JS Date Formats", href: "js_date_formats.asp" },
        { name: "JS Date Get Methods", href: "js_date_get.asp" },
        { name: "JS Date Set Methods", href: "js_date_set.asp" },
        { name: "JS Date Reference", href: "js_date_reference.asp" },
      ],
    },
    {
      title: "JS RegExp",
      links: [
        { name: "JS RegExp Introduction", href: "js_regexp.asp" },
        { name: "JS RegExp Methods", href: "js_regexp_methods.asp" },
        { name: "JS RegExp Patterns", href: "js_regexp_patterns.asp" },
        { name: "JS RegExp Modifiers", href: "js_regexp_modifiers.asp" },
        { name: "JS RegExp Reference", href: "js_regexp_reference.asp" },
      ],
    },
    {
      title: "JS JSON",
      links: [
        { name: "JSON Introduction", href: "js_json_intro.asp" },
        { name: "JSON Syntax", href: "js_json_syntax.asp" },
        { name: "JSON vs XML", href: "js_json_xml.asp" },
        { name: "JSON Data Types", href: "js_json_datatypes.asp" },
        { name: "JSON Parse", href: "js_json_parse.asp" },
        { name: "JSON Stringify", href: "js_json_stringify.asp" },
        { name: "JSON Objects", href: "js_json_objects.asp" },
        { name: "JSON Arrays", href: "js_json_arrays.asp" },
        { name: "JSON Server", href: "js_json_server.asp" },
      ],
    },
  ];

  return (
    <aside className="md:w-[300px] h-dvh flex justify-end absolute left-0 bg-bg-pri">
      <section className="sidebar md:w-[230px] md:h-full pb-8 overflow-y-auto bg-sidebar-bg">
        {jsSidebarItems.map((ele, index) => {
          return (
            <>
              <div className="text-[21px] px-4 py-1.5" key={index}>
                {ele.title}
              </div>
              <div>
                {ele.links.map((name) => (
                  <NavLink to={name.href} className="block text-[15px] px-4 py-0.5">{name.name}</NavLink>
                ))}
              </div>
            </>
          );
        })}
      </section>
    </aside>
  );
}

export default Sidebar;
