import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import SubjectContent from "./pages/SubjectContent";
import TopicContent from "./pages/TopicContent";
import Home from "./pages/Home";
import Intro from "./pages/Intro";

function App() {
  const router = createBrowserRouter([
    {
      path: "/w3schools",
      element: <AppLayout />,
      children: [
        {
          path: "/w3schools",
          element: <Home />,
        },
        {
          path: "/js",
          element: <SubjectContent />,
          children: [
            {
              path: "default",
              element: <TopicContent />,
              children: [{ path: "js_intro", element: <Intro /> }],
            },

            // { path: "js_Where To", element: "js_whereto.asp" },
            // { path: "js_Output", element: "js_output.asp" },
            // { path: "js_Statements", element: "js_statementsF.asp" },
            // { path: "js_Syntax", element: "js_syntax.asp" },
            // { path: "js_Comments", element: "js_comments.asp" },
            // { path: "js_Variables", element: "js_variables.asp" },
            // { path: "js_Let", element: "js_let.asp" },
            // { path: "js_Const", element: "js_const.asp" },
            // { path: "js_Operators", element: "js_operators.asp" },
            // { path: "js_Arithmetic", element: "js_arithmetic.asp" },
            // { path: "js_Assignment", element: "js_assignment.asp" },
            // { path: "js_Data Types", element: "js_datatypes.asp" },
            // { path: "js_Functions", element: "js_functions.asp" },
            // { path: "js_Objects", element: "js_objects.asp" },
            // { path: "js_Events", element: "js_events.asp" },
            // { path: "js_Strings", element: "js_strings.asp" },
            // { path: "js_String Methods", element: "js_string_methods.asp" },
            // { path: "js_Numbers", element: "js_numbers.asp" },
            // { path: "js_Arrays", element: "js_arrays.asp" },
            // { path: "js_Array Methods", element: "js_array_methods.asp" },
            // { path: "js_Dates", element: "js_dates.asp" },
            // { path: "js_Booleans", element: "js_booleans.asp" },
            // { path: "js_Comparisons", element: "js_comparisons.asp" },
            // { path: "js_Conditions", element: "js_conditions.asp" },
            // { path: "js_Switch", element: "js_switch.asp" },
            // { path: "js_Loops", element: "js_loops.asp" },
            // { path: "js_Break", element: "js_break.asp" },
            // { path: "js_Type Conversion", element: "js_type_conversion.asp" },
            // { path: "js_Bitwise", element: "js_bitwise.asp" },
            // { path: "js_Regular Expressions", element: "js_regexp.asp" },
            // { path: "js_Errors", element: "js_errors.asp" },
            // { path: "js_Debugging", element: "js_debugging.asp" },
            // { path: "js_Hoisting", element: "js_hoisting.asp" },
            // { path: "js_Strict_Mode", element: "js_strict.asp" },
            // { path: "js_This_Keyword", element: "js_this.asp" },
            // { path: "js_Arrow_", element: "js_arrow_function.asp" },
            // { path: "js_Classes", element: "js_classes.asp" },
            // { path: "js_JSON", element: "js_json.asp" },
            // { path: "js_Sets", element: "js_sets.asp" },
            // { path: "js_Maps", element: "js_maps.asp" },
            // { path: "js_Date", element: "js_date.asp" },
            // { path: "js_Math", element: "js_math.asp" },
            // { path: "js_Random", element: "js_random.asp" },
            // { path: "js_Reference", element: "js_reference.asp" },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
