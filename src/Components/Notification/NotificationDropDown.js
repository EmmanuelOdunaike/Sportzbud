import { Button, Drawer } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import profilePic from '../../Asset/person/profile.png'
import NotificationData from '../../Asset/Dummy/Notification'
const NotificationItem = ({ item }) => {
    const { name, message, time } = item // destructuring
    return (
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
            <Link to="#" className="flex py-3  hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-11 h-11 rounded-full" src={profilePic} alt="image" />
                {/* <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                                <svg className="w-3 h-3 text-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            </div> */}

                <div className="pl-3">
                    <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">{name} <span className="font-semibold text-gray-900 dark:text-white">{message}</span></div>
                    <div className="text-xs text-blue-600 dark:text-blue-500">{time}</div>
                </div>
            </Link>

        </div>
    )
}
