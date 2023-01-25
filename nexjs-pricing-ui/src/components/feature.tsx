"use client"
import React, { ElementType } from "react";
import { GuaranteeIcon, FeeIcon, SubscriptionIcon } from "@/icons/icon";
import { HStack, Icon, Text, StackProps, Box} from '@chakra-ui/react'

interface FeatureProp extends StackProps{
    icon: ElementType;
}

 function Feature(props: FeatureProp){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px'/>
            <Text textAlign='left' fontSize='18px' fontWeight='700'>
                {children}
            </Text>
        </HStack>
    )
}

export default function Features(){
    return(
        <Box m='auto' maxW='1024px' pt='57px' pb='32px'>
            <HStack px='48px' spacing='20px'>
            <Feature icon={GuaranteeIcon}>30 days money back Guarantee</Feature>
            <Feature icon={FeeIcon}>No setup fees 100% hassle-free
            </Feature>
            <Feature icon={SubscriptionIcon}>
                No monthly subscription Pay once and for all
            </Feature>
        </HStack>
        </Box>
        
    )
}