"use client"
import React from "react"
import {Box, Flex, Text, Heading, Button, HStack, Stack, Icon, StackProps } from '@chakra-ui/react'
import CheckIcon from "@/icons/icon"

export const ListItem = (props: StackProps) => {
    const {children, ...rest} = props;
    return(
        <HStack as='li' spacing='20px' {...rest}>
            <Icon as={CheckIcon} w='22px' h='22px' />
            <Text>{children}</Text>
        </HStack>
    )
}

export default function Pricing(){
    return(
        <Box maxWidth='994px' margin='auto' mt='-256px' overflow='hidden' borderRadius='12px' boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'>
            <Flex>
                <Box bg='#F0EAFB' p='60px'>
                    <Text fontWeight='800' fontSize='24px'>Premium PRO</Text>
                    <Heading as='h3' fontSize='60px' mt='16px'>$329</Heading>
                    <Text fontWeight='500' fontSize='18px' mt='8px' color='#171923'>billed just once</Text>
                    <Button fontWeight='700' fontSize='16px' bg='#805AD5' size='lg' borderRadius='8px' w='282px' color='#F7FAFC' mt='24px'>Get Started</Button>
                </Box>
                <Box p='60px' fontSize='18px' bg='white'>
                    <Text fontWeight='400' fontSize='18px' textAlign='left'>
                    Access these features when you get this pricing package for your business.
                    </Text>
                    <Stack as='ul' spacing='20px' pt='24px'>
                        <ListItem>International calling and messaging API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Automated messages via Zapier</ListItem>
                        <ListItem>24/7 support and consulting</ListItem>
                    </Stack>
                </Box>
            </Flex>
        </Box>
    )
}