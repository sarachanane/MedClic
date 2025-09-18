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

const CreateFreeCom = ({ user,idPharmacy }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState(null);
    const [event, setEvent] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const handleImageChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setImageFile(file);
            setImagePreview(fileUrl);
            // const blurData = await getBase64(fileUrl);
            // setImagePreviewDataBlur(blurData);
        }
    };


    const toggleStatus = async (e) => {
        e.preventDefault();
        setPostloader(true);
        const form = new FormData();
        // form.append('name', credentials.name);
        form.append('description', credentials?.description);
        form.append('medName', credentials?.medName);
        // form.append('price', credentials.price);
        form.append('idPharmacy', idPharmacy);
        form.append('idUser', user?._id);
        form.append('image', imageFile);
        try {
            console.log("form L ", form);
            const result = await CreateCom(form);
            console.log("result L ", result);

            if (result.success) {
                // onClose();
                // setEvent({success:true})
                setImageFile(null)
                setImagePreview(null)
                // toast.success("envoyer ✅")
                setEvent(true)
                setPostloader(false);
            }
        } catch (error) {
            console.error('Error adding employees:', error);
        } finally {
            setPostloader(false);
        }
        setPostloader(false);
    }


    return (
        <>
            <Button color='primary' className='text-white' onPress={() => handleOpen()} variant='solid' size='lg' >
                commander
            </Button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Ajouter </ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <form onSubmit={toggleStatus} className='w-full h-[80vh] overflow-y-scroll hide-scrollbar mb-4'>
                                    {/* <Input type="text" label="name" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, name:e.target.value }) }} required />
                                    <Input type="number" label="price" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, price: e.target.value }) }} required /> */}
                                    {
                                        event ?
                                            <div className='w-full flex justify-center'>
                                                <Lottie className='w-52 h-52' animationData={check} loop={false} />
                                            </div>
                                            :
                                            <>
                                                {!imagePreview ?
                                                    <div className="flex items-center justify-center w-full mt-4">
                                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100   ">
                                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                                </svg>
                                                                <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">image d'ordonnance </span></p>
                                                                <p className="text-xs text-gray-500 ">PNG,SVG,JPG...</p>
                                                            </div>
                                                            <input id="dropzone-file" onChange={handleImageChange} type="file" accept="image/*" className="hidden" />
                                                        </label>
                                                    </div>
                                                    :
                                                    <div className="w-full mt-4 flex flex-col justify-center items-center">
                                                        <div className="w-full flex justify-end"><i onClick={() => { setImagePreview(null) }} class="ri-close-circle-line cursor-pointer text-primary-3 text-lg"></i></div>
                                                        <Image src={imagePreview} width={1980} height={1080} className='w-[270px] h-[190px] rounded-3xl object-cover' />
                                                    </div>
                                                }
                                                <p className='mb-6 mt-6 pt-6 w-full border-t font-bold ' >ou par nom</p>
                                                <Input type="text" label="nom de medicament" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, medName: e.target.value }) }} />
                                                <Textarea type="text" label="description" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, description: e.target.value }) }} />
                                                {/* <input type="file" name="image" onChange={handleImageChange} id="" placeholder='product image' className='mt-6' /> */}
                                            </>
                                    }
                                    {/* <div className='w-full flex-1  items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            fermer
                                        </Button>
                                        <Button color="primary" className='text-white' type='submit' isLoading={postloader}>
                                            ajouter
                                        </Button>
                                    </div> */}
                                    <div className='w-full flex-1  flex flex-col  justify-center gap-4 mt-8 '>
                                        <Button className=' text-white w-full' color="primary" type='submit' isLoading={postloader}>
                                            ajouter
                                        </Button>
                                        <Button as={Link} href={'/dashboard/freecom'} className=' text-white w-full' color="danger"  >
                                            consulter les publications precedentes
                                        </Button>
                                    </div>

                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default CreateFreeCom