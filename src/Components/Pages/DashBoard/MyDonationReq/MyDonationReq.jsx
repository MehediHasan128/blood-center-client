"use client";
import Swal from "sweetalert2";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useDonationReqCard from "../../../Hooks/useDonationReqCard";
import { Badge, Button, Popover, Table } from "keep-react";
import { Cube, DotsThreeOutline, Pencil, Trash } from "phosphor-react";

const MyDonationReq = () => {
  const { user } = useAuthProvider();
  const [donationReq, refetch] = useDonationReqCard();
  const axiosSecure = useAxiosSecure();

  const handelDeleteDonation = (id) => {
    Swal.fire({
      title: "Are you sure? You want to delete this request",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/donationRequest/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="lg:flex justify-center items-center min-h-screen">
      <div>
        <div className="text-center md:text-2xl lg:text-4xl font-bold lg:font-semibold">
          <h1>
            Hey <span className="text-red-700">{user?.displayName}</span>!
          </h1>
          <p className="mt-5">Here you can find your all donation request</p>
        </div>
        <div className="mt-20">
          <Table>
            <Table.Caption>
              <div className="my-5 flex flex-col lg:flex-row items-center justify-between px-6">
                <div className="flex items-center gap-5">
                  <p className="text-body-1 font-semibold text-metal-600">
                    Total Request
                  </p>
                  <Badge size="xs" colorType="light" color="gray">
                    {donationReq.length}
                  </Badge>
                </div>
                <div className="flex items-center gap-5">
                  <Button type="outlineGray" size="sm">
                    <span className="pr-2">
                      <Cube size={24} />
                    </span>
                    New member
                  </Button>
                  <Button type="outlineGray" size="sm">
                    <span className="pr-2">
                      <Cube size={24} />
                    </span>
                    Search
                  </Button>
                </div>
              </div>
            </Table.Caption>
            <Table.Head className="bg-slate-100">
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Recipitent Name
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
                Status
              </Table.HeadCell>
              <Table.HeadCell className="min-w-[120px] lg:min-w-[160px]">
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
              {donationReq.map((card) => (
                <>
                  <Table.Row key={card._id} className="bg-white">
                    <Table.Cell>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {card.recipientName}
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
                      <Button
                        className={`border ${
                          card.Status === "Inprogress to Done"
                            ? "border-green-500"
                            : "border-red-600"
                        }`}
                        size="md"
                        type="outlinePrimary"
                      >
                        {card.Status}
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Popover
                        showDismissIcon={false}
                        showArrow={false}
                        className="w-48 p-2 border border-metal-100"
                        additionalContent={
                          <ul className="flex flex-col gap-1">
                            <li className="hover:bg-metal-100 py-1 px-2 rounded">
                              <button
                                onClick={() => handelDeleteDonation(card._id)}
                                className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600"
                              >
                                <span>Delete</span>
                                <span>
                                  <Trash />
                                </span>
                              </button>
                            </li>
                            <li className="hover:bg-metal-100 py-1 px-2 rounded">
                              <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
                                <span>Edit</span>
                                <span>
                                  <Pencil />
                                </span>
                              </button>
                            </li>
                          </ul>
                        }
                      >
                        <Button type="outlineGray" size="xs" circle={true}>
                          <DotsThreeOutline
                            size={14}
                            color="#5E718D"
                            weight="bold"
                          />
                        </Button>
                      </Popover>
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

export default MyDonationReq;
