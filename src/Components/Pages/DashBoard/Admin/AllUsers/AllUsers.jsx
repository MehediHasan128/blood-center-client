import useAllUsers from "../../../../Hooks/useAllUsers";
("use client");
import { Avatar, Badge, Table } from "keep-react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { IoFilterSharp } from "react-icons/io5";
import { useState } from "react";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [allUser, refetch] = useAllUsers();
  const users = allUser.filter((u) => u.role !== "Admin");
  const [filterActive, setFilterActive] = useState(false);
  const [filterUsers, setFilterUsers] = useState([]);
  console.log(filterUsers);
  console.log(filterActive);

  const handelBlockUser = (id, status) => {
    axiosSecure.patch(`/users/${id}`, { status }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: `User ${status}`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const handelFilterUsers = (e) => {
    const filterValue = e.target.value;
    if (filterValue !== "Users") {
      setFilterActive(true);
      axiosSecure.get(`/filterUsers/${filterValue}`).then((res) => {
        const filter = res.data;
        setFilterUsers(filter);
      });
    } else {
      setFilterActive(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Blood Center/All Users</title>
      </Helmet>
      <div>
        <h1 className="text-4xl font-bold mb-10">All Users</h1>
        <div>
          <Table>
            <Table.Caption>
              <div className="my-5 flex items-center justify-between px-6">
                <div className="flex items-center gap-5">
                  <p className="text-body-1 font-semibold text-metal-600">
                    Total Users
                  </p>
                  {filterActive ? (
                    <>
                      <Badge size="xs" colorType="light" color="gray">
                        {filterUsers.length}
                      </Badge>
                    </>
                  ) : (
                    <>
                      <Badge size="xs" colorType="light" color="gray">
                        {users.length}
                      </Badge>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-5 border-2 px-5 py-3 rounded-lg">
                  <IoFilterSharp className="text-xl" />
                  <form>
                    <select
                      onChange={(e) => handelFilterUsers(e)}
                      className="focus:outline-none px-1 text-lg font-medium text-gray-500 cursor-pointer"
                      name="filter"
                    >
                      <option value="" disabled selected>Filter</option>
                      <option value="Users">All Users</option>
                      <option value="Active">Active</option>
                      <option value="Blocked">Blocked</option>
                    </select>
                  </form>
                </div>
              </div>
            </Table.Caption>
            <Table.Head>
              <Table.HeadCell className="min-w-[290px]">
                <p className="text-body-6 font-medium text-metal-400">
                  User Name
                </p>
              </Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell className="min-w-[152px]">
                Blood Group
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[240px]">
                Email Address
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[200px]">Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
              {filterActive ? (
                <>
                  {filterUsers.map((user) => (
                    <>
                      <Table.Row key={user._id} className="bg-white">
                        <Table.Cell>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Avatar
                                  shape="circle"
                                  img={user.image}
                                  size="lg"
                                />
                                <div>
                                  <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                                    {user.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <Badge
                            className={`font-semibold ${
                              user.status === "Active"
                                ? "text-green-500"
                                : "text-red-700"
                            }`}
                          >
                            {user.status}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>
                          <p>{user.blodGroup}</p>
                        </Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>
                          {user.status === "Active" ? (
                            <button
                              onClick={() =>
                                handelBlockUser(user._id, "Blocked")
                              }
                              className="border border-red-700 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600"
                            >
                              Block
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handelBlockUser(user._id, "Active")
                              }
                              className="border border-green-500 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600"
                            >
                              Unblock
                            </button>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </>
                  ))}
                </>
              ) : (
                <>
                  {users.map((user) => (
                    <>
                      <Table.Row key={user._id} className="bg-white">
                        <Table.Cell>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <Avatar
                                  shape="circle"
                                  img={user.image}
                                  size="lg"
                                />
                                <div>
                                  <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                                    {user.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Table.Cell>
                        <Table.Cell>
                          <Badge
                            className={`font-semibold ${
                              user.status === "Active"
                                ? "text-green-500"
                                : "text-red-700"
                            }`}
                          >
                            {user.status}
                          </Badge>
                        </Table.Cell>
                        <Table.Cell>
                          <p>{user.blodGroup}</p>
                        </Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>
                          {user.status === "Active" ? (
                            <button
                              onClick={() =>
                                handelBlockUser(user._id, "Blocked")
                              }
                              className="border border-red-700 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600"
                            >
                              Block
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                handelBlockUser(user._id, "Active")
                              }
                              className="border border-green-500 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600"
                            >
                              Unblock
                            </button>
                          )}
                        </Table.Cell>
                      </Table.Row>
                    </>
                  ))}
                </>
              )}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
