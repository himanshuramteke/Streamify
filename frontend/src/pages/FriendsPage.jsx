import { useQuery } from "@tanstack/react-query";
import { UsersIcon } from "lucide-react";
import { Link } from "react-router";
import { FriendCard } from "../components/FriendCard";
import { getUsersFriendsApi } from "../apis/apis";

export const FriendsPage = () => {
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUsersFriendsApi,
  });

  return (
    <div className="min-h-screen bg-base-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Your Friends
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {friends.length} {friends.length === 1 ? 'friend' : 'friends'}
            </p>
          </div>
          <Link 
            to="/notifications" 
            className="btn btn-primary btn-sm shadow-sm"
          >
            <UsersIcon className="mr-2 size-4" />
            Friend Requests
          </Link>
        </div>

        {/* Friends Grid */}
        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        ) : friends.length === 0 ? (
          <div className="card bg-base-100 p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              <UsersIcon className="mx-auto size-8 text-gray-400" />
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                No friends yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Connect with other learners to see them here
              </p>
              <Link to="/" className="btn btn-primary btn-sm mt-4">
                Find Friends
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {friends.map((friend) => (
              <FriendCard key={friend._id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};