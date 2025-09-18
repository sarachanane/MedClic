"use client"

import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import React, { useState } from 'react'
import AutoGeneric from './AutoGeneric';
import { updateMongoCommand } from '@/actions/command.action';
import AutoDel from './AutoDel';

const ShowCommands = ({ user, data }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }


    const [credentials, setCredentials] = useState({ idPharmacy: user?._id, data: { resStatus: "valid" } })
    const [postloader, setPostLoader] = useState(false)

    const handleChange = async () => {
        setPostLoader(true);
        const res = await updateMongoCommand({ _id: data?._id }, credentials);
        if (res) {
            setPostLoader(false);
            onClose();
            window.location.reload();
        } else {
            setPostLoader(false);
        }

    }



    return (
        <div className=' '>
            {/* <Button color='primary' onPress={() => handleOpen()} variant='flat' size='lg' startContent={<i class="ri-file-list-3-fill text-2xl"></i>}>
                Create Medication
            </Button> */}
            {/* <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className=' absolute top-0 right-0 m-4 w-32 h-32' /> */}
            <Button size='lg' color='success' radius='full' variant='flat' onPress={() => handleOpen()} endContent={<i class="ri-multi-image-line  text-2xl"></i>} >
                {/* <i class="ri-check-line text-3xl"></i> */}
                ouvrir
            </Button>

            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 bg-blue-400 ">decouvrir</ModalHeader>
                            <ModalBody className="flex flex-col items-center">
                                <div className='w-full h-[80vh] overflow-y-scroll hide-scrollbar   flex flex-col items-center mb-4'>
                                    {data?.imageUrl  ? <Image onClick={() => handleOpen()} src={data?.imageUrl} width={100} height={100} className='  w-2/3 h-5/6' /> : null}
                                    {data?.data?.medName && data?.data?.medName != "undefined" ? <h1 className='text-2xl font-semibold mt-4'> nom de medicament : {data?.data?.medName}</h1> : null}
                                    <AutoDel user={data} status={data?.data?.delevery == "true" ? "false" : "true"} />
                                    <AutoGeneric user={data} status={data?.data?.generic == "true" ? "false" : "true"} />
                                    <Textarea label="Description" className='mt-4' placeholder="Entrer une description" onChange={(e) => { setCredentials({ ...credentials, data: { ...credentials?.data, resDes: e.target.value } }) }} />
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="primary" variant="flat" onPress={handleChange} isLoading={postloader} >
                                            confirmer command
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