export default function DailyWater() {
  return(
    <div className="rounded-lg bg-white shadow-sm w-full h-full p-6">
      <h3 className="font-bold mb-3 text-xl text-blue-900">Daily Water Intake</h3>
      <div className="bg-blue-100 h-20 w-20 relative rounded-lg">
        <div className="bg-blue-900 h-10 w-20 absolute z-10 bottom-0 rounded-lg"></div>
      </div>
      5 out of 8 cups
    </div>
  )
}