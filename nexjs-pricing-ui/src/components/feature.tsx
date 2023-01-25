"use client"
import React, { ElementType } from "react";
import { GuaranteeIcon, FeeIcon, SubscriptionIcon } from "@/icons/icon";
import { HStack, Icon, Text,Stack, StackProps, Box} from '@chakra-ui/react'

interface FeatureProp extends StackProps{
    icon: ElementType;
}

 function Feature(props: FeatureProp){
    const {icon, children, ...rest} = props;
    return(
        <HStack {...rest} spacing='6' align='start'>
            <Icon as={icon} boxSize={['8','8','12']}/>
            <Text textAlign='left' fontSize='lg' fontWeight='700'>
                {children}
            </Text>
        </HStack>
    )
}

export default function Features(){
    return(
        <Box as='section' m='auto' maxW='1024px' pt='57px' pb='8' >
            <Stack px='12' direction={['column','column','row']} spacing={['6','6','5']}>
            <Feature icon={GuaranteeIcon}>30 days money back Guarantee</Feature>
            <Feature icon={FeeIcon}>No setup fees 100% hassle-free
            </Feature>
            <Feature icon={SubscriptionIcon}>
                No monthly subscription Pay once and for all
            </Feature>
        </Stack>
        </Box>
        
    )
}