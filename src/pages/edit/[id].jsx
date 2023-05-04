import EditPosts from "@/components/EditPost";
import Constant from "@/utils/constant";
import { Container } from "@chakra-ui/react";
import React from "react";

export default function PostsEdit({ getDetail }) {
  return (
    <Container maxW="container.xl" p={0}>
      <EditPosts getDetail={getDetail} />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(`${Constant.BASE_URL}/posts/${id}`);
  const getDetail = await res.json();

  console.log(getDetail);

  return {
    props: {
      getDetail,
    },
  };
}
