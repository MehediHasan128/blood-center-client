"use client";
import { Badge, Button, Popover, Table } from "keep-react";
import {
  Cube,
  DotsThreeOutline,
  Pencil,
  Trash,
} from "phosphor-react";
import useAllRequest from "../../../../Hooks/useAllRequest";

const AllDonationReq = () => {

    const [allRequest] = useAllRequest();
    console.log(allRequest);

    return (
        <div className="contsiner mx-auto flex justify-center items-center min-h-screen">
            <div>
            <h1 className="text-5xl font-bold text-center mb-20">
                All Donation Request
            </h1>
            <div>

            <Table
        showBorder={true}
        showBorderPosition="right"
        striped={true}
        hoverable={true}
      >
        <Table.Caption>
          <div className="my-5 flex items-center justify-between px-6">
            <div className="flex items-center gap-5">
              <p className="text-body-1 font-semibold text-metal-600">
                Total Request
              </p>
              <Badge size="xs" colorType="light" color="gray">
                {allRequest.length}
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
        <Table.Head>
          <Table.HeadCell className="min-w-[290px]">
            <p className="text-body-6 font-medium text-metal-400">Recipient Name</p>
          </Table.HeadCell>
          <Table.HeadCell>Blood Group</Table.HeadCell>
          <Table.HeadCell className="min-w-[152px]">Hospital Name</Table.HeadCell>
          <Table.HeadCell className="min-w-[240px]">
            Full Address
          </Table.HeadCell>
          <Table.HeadCell className="min-w-[215px]">Location</Table.HeadCell>
          <Table.HeadCell className="min-w-[200px]">Status</Table.HeadCell>
          <Table.HeadCell className="min-w-[100px]">Action</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-25">
          {
            allRequest.map(req => <>
                <Table.Row key={req._id} className="bg-white">
            <Table.Cell>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-4">
                  <div>
                      <p className="-mb-0.5 text-body-4 font-medium text-metal-600">
                        {req.recipientName}
                      </p>
                  </div>
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <p className="text-center -mb-0.5 text-body-4 font-medium text-metal-600">{req.recipientBloodGroup}</p>
            </Table.Cell>
            <Table.Cell>
            <p className="-mb-0.5 text-body-4 font-medium text-metal-600 text-center">{req.hospitalName}</p>
            </Table.Cell>
            <Table.Cell>
                <p className="-mb-0.5 text-body-4 font-medium text-metal-600 text-center">{req.fullAddress}</p>
            </Table.Cell>
            <Table.Cell>
              <p className="-mb-0.5 text-body-4 font-medium text-metal-600 text-center">{req.recipientUpazila}, {req.recipientDistrict}</p>
            </Table.Cell>
            <Table.Cell>
            <Button size="md" type="outlinePrimary" className={`border ${(req.Status === 'Inprogress to Done')? 'border-green-500' : 'border-red-600'}`}>{req.Status}</Button>
            </Table.Cell>
            <Table.Cell>
              <Popover
                showDismissIcon={false}
                showArrow={false}
                className="w-48 p-2 border border-metal-100"
                additionalContent={
                  <ul className="flex flex-col gap-1">
                    <li className="hover:bg-metal-100 py-1 px-2 rounded">
                      <button className="w-full flex items-center justify-between text-body-4 font-normal text-metal-600">
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
                  <DotsThreeOutline size={14} color="#5E718D" weight="bold" />
                </Button>
              </Popover>
            </Table.Cell>
          </Table.Row>
            </>)
          }
        </Table.Body>
      </Table>

            </div>
            </div>
        </div>
    );
};

export default AllDonationReq;