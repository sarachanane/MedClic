import { Modal, ModalBody, ModalContent, ModalHeader, useDisclosure } from '@nextui-org/react';
import React from 'react'

const AddMedication = ({ user }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <form className='w-full'>
            <div class="relative mb-2 bg-transparent  ">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <i class="ri-phone-line"></i>
                </div>
                <input type="text" name="phone" id="input-group-1" class=" bg-transparent  border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  darkk:bg-gray-700 darkk:border-gray-600 darkk:placeholder-gray-400 darkk:text-white darkk:focus:ring-blue-500 darkk:focus:border-blue-500" placeholder="phone" />
            </div>
            <button onClick={() => onOpen()} className='px-4 py-2 rounded-lg bg-primary-1 text-white font-semibold'>add medication</button>
        </form>
    )
}

export default AddMedication