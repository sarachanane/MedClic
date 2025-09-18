"use client"

import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'

const ShowCommands = ({ data }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }



    return (
        <div className='w-full flex justify-center'>
            {/* <Button color='primary' onPress={() => handleOpen()} variant='flat' size='lg' startContent={<i class="ri-file-list-3-fill text-2xl"></i>}>
                Create Medication
            </Button> */}
            <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className=' absolute top-0 right-0 m-4 w-32 h-32' />

            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Table</ModalHeader>
                            <ModalBody className="flex flex-col items-center">
                                <div className='w-full h-full mb-4'>
                                    <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className='  w-2/3 h-5/6' />
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
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

export default ShowCommands