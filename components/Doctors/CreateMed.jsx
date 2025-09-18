"use client"

import { CreateMedic, createProduct } from '@/actions/product.action';
import { Button, Input, Modal, ModalBody, ModalContent, ModalHeader, Textarea, useDisclosure } from '@nextui-org/react';
import React, { useState } from 'react'

const CreateMed = ({ user }) => {

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
        form.append('description', credentials.description);
        form.append('price', credentials.price);
        form.append('type', credentials.type);
        form.append('idPharmacy', user?._id);
        form.append('image', imageFile);
        try {
            const result = await CreateMedic(form);
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
            <Button color='primary' onPress={() => handleOpen()} variant='flat' size='lg' startContent={<i class="ri-file-list-3-fill text-2xl"></i>}>
                Create Medication
            </Button>
            <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose} className='fixed inset-0 pb-[env(safe-area-inset-bottom)]'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Table</ModalHeader>
                            <ModalBody className="flex flex-col items-start">
                                <div className='w-full h-full mb-4'>
                                    <Input type="text" label="name" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, name:e.target.value }) }} required />
                                    <Input type="number" label="price" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, price: e.target.value }) }} required />
                                    <select name="type" id="" className='w-full h-10 mt-4' onChange={(e) => { setCredentials({ ...credentials, type: e.target.value }) }}>
                                        <option value="">selecte type</option>
                                        <option value="medication">Medication</option>
                                        <option value="parapharma">Parapharma</option>
                                        <option value="cosmetics">Cosmetics</option>
                                    </select>
                                    <Textarea type="text" label="description" className='w-full mt-4' onChange={(e) => { setCredentials({ ...credentials, description:e.target.value }) }} required />
                                    <input type="file" name="image" onChange={handleImageChange} id="" placeholder='product image' className='mt-6'/>
                                    <div className='w-full flex-1 items-end flex justify-end gap-4 mt-8 '>
                                        <Button color="danger" variant="light" onPress={onClose}>
                                            Close
                                        </Button>
                                        <Button color="primary" onPress={toggleStatus} isLoading={postloader}>
                                            {/* <CircleTextToggle postloader={postloader} text={"Submit"} color={"default"} size={"sm"} /> */}
                                            add
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