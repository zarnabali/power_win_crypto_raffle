import Image from "next/image";

import Footer from "./component/Footer/footer";
import WinnersParticipants from "./component/WinnerParticipant/winners-participants";
import SpinToWin from "./component/SpinToWin/spin-to-win";
import BuyTicketsSection from "./component/BuyTicket/buy-ticket";
import RaffleCompetition from "./component/Raffle/raffle-competition";
import Navbar from "./component/navbar/navbar";

export default function Home() {
  return (
    <>
    <Navbar/>
    <RaffleCompetition/>
    <BuyTicketsSection/>
    <SpinToWin/>
    <WinnersParticipants/>
    <Footer/>
    </>
  );
}