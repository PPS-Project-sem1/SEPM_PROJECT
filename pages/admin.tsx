import React from 'react'
import {RiAdminFill} from 'react-icons/Ri'

const Home = () => {
    return (
    <div className="bg-gray-100 text-white">
        <header className="bg-indigo-500 p-2 flex items-center justify-between">
            <div className='flex flex-row justify items-center'> 
                <img src="/Emblem_of_India.svg" className="h-28 w-28"/>
                <h1 className="text-3xl font-bold ml-8">Election Commission of India</h1>
            </div>
            
                <div className='flex items-center text-black'>
                    <button className='flex items-center bg-gray-200 px-4 py-2 rounded-md'>
                        <RiAdminFill className='h-4 mr-2'/>
                        <h1 className="font-medium">Admin</h1>
                    </button>
                </div>

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
                <th className="px-2 md:px-4 py-2">Vote Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BJP_logo.svg" alt="BJP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bharatiya Janata Party</td>
                <td className="px-2 md:px-4 py-2">Narendra Modi</td>
                <td className="px-2 md:px-4 py-2"><input type="" className="border rounded-md px-2 py-1 w-24"/></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/Congress_Logo.svg" alt="Congress Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Congress</td>
                <td className="px-2 md:px-4 py-2">Rahul Gandhi</td>
                <td className="px-2 md:px-4 py-2"><input type="" className="border rounded-md px-2 py-1 w-24"/></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/AAP_Logo.svg" alt="AAP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Aam Aadmi Party</td>
                <td className="px-2 md:px-4 py-2">Arvind Kejriwal</td>
                <td className="px-2 md:px-4 py-2"><input type="" className="border rounded-md px-2 py-1 w-24"/></td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td className="px-2 md:px-4 py-2"><img src="/BSP_Logo.svg" alt="BSP Logo" className="w-8 h-8 md:w-12 md:h-12" /></td>
                <td className="px-2 md:px-4 py-2">Bahujan Samaj Party</td>
                <td className="px-2 md:px-4 py-2">Mayawati</td>
                <td className="px-2 md:px-4 py-2"><input type="" className="border rounded-md px-2 py-1 w-24"/></td>
                </tr>
            </tbody>
            
        </table>
        </div>
    </div>
    )
}

export default Home
