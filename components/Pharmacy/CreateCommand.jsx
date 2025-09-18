"use client"

import { CreateCom } from '@/actions/command.action';
import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Chip, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'
import Lottie from "lottie-react";
import check from "@/public/check.json";
import { addPanier } from '@/actions/panier.action';

const CreateCommand = ({selected , setSelected, products, user, idPharmacy, pharmacy }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState({products:selected});
    const [event, setEvent] = useState(false);


    const toggleStatus = async () => {
        setPostloader(true);
        try {
            const result = await addPanier({...credentials,idUser:user?._id, idPharmacy});
            if (result.success) {
                // onClose();
                setEvent(true)
            }
        } catch (error) {
            console.error('Error adding employees:', error);
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }


    return (
        <div className='w-full flex justify-end'>
            <Button color='primary' onPress={() => handleOpen()} className='text-white' variant='solid' size='lg' startContent={<i class="ri-shopping-basket-line text-2xl"></i>}>
                Panier {credentials?.products?.length > 0 ? credentials?.products?.length: null}
            </Button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Commander</ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full '>
                                    <Chip color={pharmacy?.data?.delivary == "true" ? "success" : "danger"} className='text-white'  >
                                        {pharmacy?.data?.delivary == "true" ? "livraison disponible" : "livraison indosponible"}
                                    </Chip>
                                </div>
                                <div className='w-full h-full mb-4'>
                                    {/* <Input type="text" label="name" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, name:e.target.value }) }} required />
                                    <Input type="number" label="price" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, price: e.target.value }) }} required /> */}
                                    {
                                        event ?
                                            <div className='w-full flex justify-center'>
                                                <Lottie className='w-52 h-52' animationData={check} loop={false} />
                                            </div>
                                            :
                                            <>
                                                <select className=' w-full h-10 mt-4 ' name="products" id="" onChange={(e) => { setCredentials({ ...credentials, products: [e.target.value, ...(credentials?.products?.length > 0 ? credentials?.products : [])] }) }} >
                                                    <option value="">select les produits</option>
                                                    {
                                                        products?.filter(item => !credentials?.products?.includes(item?._id))?.map((p, index) => (
                                                            <option key={index} value={p._id}> {p?.name} </option>
                                                        ))
                                                    }
                                                </select>
                                                <div className='w-full flex flex-wrap gap-4 mt-4'>
                                                    {
                                                        credentials?.products?.map((p, index) => (
                                                            <Chip color='success' variant='flat' onClick={()=>{setSelected(prev => prev.filter(i => i != p)),setCredentials({...credentials,products:credentials?.products?.filter(i => i != p)})}}    >
                                                                {products?.find(i => i._id == p)?.name}
                                                            </Chip>
                                                        ))
                                                    }

                                                </div>
                                                <Textarea type="text" label="description" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, description: e.target.value }) }} required />
                                            </>
                                    }
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Ferme
                                        </Button>
                                        <Button className='text-white' color="primary" onPress={toggleStatus} isLoading={postloader}>
                                            Ajouter
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

export default CreateCommand