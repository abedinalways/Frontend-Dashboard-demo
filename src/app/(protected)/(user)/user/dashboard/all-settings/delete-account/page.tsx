"use client"


import DeleteAccountModal from "@/src/components/user/deleteAccount/DeleteAccountModal";
import DeleteAccountSection from "@/src/components/user/deleteAccount/DeleteAccountSection";
import { useModal } from "@/src/hooks/useModal";
import { redirect } from "next/navigation";

const DeleteAccountPage = () => {
    const { isOpen: isDeleteModalOpen, openModal: openDeleteModal, closeModal: closeDeleteModal } = useModal();
    return (
        <div>
            <DeleteAccountSection onDelete={() => openDeleteModal()} />
            <DeleteAccountModal
                isOpen={isDeleteModalOpen}
                onClose={closeDeleteModal}
                onSendCode={(email) => {
                    console.log("send code to:", email);
                    // 🔜 API call
                    redirect(`/user/dashboard/all-settings/delete-account/${email}`)
                }}
            />


        </div>
    )
}
export default DeleteAccountPage;