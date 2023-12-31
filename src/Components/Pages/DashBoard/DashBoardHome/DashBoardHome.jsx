"use client";
import { Helmet } from "react-helmet-async";
import useAuthProvider from "../../../Hooks/useAuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import AdminHome from "../AdminHome/AdminHome";
import UserHome from "../UserHome/UserHome";

const DashBoardHome = () => {
  const { user } = useAuthProvider();

  const [isAdmin] = useAdmin();

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Helmet>
        <title>Blood Center/DashBoard Home</title>
      </Helmet>
      <div>
        <h1 className="text-7xl font-semibold">
          <span className="text-red-700">Wlcome</span> {user?.displayName}
        </h1>
        <div className="mt-20">
          <div className="mt-10">
            {
              isAdmin ? <AdminHome /> : <UserHome />
            }
          {/* <Table>
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
          </Table> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
