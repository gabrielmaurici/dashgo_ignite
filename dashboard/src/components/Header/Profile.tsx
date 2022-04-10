import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Gabriel Maurici</Text>
                <Text color="gray.300" fontSize="small">
                    gabriel.maurici@hotmail.com
                </Text>
            </Box>

            <Avatar
                size="md"
                name="Gabriel Maurici"
                src="https://github.com/gabrielmaurici.png"
            />
        </Flex>
    );
}