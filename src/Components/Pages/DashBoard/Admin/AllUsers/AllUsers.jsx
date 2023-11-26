import useAllUsers from "../../../../Hooks/useAllUsers";
("use client");
import { Avatar, Badge, Table } from "keep-react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [allUser, refetch] = useAllUsers();
  const users = allUser.filter((u) => u.role !== "Admin");
  const axiosSecure = useAxiosSecure();

  const handelBlockUser = (id, status) =>{
    axiosSecure.patch(`/users/${id}`, {status})
    .then(res => {
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                icon: "success",
                title: `User ${status}`,
                showConfirmButton: false,
                timer: 1000
              });
        }
    })
    
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
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
                  <Badge size="xs" colorType="light" color="gray">
                    {users.length}
                  </Badge>
                </div>
                <div className="flex items-center gap-5"></div>
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
              {users.map((user) => (
                <>
                  <Table.Row key={user._id} className="bg-white">
                    <Table.Cell>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Avatar shape="circle" img={user.image} size="lg" />
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
                      <Badge colorType="light" color="success" dot={true}>
                        {user.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      <p>{user.blodGroup}</p>
                    </Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>
                     {
                        (user.status === 'Active') ?
                        <button onClick={() =>handelBlockUser(user._id, 'Blocked')} className="border border-red-700 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600">
                        Block
                      </button> :
                       <button onClick={() =>handelBlockUser(user._id, 'Active')} className="border border-red-700 px-4 py-2 rounded-md -mb-0.5 text-body-4 font-medium text-metal-600">
                       Unblock
                     </button>
                     }
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
