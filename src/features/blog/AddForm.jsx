import {
  Button,
  Checkbox,
  Input,
  Radio,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const radioData = [
  { color: "red", label: "News", value: "news" },
  { color: "green", label: "Travel", value: "travel" },
];

const checkData = [
  { color: "red", label: "Red", value: "red" },
  { color: "green", label: "Green", value: "green" },
  { color: "blue", label: "Blue", value: "blue" },
];

const AddForm = () => {
  const blogSchema = Yup.object({
    title: Yup.string()
      .min(2)
      .max(8, "title should be less than 8 char")
      .required("title is required"),
    detail: Yup.string().required(),
    blogType: Yup.string().required(),
    colors: Yup.array().min(1).required(),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      detail: "",
      blogType: "",
      colors: [],
    },
    onSubmit: (val) => {
      console.log(val);
    },
    validationSchema: blogSchema,
  });

  return (
    <div className="max-w-sm p-10">
      <form onSubmit={formik.handleSubmit} className="space-y-7">
        <div>
          <Input
            onChange={formik.handleChange}
            value={formik.values.title}
            name="title"
            label="Blog Title"
          />

          {formik.errors.title && formik.touched.title && (
            <p className="text-pink-400">{formik.errors.title}</p>
          )}
        </div>

        <div className="">
          <Typography>Select Blog Type</Typography>

          <div className="flex gap-7">
            {radioData.map((rad, i) => {
              return (
                <Radio
                  key={i}
                  name="blogType"
                  value={rad.value}
                  color={rad.color}
                  label={rad.label}
                />
              );
            })}
          </div>

          {formik.errors.blogType && formik.touched.blogType && (
            <p className="text-pink-400">{formik.errors.blogType}</p>
          )}
        </div>

        <div className="">
          <Typography>Select Color</Typography>

          <div className="flex gap-7">
            {checkData.map((che, i) => {
              return (
                <Checkbox
                  key={i}
                  name="colors"
                  value={che.value}
                  color={che.color}
                  label={che.label}
                />
              );
            })}
          </div>

          {formik.errors.colors && formik.touched.colors && (
            <p className="text-pink-400">{formik.errors.colors}</p>
          )}
        </div>

        <div>
          <Textarea
            onChange={formik.handleChange}
            value={formik.values.detail}
            name="detail"
            label="Blog Detail"
          />
          {formik.errors.detail && formik.touched.detail && (
            <p className="text-pink-400">{formik.errors.detail}</p>
          )}
        </div>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddForm;
