"use client"

import { CreateCom } from '@/actions/command.action';
import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Chip, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'
import Lottie from "lottie-react";
import check from "@/public/check.json";
import { addExchange } from '@/actions/exchange.action';
import Link from 'next/link';

const CreateExchange = ({ user, idPharmacy, myProducts, hisProducts }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState(null);
    const [event, setEvent] = useState(false);
    const [mProducts, setMProducts] = useState([]);
    const [hProducts, setHProducts] = useState([]);


    const toggleStatus = async () => {
        setPostloader(true);

        try {
            const result = await addExchange({  idPharmacy, idUser: user?._id, description: credentials?.description, status: 'pending',data:{medName:credentials?.medName} });
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
        <div className='w-full flex justify-center'>
            {/* <Button color='primary' onPress={() => handleOpen()} className='text-white' variant='solid' size='lg' startContent={<i class="ri-add-line text-2xl"></i>}>
                echange
            </Button> */}
            <button onClick={() => handleOpen()} className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >creér un echange</button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Echange </ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full h-full flex flex-col mb-4'>
                                    {/* <Input type="text" label="name" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, name:e.target.value }) }} required />
                                    <Input type="number" label="price" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, price: e.target.value }) }} required /> */}
                                    {
                                        event ?
                                            <div className='w-full flex justify-center'>
                                                <Lottie className='w-52 h-52' animationData={check} loop={false} />
                                            </div>
                                            :
                                            <>
                                                <div className=" w-full  flex justify-center">
                                                    <div className=' w-20 h-20 rounded-full bg-blue-300 flex justify-center items-center'>
                                                        <i class="ri-camera-ai-line text-3xl "></i>
                                                    </div>
                                                </div>
                                                {/* <h1 className=' font-bold'>To Offer</h1>
                                                <select name="toOffer" className='w-full h-10 mt-4 py-2' onChange={(e) => { setMProducts(prev => [...prev, e.target.value]) }} id="">
                                                    <option value={""}>select product</option>
                                                    {
                                                        myProducts?.map((p, index) => (
                                                            <option key={index} value={p?._id}>{p?.name}</option>
                                                        ))
                                                    }

                                                </select>
                                                <div className='w-full flex flex-wrap gap-2 gap-y-1 mt-4'>
                                                    {
                                                        mProducts?.map((mp, index) => (
                                                            <Chip key={index} color='success' variant='flat'  >
                                                                {myProducts?.find(item => item?._id == mp)?.name}
                                                            </Chip>
                                                        ))
                                                    }
                                                </div> */}

                                                {/* <h1 className=' font-bold'>To Get</h1>
                                                <select name="toOffer" className='w-full h-10 mt-4 py-2' onChange={(e) => { setHProducts(prev => [...prev, e.target.value]) }} id="">
                                                    <option value={""}>select product</option>
                                                    {
                                                        hisProducts?.map((p, index) => (
                                                            <option key={index} value={p?._id}>{p?.name}</option>
                                                        ))
                                                    }

                                                </select>
                                                <div className='w-full flex flex-wrap gap-2 gap-y-1 mt-4'>
                                                    {
                                                        hProducts?.map((mp, index) => (
                                                            <Chip key={index} color='secondary' variant='flat'  >
                                                                {hisProducts?.find(item => item?._id == mp)?.name}
                                                            </Chip>
                                                        ))
                                                    }
                                                </div> */}
                                                <Input type="text" label="nom de produit" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, medName: e.target.value }) }} required />
                                                <Textarea type="text" label="description" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, description: e.target.value }) }} required />

                                            </>
                                    }
                                     <div className='w-full flex-1  flex flex-col  justify-center gap-4 mt-8 '>
                                    
                                        <Button className=' text-white w-full' color="primary" onPress={toggleStatus} isLoading={postloader}>
                                            ajouter
                                        </Button>
                                        <Button as={Link} href='/dashboard/exchange/mine' className=' text-white w-full' color="danger" onPress={toggleStatus} >
                                            visiter la page des echanges
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

export default CreateExchange