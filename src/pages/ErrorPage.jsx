import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {

    return (
        <div>
            <h1>error page</h1>
            <p>This is not a valid path, please go back to home page</p>
            <Link to="/"> <button className='border border-gray-500 mt-4 p-2 cursor-pointer hover:bg-gray-400 hover:text-gray-800 rounded-xl'>Go back to home</button></Link>
        </div>
    )
}

export default ErrorPage