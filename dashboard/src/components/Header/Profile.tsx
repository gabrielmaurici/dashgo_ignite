import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {
                showProfileData && (

                    <Box mr="4" textAlign="right">
                        <Text>Gabriel Maurici</Text>
                        <Text color="gray.300" fontSize="small">
                            gabriel.maurici@hotmail.com
                        </Text>
                    </Box>
                )
            }

            <Avatar
                size="md"
                name="Gabriel Maurici"
                src="https://github.com/gabrielmaurici.png"
            />
        </Flex>
    );
}