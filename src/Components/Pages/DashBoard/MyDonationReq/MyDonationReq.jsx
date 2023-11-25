import useAuthProvider from "../../../Hooks/useAuthProvider";
import useDonationReqCard from "../../../Hooks/useDonationReqCard";

const MyDonationReq = () => {

    const {user} = useAuthProvider();
    const [donationReq] = useDonationReqCard();
    console.log(donationReq);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <div>
                    <h1 className="text-center text-3xl leading-relaxed font-semibold">Hey <span className="text-red-700">{user?.displayName}</span>! <br />Heare you can find your all donation request</h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default MyDonationReq;