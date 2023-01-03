import React from "react";
import { Formik, Field, Form } from "formik";
import vadilationSchema from "./validation";
import { useTodo } from "../../../contexts/TodoContext";

const NewTodoForm = () => {
  const { addTodo } = useTodo();
  return (
    <Formik
      initialValues={{
        newTodo: "",
      }}
      onSubmit={(values, bag) => {
        addTodo(values.newTodo);
        bag.resetForm();
      }}
      validationSchema={vadilationSchema}
    >
      <Form>
        <Field
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          id="newTodo"
          name="newTodo"
        />
      </Form>
    </Formik>
  );
};

export default NewTodoForm;
