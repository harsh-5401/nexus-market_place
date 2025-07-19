import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducer";
import { fetchUsers } from "../slices/userSlice";
import UserTable from "../components/UserTable";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import ViewToggle from "../components/ViewToggle";
import { toast } from "react-toastify";
import Layout from "../components/Layout";

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredUsers, isLoading, error } = useSelector(
    (state: RootState) => state.users
  );
  const [view, setView] = useState<"table" | "card">("card"); // Default to card view

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 nexus-gradient-text">Nexus Marketplace</h1>
          <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover unique items from our community
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white dark:bg-neutral-950 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
          <SearchBar />
          <ViewToggle view={view} setView={setView} />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-lg animate-pulse nexus-gradient-text">Loading listings...</div>
          </div>
        ) : (
          <>
            {view === "table" ? (
              <div className="transition-all duration-300 ease-in-out fade-in">
                <UserTable users={filteredUsers} />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-300 ease-in-out fade-in">
                {filteredUsers.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))}
                {filteredUsers.length === 0 && (
                  <div className="col-span-full text-center py-12 bg-white dark:bg-neutral-950 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-800">
                    <p className="text-lg text-neutral-500 dark:text-neutral-400">No listings found.</p>
                    <p className="text-sm mt-2">Try adjusting your search criteria.</p>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default UserList; 