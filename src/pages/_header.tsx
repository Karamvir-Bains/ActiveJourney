import { faUser }from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  return(
    <header className="pb-6">
      <h2 className="text-3xl font-bold">
        Hello Bingo!
      </h2>
      <p>Welcome to ActiveJourney</p>
      <nav className="flex content-center bg-blue-100 rounded-xl px-3 my-3">
        <h1 className="self-center font-medium text-lg m-0">Dashboard</h1>
        <a className="ml-auto cursor-pointer items-center rounded-xl px-4 font-medium hover:bg-blue-100 p-4 text-blue-900">
          <div className="h-4 w-4">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <span className="sr-only">Profile</span>
        </a>
      </nav>
    </header>
    
  )
}
