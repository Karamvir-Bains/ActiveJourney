import { faPlus, faChevronLeft }from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Calendar() {
  return(
    <div className="rounded-lg bg-blue-200 shadow-sm w-full h-full p-6">
      <div className="flex flex-row justify-between content-center w-full">
        <button className="rounded-full bg-blue-100 p-3 text-blue-900">
          <div className="h-3 w-3">
            <FontAwesomeIcon icon={faChevronLeft} /> 
          </div>
        </button>
        <button className="rounded-full bg-blue-800 py-1 px-3 text-white">Today</button>
        <button className="rounded-full bg-blue-800 p-3 text-white">
          <div className="h-3 w-3">
            <FontAwesomeIcon icon={faPlus} /> 
          </div>
        </button>
      </div>
      <div className="my-6 bg-white p-10">
        INSERT CALENDAR HERE
      </div>
    </div>
  )
}