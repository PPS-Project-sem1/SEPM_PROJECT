import React from 'react'

const Home = () => {
    return (
    <div className="bg-indigo-500 text-white">
        <header className="p-4">
            <h1 className="text-3xl font-bold">Election Commission of India</h1>
        </header>
        <div className="flex justify-center items-center md:h-screen">
            <table className="table-auto">
            <thead>
                <tr>
                <th colSpan={4} className="text-center py-4">
                    Location Based on Aadhaar: India
                </th>
                </tr>
                <tr>
                <th className="px-2 md:px-4 py-2">Election Symbol</th>
                <th className="px-2 md:px-4 py-2">Party</th>
                <th className="px-2 md:px-4 py-2">Candidate Name</th>
                <th className="px-2 md:px-4 py-2">Vote</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BJP_Logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Kapil Nehra</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BJP_Logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Kapil Nehra</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BJP_Logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Kapil Nehra</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BJP_Logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Kapil Nehra</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default Home
