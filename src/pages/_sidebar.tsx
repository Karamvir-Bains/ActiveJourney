import { faPersonRunning, faPlus, faGear, faUser, faBell, faList, faChartLine, faRightFromBracket }from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
  return(
    <aside id="section-sidebar" className="flex-shrink-0 sm:py-3 flex w-full sm:w-auto h-auto absolute bottom-0 z-10 sm:relative sm:z-0 bg-white">
      <div className="flex h-full w-full flex-row sm:flex-col">
        <div id="menu" className="w-full py-2 px-3 flex sm:flex-col justify-between">
          <a className="focus:outline-none group flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl mx-0 sm:mb-3 font-medium bg-blue-200 hover:bg-blue-400 p-4 text-blue-900 hover:text-white-900">
            <div className="h-5 w-5">
              <FontAwesomeIcon icon={faPersonRunning} />
            </div>
            <span className="sr-only">Home</span>
          </a>
          <div className="sm:my-3"></div>
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <span className="sr-only">Dashboard</span>
          </a>
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faList} />
            </div>
            <span className="sr-only">List View</span>
          </a>
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <span className="sr-only">Notifications</span>
          </a>
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faGear} />
            </div>
            <span className="sr-only">Settings</span>
          </a>
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faPlus} /> 
            </div>
            <span className="sr-only">Add Journal Entry</span>
          </a> 
          <a className="focus:outline-none group m-0 flex justify-center min-h-4 w-full cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
            <div className="h-4 w-4">
              <FontAwesomeIcon icon={faRightFromBracket} /> 
              <span className="sr-only">Logout</span>
            </div>
            
          </a>          
        </div>
      </div>
    </aside>
  );
}