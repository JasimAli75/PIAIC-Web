"use client"; 
import Header from "@/Components/Header/Header";

import Topcontainer from "@/Components/Topcontainer";
import Midcontainer from "@/Components/Midcontainer";
import { Box } from "@chakra-ui/react";
import React from 'react'
// import Nevbar from "@/Components/Nevbar";
import Ct from "@/Components/Cta/Ct";
import Hili from "@/Components/highlights/Hili";
import Newletter from "@/Components/newletter/Newletter";
import Faq from "@/Components/Fqa/Faq";
import Footer from "@/Components/Footer/Footer";

export default function page() {
  return (
    <>
    <Header/>
    
    <Box>
    <Box as="main"></Box>
    <Topcontainer/>
    <Midcontainer/>
    {/* <Nevbar/> */}
    <Ct/>
    <Hili/>
    <Newletter/>
    <Faq/>
    <Footer/>
    </Box>
    </>
    
  )
}
