import React from 'react'

const Login = () => {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center items-center mb-4">
            <img src="/Emblem_of_India.svg" alt="Ashoka Lion Emblem" className="w-64 h-64 mr-2" />
        </div>
        <form className="space-y-4">
            <div>
                <label className="text-gray-700 font-medium" htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
                <label className="text-gray-700 font-medium" htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 focus:ring-opacity-50" />
            </div>
            <div>
                <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Login</button>
            </div>
        </form>
        </div>
    </div>
    )
}

export default Login
