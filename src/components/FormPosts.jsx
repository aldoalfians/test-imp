import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function FormPosts({
  onSubmit,
  register,
  errors,
  isSubmitting,
  defaultValueTitle,
  defaultValueBody,
}) {
  return (
    <form onSubmit={onSubmit}>
      <FormControl isInvalid={errors.title}>
        <FormLabel htmlFor="title">Title</FormLabel>
        <Input
          id="title"
          placeholder="title"
          defaultValue={defaultValueTitle}
          {...register("title", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.title && errors.title.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.body}>
        <FormLabel htmlFor="body">Body</FormLabel>
        <Input
          defaultValue={defaultValueBody}
          id="body"
          placeholder="body"
          {...register("body", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
        />
        <FormErrorMessage>
          {errors.body && errors.body.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
