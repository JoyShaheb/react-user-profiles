import React, { useEffect, useState } from "react";
import { useGetAllUsersQuery, useDeleteUserMutation } from "../store";
import Loader from "../components/Loader/Loader";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import { IPerson } from "../types";
import DeleteLoader from "../components/Loader/DeleteLoader/DeleteLoader";
import Pagination from "../components/Pagination/Pagination";

const Users = () => {
  const [stats, setStats] = useState({
    limit: 20,
    page: 0,
    total: 75,
    totalPages: 10 / 10,
  });

  const { data, isLoading, error, isFetching } = useGetAllUsersQuery({
    page: stats.page,
    limit: stats.limit,
  });

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

  const handlePageChange = (page: number) => {
    setStats({
      ...stats,
      page,
    });
  };

  useEffect(() => {
    setStats((prevStats) => ({
      ...prevStats,
      page: data?.page,
      total: data?.total,
      totalPages: Math.ceil(data?.total / data?.limit),
    }));
  }, [data]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Pagination
        currentPage={stats?.page}
        totalPages={stats?.totalPages || 0}
        onPageChange={handlePageChange}
      />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {isFetching && <DeleteLoader message="Page Fetching, please wait" />}
        {deleteIsLoading && (
          <DeleteLoader message="Deleting user, please wait" />
        )}
        {data?.data?.map((item: IPerson) => (
          <ProfileCard key={item?.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </>
  );
};

export default Users;
