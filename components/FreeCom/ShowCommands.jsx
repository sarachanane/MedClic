"use client"

import { updateMongoCommand } from '@/actions/command.action';
import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ShowCommands = ({ data }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }

    const [postloader, setPostLoader ] = useState(false)

    const refuseOffer = async () => {
        setPostLoader(true)
        try{
            const res = await updateMongoCommand({_id:data?._id},{idPharmacy:null,"data.resStatus":"non","data.resDes":'',"data.idPharmacy":""})
            if(res?.success){
                onClose()
                toast.success("terminer ✅")
            }
            setPostLoader(false)   
        }catch(e){
            setPostLoader(false)   
        }
        setPostLoader(false)

    }



    return (
        <>
            <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className='  rounded-lg   m-4 w-32 h-full' />
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">page</ModalHeader>
                            <ModalBody className="flex flex-col items-center">
                                <div className='w-full h-full flex flex-col items-center  mb-4'>
                                    <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className='  w-3/4 h-5/6' />
                                    <div className='w-full flex justify-start mt-6'>
                                       <span className='  font-bold'>Description</span> : <p> {data?.data?.resDes}</p>
                                    </div>
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" isLoading={postloader} variant="flat" onPress={refuseOffer}>
                                            refuser
                                        </Button>
                                    </div>

                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default ShowCommands