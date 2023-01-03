import * as Yup from "yup";

const validations = Yup.object().shape({
  newTodo: Yup.string().required("Text is required field"),
});

export default validations;
