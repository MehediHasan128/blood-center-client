"use client";
import useAllRequest from "../../../Hooks/useAllRequest";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import { Badge, Button, Table } from "keep-react";
import { Cube } from "phosphor-react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { TiTickOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";


const AllDonationRequest = () => {

    const [allRequest, refetch] = useAllRequest();
    const {user} = useAuthProvider();
    const axiosSecure = useAxiosSecure();
    const userEmail = user?.email;
    const donerName = user?.displayName;
    
    const donationRequest = allRequest.filter(req => req.requesterEmail !== userEmail);

    const handelRequestDone = (id, Status) =>{
        axiosSecure.patch(`/donationRequest/${id}`, {Status})
        .then(res =>{
            if(res.data.modifiedCount > 0){
                refetch();
                const donerInformation = {donerName, userEmail}
                axiosSecure.post('/doners', donerInformation)
                .then(res =>{
                    if(res.data.insertedId){
                        Swal.fire({
                            icon: "success",
                            title: 'Thanks for your donation',
                            showConfirmButton: false,
                            timer: 1000
                          });
                    }
                })
            }
        })
    }

    return (
        <div className="container mx-auto mt-10">
            <Table>
            <Table.Caption className="dark:bg-zinc-800 dark:text-white">
              <div className="my-5 flex flex-col lg:flex-row items-center justify-between px-6">
                <div className="flex items-center gap-5">
                  <p className="text-body-1 font-semibold text-metal-600">
                    Total Request
                  </p>
                  <Badge size="xs" colorType="light" color="gray">
                    {donationRequest.length}
                  </Badge>
                </div>
                <div className="flex items-center gap-5">
                  <Button type="outlineGray" size="sm" className="dark:bg-zinc-700">
                    <span className="pr-2">
                      <Cube size={24} />
                    </span>
                    New member
                  </Button>
                  <Button type="outlineGray" size="sm" className="dark:bg-zinc-700">
                    <span className="pr-2">
                      <Cube size={24} />
                    </span>
                    Search
                  </Button>
                </div>
              </div>
            </Table.Caption>
            <Table.Head className="bg-slate-100 dark:bg-zinc-600 dark:text-white">
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Recipitent Name
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Blood Group
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Location
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Date
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Time
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Hospital Name
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
              {donationRequest.map((card) => (
                <>
                  <Table.Row key={card._id} className="bg-white dark:bg-zinc-500 dark:text-white">
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.recipientName}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.recipientBloodGroup}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.recipientUpazila}, {card.recipientDistrict}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.reciptionDate}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.reciptionTime}
                      </p>
                    </Table.Cell>
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.hospitalName} <br />
                        Address: {card.fullAddress}
                      </p>
                    </Table.Cell>
                    <Table.Cell>

                    {
                        (card.Status === 'Pending') ?
                        <div className="flex gap-2">
                            <Button onClick={() => handelRequestDone(card._id, 'Inprogress to Done')} className="border border-green-600 dark:bg-slate-500" size="md" type="outlinePrimary">Done</Button>
                            <Button onClick={() => handelRequestDone(card._id, 'Inprogress to Cancel')} className="border border-red-600 dark:bg-slate-500" size="md" type="outlinePrimary">Canceled</Button>
                        </div> :
                        <>
                        {
                          card.Status === 'Inprogress to Done' ? 
                          <TiTickOutline className="text-4xl text-green-500" /> :
                          <ImCross className="text-4xl text-red-500" />
                        }
                        </>
                    }
                    </Table.Cell>
                  </Table.Row>
                </>
              ))}
            </Table.Body>
            </Table>
        </div>
    );
};

export default AllDonationRequest;