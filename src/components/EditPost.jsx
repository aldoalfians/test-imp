import { useForm } from "react-hook-form";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import FormPosts from "./FormPosts";
import Constant from "@/utils/constant";

export default function EditPost({ getDetail }) {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    const { data } = await axios.patch(
      `${Constant.BASE_URL}/posts/${getDetail.id}`,
      values
    );

    alert(JSON.stringify(data));

    setTimeout(() => {
      router.push("/");
    }, 500);

    return data;
  };

  return (
    <FormPosts
      onSubmit={handleSubmit(onSubmit)}
      errors={errors}
      isSubmitting={isSubmitting}
      register={register}
      defaultValueTitle={getDetail.title}
      defaultValueBody={getDetail.body}
    />
  );
}
