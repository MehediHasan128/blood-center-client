
import { Link } from "react-router-dom";
import useDonationReqCard from "../../../Hooks/useDonationReqCard";
import { Button, Table } from "keep-react";

const UserHome = () => {

    const [donationReq] = useDonationReqCard();

    return (
        <div>
           <h1 className="text-3xl font-medium">Your Recent Donation Request</h1>
            <div className="mt-10">
                <Table>
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
            </Table.Head>
            <Table.Body className="divide-y divide-gray-25">
              {donationReq.slice(0,3).map((card) => (
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
                  </Table.Row>
                </>
              ))}
            </Table.Body>
          </Table>
            </div>
            <div className="mt-10 w-fit mx-auto">
              <Link to='/dashBoard/my-donattion-request' className="bg-red-700 px-5 py-3 rounded-md text-white hover:bg-red-800 duration-700 cursor-pointer">
              <button>View All</button>
              </Link>
            </div>
        </div>
    );
};

export default UserHome;