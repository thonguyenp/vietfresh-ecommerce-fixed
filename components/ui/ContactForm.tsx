//////////////////////////////////////
// components/ui/ContactForm.tsx
//////////////////////////////////////
"use client";

import React from "react";
import { Box, TextField, Button, Stack } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

export interface ContactFormProps {}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({}: ContactFormProps) {
  const { register, handleSubmit, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 600, mx: "auto" }}>
      <Stack spacing={3}>
        <TextField label="Họ và tên" {...register("name", { required: true })} fullWidth />
        <TextField label="Email" {...register("email", { required: true })} fullWidth />
        <TextField
          label="Nội dung"
          {...register("message", { required: true })}
          multiline
          rows={4}
          fullWidth
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: "#f97316", "&:hover": { backgroundColor: "#fb7a1f" } }}>
          Gửi liên hệ
        </Button>
      </Stack>
    </Box>
  );
}
