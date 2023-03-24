import React from "react";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../store";
import Loader from "../components/Loader/Loader";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { IPerson } from "../types";
import DeleteLoader from "../components/Loader/DeleteLoader/DeleteLoader";

const Users = () => {
  const { data, isLoading, error } = useGetAllUsersQuery({});
  console.log("data", data);
  const [deleteUser, { isLoading: deleteIsLoading, error: deleteError }] =
    useDeleteUserMutation();

  const onDelete = async (id: string) => {
    try {
      await deleteUser(id).unwrap();
    } catch (err) {
      console.error("Failed to delete user:", err);
    } finally {
    }
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {deleteIsLoading && <DeleteLoader message="Deleting user, please wait" />}
      {data?.data?.map((item: IPerson) => (
        <ProfileCard key={item?.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default Users;
