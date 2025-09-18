"use client"

import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const CreateMed = ({ user,type,title,path,visit}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    const [postloader, setPostloader] = useState(false);
    const [credentials, setCredentials] = useState(null);
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


    const toggleStatus = async () => {
        setPostloader(true);
        const form = new FormData();
        form.append('name', credentials.name);
        form.append('data_type', "reduction");
        form.append('description', credentials.description);
        form.append('category', credentials.category);
        form.append('price', credentials.price);
        form.append('oldPrice', credentials.oldPrice);
        form.append('type', type);
        form.append('idPharmacy', user?._id);
        form.append('image', imageFile);
        try {
            const result = await CreateMedic(form);
            console.log(" Lresult : ",result);
            if (result.success) {
                onClose();
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
            {/* <Button color='primary' onPress={() => handleOpen()} variant='flat' size='lg' startContent={<i class="ri-file-list-3-fill text-2xl"></i>}>
                cree medicament
            </Button> */}
            <button onClick={() => handleOpen()} className='w-4/5  text-sm  text-center  bg-white py-2  flex justify-center rounded-full  font-semibold text-blue-400' >{title}</button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full h-[80vh] overflow-y-scroll hide-scrollbar  mb-4'>
                                    {!imagePreview ?
                                        <div className="flex items-center justify-center w-full mt-4">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100   ">
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">choiser une image </span></p>
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
                                    <Input type="text" label="nom de produit" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, name: e.target.value }) }} required />
                                    <select name="category" className='w-full h-10 mt-4' onChange={(e) => { setCredentials({ ...credentials, category: e.target.value }) }} id="">
                                        <option value="">Choisissez la nature de votre produit</option>
                                        <option value="complements-alimentaire">Compléments alimentaire</option>
                                        <option value="bebe-et-maman">bébé et maman</option>
                                        <option value="soins-quotidiens">Soins quotidiens</option>
                                        <option value="peau-et-corps">Peau et corps</option>
                                        <option value="nouveaute">Nouveaute</option>
                                    </select>
                                    <Input type="number" label="prix" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, price: e.target.value }) }} required />
                                    { type == "reduction" ? <Input type="number" label="prix ancien" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, oldPrice: e.target.value }) }} required />: null }
                                    {/* <select name="type" id="" className='w-full h-10 mt-4' onChange={(e) => { setCredentials({ ...credentials, type: e.target.value }) }}>
                                        <option value="">selecte type</option>
                                        <option value="medication">Medication</option>
                                        <option value="parapharma">Parapharma</option>
                                        <option value="cosmetics">Cosmetics</option>
                                    </select> */}
                                    <Textarea type="text" label="description" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, description: e.target.value }) }} required />
                                    {/* <input type="file" name="image" onChange={handleImageChange} id="" placeholder='product image' className='mt-6'/> */}
                                    <div className='w-full flex-1  flex flex-col  justify-center gap-4 mt-8 '>
                                    
                                        <Button className=' text-white w-full' color="primary" onPress={toggleStatus} isLoading={postloader}>
                                            ajouter
                                        </Button>
                                        <Button as={Link} href={'/dashboard/'+path} className=' text-white w-full' color="danger"  >
                                            consulter les publications precedentes
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

export default CreateMed