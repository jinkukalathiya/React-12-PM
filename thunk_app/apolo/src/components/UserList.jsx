import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  console.log("data", users);
  console.log("status", loading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === "loading") {
    return <p>Loading...........</p>;
  }

  return (
    <>
      <div>UserList</div>
      <ul className="flex flex-wrap justify-between container mx-auto">
        {users.map((user) => {
          return (
            <>
              <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
                <a href="#">
                  <img
                    className="rounded-base"
                    src={user.image}
                    alt=""
                  />
                </a>
                <a href="#">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">
                   {user.firstName}
                  </h5>
                </a>
                <p className="mb-6 text-body">
                  In today’s fast-paced digital landscape, fostering seamless
                  collaboration among Developers and IT Operations.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
