import React, { useState } from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Box,
  Text,
  StackDivider,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";

import { useQuery } from "react-query";
import axios from "axios";
import { useRouter } from "next/router";
import Constant from "@/utils/constant";

const getAllPosts = () => axios.get(`${Constant.BASE_URL}/posts`);

export default function AllPosts() {
  const router = useRouter();
  const { isLoading, error, data } = useQuery("posts", getAllPosts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Heading as="h2" size="2xl" noOfLines={1}>
          Posts
        </Heading>

        <Button
          colorScheme="teal"
          variant="solid"
          onClick={() => router.push(`/add`)}
        >
          Tambah
        </Button>
      </div>

      <SimpleGrid columns={{ base: 1, md: 2, md: 3 }} gap={8}>
        {data?.data?.map((item) => (
          <Card style={{ cursor: "pointer" }} key={item.id}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    {item.title}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {item.body}
                  </Text>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={4}
                align="center"
                style={{ marginTop: 8 }}
              >
                <Button
                  colorScheme="teal"
                  variant="solid"
                  onClick={() => router.push(`detail/${item.id}`)}
                >
                  Detail
                </Button>
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => router.push(`edit/${item.id}`)}
                >
                  Edit
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}
