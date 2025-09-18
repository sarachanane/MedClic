"use client"

import { CreateCom } from '@/actions/command.action';
import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'
import Lottie from "lottie-react";
import check from "@/public/check.json";
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const RoutePharms = ({ user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }

    const [name, setName] = useState("");
    const [postloader, setPostloader] = useState(false);
    const router = useRouter();


    return (
        <>
            {/* <Button color='primary' className='text-white' onPress={() => handleOpen()} variant='solid' size='lg' startContent={<i class="ri-add-line text-2xl"></i>}>
                recherche par ordenance ou medicament
                as={Link} href="/dashboard/home"
            </Button> */}
            <Button color='primary' onPress={() => handleOpen()} className='text-white mt-6' variant='solid' size='lg' >
                Les pharmacies
            </Button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Pharmacies </ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full h-[80vh] overflow-y-scroll hide-scrollbar mb-4'>
                                    <Input
                                        label="adresse de la pharmacie"
                                        placeholder='adresse de la pharmacie'
                                        className='w-full'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                    <div className='w-full flex-1  flex flex-col  justify-center gap-4 mt-8 '>
                                        {/* <Button className=' text-white w-full' color="primary" type='submit' isLoading={postloader}>
                                            ajouter
                                        </Button> */}
                                        <Button as={Link} href={'/dashboard/home?name='+name} className=' text-white w-full' color="danger"  >
                                            Les pharmacies
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

export default RoutePharms