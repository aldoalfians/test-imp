import React from "react";
import {
  Box,
  Card,
  CardBody,
  Center,
  Heading,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export default function DetailPost({ getDetail }) {
  return (
    <SimpleGrid>
      <Center>
        <Card style={{ cursor: "pointer" }} key={getDetail.userId}>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {getDetail.title}
                </Heading>
                <Text pt="2" fontSize="sm">
                  {getDetail.body}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Center>
    </SimpleGrid>
  );
}
