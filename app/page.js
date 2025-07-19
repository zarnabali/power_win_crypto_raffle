import Image from "next/image";

import Footer from "./component/Footer/footer";
import WinnersParticipants from "./component/WinnerParticipant/winners-participants";
import SpinToWin from "./component/SpinToWin/spin-to-win";
import BuyTicketsSection from "./component/BuyTicket/buy-ticket";
import RaffleCompetition from "./component/Raffle/raffle-competition";
import NewNavbar from "./component/navbar/NewNavbar";
import { AddBox } from "@mui/icons-material";
import { Box } from "@mui/material";


export default function Home() {
  return (
    <>
    <Box sx={{backgroundColor:""}}>
    
    <NewNavbar/>
    <RaffleCompetition/>
    <BuyTicketsSection/>
    <SpinToWin/>
    <WinnersParticipants/>
    </Box>
    <Footer/>
    </>
  );
}