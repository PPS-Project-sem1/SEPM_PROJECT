import React from 'react'

const Home = () => {
    return (
    <div className="bg-gray-100 text-white">
        <header className="bg-indigo-500 p-6">
            <h1 className="text-3xl font-bold">Election Commission of India</h1>
        </header>
        <div className="flex justify-center items-center md:h-screen">
            <table className=" text-black table-auto rounded-lg shadow-lg p-8 bg-gray-200">
            <thead>
                <tr>
                <th colSpan={4} className="text-center py-6">
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
                <td className="px-2 md:px-4 py-2"><img src="/BJP_logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Narendra Modi</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/Congress_Logo.svg" alt="Congress Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Congress</td>
                <td className="px-2 md:px-4 py-2">Rahul Gandhi</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/AAP_Logo.svg" alt="AAP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Aam Aadmi Party</td>
                <td className="px-2 md:px-4 py-2">Arvind Kejriwal</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BSP_Logo.svg" alt="BSP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bahujan Samaj Party</td>
                <td className="px-2 md:px-4 py-2">Mayawati</td>
                <td className="px-2 md:px-4 py-2"><button className="bg-white text-indigo-500 py-2 px-4 rounded-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">Vote</button></td>
                </tr>
            </tbody>
            
        </table>
        </div>
    </div>
    )
}

export default Home
