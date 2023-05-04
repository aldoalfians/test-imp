import DetailPost from "@/components/DetailPost";
import Constant from "@/utils/constant";
import { Container } from "@chakra-ui/react";
import React from "react";

export default function PostsDetail({ getDetail }) {
  return (
    <Container maxW="container.xl" p={0}>
      <DetailPost getDetail={getDetail} />
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
