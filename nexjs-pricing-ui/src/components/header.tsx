"use client"
import React from "react";
import {Box, Heading, Text} from "@chakra-ui/react"

export default function Header(){
    return(
        <Box as='section' pb='112px'>
            <Box color='#F7FAFC' bg='#6B46C1' pt='90px' pb='198px' px='32px' textAlign={['left','left','center']}>
                <Heading fontWeight='800' fontSize={['30px', '30px', '48px']}>
                    Simple pricing for your business
                </Heading>
                <Text fontWeight='500' fontSize={['lg','lg','2xl']} pt='16px'>
                    Plans that are carefully crafted to suit your business.
                </Text>
            </Box>
        </Box>
        
    )
}