import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Rating,
  IconButton,
} from "@material-tailwind/react";

const BlogPage = () => {
  const { blogs } = useSelector((state) => state.blogSlice);

  console.log(blogs);

  return (
    <div className="p-4 grid grid-cols-3 gap-7">
      {blogs.map((blog) => {
        return (
          <Card className="mt-6 shadow-2xl " key={blog.id}>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {blog.title}
              </Typography>
              <Typography>{blog.detail}</Typography>
              <Rating value={blog.rating} readonly className="my-2" />
              <Typography>{blog.blogType}</Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-end gap-4">
              <IconButton>
                <i className="fas fa-edit" />
              </IconButton>
              <IconButton>
                <i className="fas fa-trash" />
              </IconButton>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
export default BlogPage;
