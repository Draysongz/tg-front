import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react"
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineChevronRight } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Subheader() {
    return(
        <Box height={'60px'} bg={'#272727'} w={'100%'} p={'10px 20px'} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
            <Box display={'flex'} w={'50%'} alignItems={'center'} justifyContent={'space-between'}>
            <Box w={'40px'} h={'40px'} border={'1px solid #bababa '} display={'flex'} justifyContent={'center'} alignItems={'center'} borderRadius={'50%'} mr={'7.5px'}>
            <Icon as={GrUserWorker} boxSize={6} color={'#bababa'}/>
            </Box>

            <Box width={'70%'}>
                <Flex width={'100%'} justifyContent={'space-between'}>
                    <Text fontSize={'12px'}>
                        Bronze
                        <Icon as={MdOutlineChevronRight}/>
                    </Text>
                    <Text fontSize={'12px'}>
                        1/6
                    </Text>
                </Flex>
                <Flex
                border={"4px solid #43433b"}
                alignItems={"center"}
                borderRadius={"20px"}
              >
                <Box className="w-full h-1 bg-[#43433b]/[0.6] rounded-full">
                  <Box
                    className="progress-gradient h-1 rounded-full"
                    style={{ width: '10%' }}
                  ></Box>
                </Box>
              </Flex>
            </Box>
            </Box>

            <Box display={'flex'} gap={3} alignItems={'center'}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                <Text fontSize={'12px'}>
                    Balance
                </Text>
                <Flex alignItems={'center'} gap={1}>
                <Image src="/coin.webp" w={'10px'}/>
                <Text fontSize={'11px'}>0</Text>
                </Flex>
                </Flex>

                <Box w={'1px'} h={'30px'} bg={'#554f3f'}></Box>
                <Link to={'/settings'}>
                <Icon as={IoSettingsSharp} boxSize={'20px'} />
                </Link>
            </Box>

        </Box>
    );
}