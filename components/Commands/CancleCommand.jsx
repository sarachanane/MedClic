"use client"

import { CreateCom, RefuseCom } from '@/actions/command.action';
import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'
import Lottie from "lottie-react";
import check from "@/public/check.json";

const CancleCommand = ({ idCommand, idPharmacy }) => {

    console.log("  idPharmacy : ", idPharmacy);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const [postloader, setPostloader] = useState(false);
    const [event, setEvent] = useState(false);


    const toggleStatus = async () => {
        setPostloader(true);
        const form = new FormData();
        // form.append('name', credentials.name);
        try {
            const result = await RefuseCom(idCommand, idPharmacy);
            console.log("  result result result : ", result);
            if (result.success) {
                setEvent(true)
                onClose()
            }
        } catch (error) {
            console.error('Error adding employees:', error);
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }


    return (
        <div className=''>
            {/* <button onClick={() => handleOpen()} className=' px-4 text-center py-2 bg-red-500 text-white rounded-lg'>Refuse</button> */}
            <Button isIconOnly size='lg' color='danger' radius='full' variant='flat' onPress={() => handleOpen()}>
                <i class="ri-close-large-line text-xl "></i>
            </Button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Current Command</ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full  mb-4'>
                                    <h1 className=' text-3xl font-bold'>Are You Sure ?</h1>
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={toggleStatus} isLoading={postloader} className='text-white'>
                                            Confirm
                                        </Button>
                                    </div>

                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>

        </div>
    )
}

export default CancleCommand