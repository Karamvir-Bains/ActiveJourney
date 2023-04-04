import { Responsive, WidthProvider } from  "react-grid-layout"
const ResponsiveGridLayout = WidthProvider(Responsive);
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import Calendar from "./widgets/_calendar";
import DailyWater from "./widgets/_daily-water";
import Overview from "./widgets/_overview";
import Header from "./_header"

export default function Dashboard() {
  const layouts = {
    lg: [
      { i: "overview", x: 0, y: 0, w: 8, h: 2},
      { i: "calendar", x: 9, y: 0, w: 4, h: 2, static: true},
      { i: "dailyWater", x: 0, y: 0, w: 6, h: 2},
      { i: "d", x: 7, y: 7, w: 6, h: 2}
    ],
    sm: [
      { i: "overview", x: 0, y: 0, w: 6, h: 2},
      { i: "calendar", x: 7, y: 7, w: 6, h: 2, static: true},
      { i: "dailyWater", x: 0, y: 0, w: 6, h: 2},
      { i: "d", x: 7, y: 7, w: 6, h: 2}
    ]
  }

  return(
    <div className="relative bg-blue">
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{
          lg: 1024,
          sm: 0
        }}
        cols={{
          lg: 12,
          sm: 6
        }}
      >
        <div key="overview">
          <Overview />
        </div>
        <div key="calendar">
          <Calendar />
        </div>
        <div key="dailyWater">
          <DailyWater />
        </div>
        <div key="d">
          <div className="rounded-lg bg-white shadow-sm w-full h-full p-6">
            <h3 className="font-bold mb-3 text-xl text-blue-900">ActiveJourney Overview</h3>
            This is a test. Replace with actual widget component
          </div>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};