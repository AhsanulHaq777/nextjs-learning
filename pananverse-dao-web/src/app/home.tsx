"use client"
import {Box,Grid, Flex, Spacer, Center, Image, Button, Heading, GridItem} from '@chakra-ui/react'
import Images from 'next/image'



export default function MainPage(){
    return(
        <>
            <Flex h='656px' w='100%' bg='#006450' p='50px' color='#FCDC3E'>
            <Box w='630px' h='590px' ml='110px' p='2px'>
                <Box mt='56px' ml='25px' fontFamily='mina' fontWeight='400' fontSize='20px'>
                    Get ready for the next generation of internet
                </Box>
                <Box as='h1' mt='35px' ml='25px' fontFamily='mina' fontWeight='800' fontSize='40px' letterSpacing='0.03em'>
                    Certified Web 3.0 and Metaverse <br/>
                    Developer Program
                </Box>
                <Box mt='25px' ml='30px'>
                    <Button colorScheme='#FCDC3E' variant='outline'> Get Started </Button>
                </Box>
            </Box>
            <Spacer />
            <Box mt='40px' mr='20px'>
                <Images priority src="/images/landing.svg" width={600} height={500} alt=""/>
            </Box>
       </Flex>
        <Grid  h='800px'
                bg='#FCDC3E'
                color='#006450'
               templateRows='repeat(3, 1fr)'
               templateColumns='repeat(4, 1fr)'
               p='50px'>
            <GridItem colSpan={4}>
                <Box as='h1' textAlign='center' mt='60px' fontFamily='mina' fontWeight='800' fontSize='50px'>
                    Program is a nutshell: Earn while you learn
                </Box>
            </GridItem>
            <GridItem colSpan={2}>
                <Box as='h2' ml='135px' mt='70px' fontFamily='mina' fontWeight='800' fontSize='35px' letterSpacing='0.03em'>
                    One and quarter years Panaverse Dao
                    earn as you learn program
                </Box>
            </GridItem>
            <GridItem rowSpan={2} colSpan={2}>
                <Box mt='10px' mr='20px'>
                    <Image src="/images/dollarss.png" mixBlendMode= 'multiply' width={600} height={500} alt=""/>
                </Box>
            </GridItem>
            <GridItem colSpan={2}>
                <Box pr='10px' ml='135px' mt='5px' fontFamily='mina' fontWeight='400' fontSize='20px' letterSpacing='0.03em'>
                    In this brand new type of curriculum, students will learn how to make
                    money and boost exports in the classroom and will begin doing so
                    within six months of the program’s beginning. <br/>
                    It resembles a cross between a corporate venture and an educational
                    projects. 
                </Box>
            </GridItem>
            
        </Grid>

    </>
       
    )
}