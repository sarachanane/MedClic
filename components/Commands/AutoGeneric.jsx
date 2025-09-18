"use client"

import { UpdateCommandDataKey } from "@/actions/command.action";
import { UpdateUserDataKey } from "@/actions/user.action";
import { Spinner } from "@nextui-org/react";
import { useSession } from "next-auth/react";

import { useState } from "react";

const AutoGeneric = ({user, status }) => {
    const [postloader, setPostloader] = useState(false);
    const handleStatusToggle = async () => {
        setPostloader(true);
        try {
            const result = await UpdateCommandDataKey(user?._id, { $set: { "data.generic": status } })
        } catch (error) {
            console.error('Error change status:', error);
        }
        setPostloader(false);
    }
    return (
        <div className="w-full px-4 mt-6 ">
            <h1 className=" font-bold">disponible en  generiques </h1>
            <div className=' flex mt-2  items-center gap-2'>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={status == "true" ? false : true}
                        onChange={handleStatusToggle}
                    />
                    <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-blue-400 transition-all duration-500 peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:w-4 after:h-4 after:bg-white after:rounded-full after:transition-all"></div>
                </label>
                {
                    postloader ?
                        <Spinner color="primary" size="sm" />
                        : null
                }

            </div>
        </div>
    )
}

export default AutoGeneric