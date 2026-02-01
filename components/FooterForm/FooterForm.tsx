import { Field, Form, Formik, FormikHelpers} from 'formik';
import css from './FooterForm.module.css';

interface FormValues {
  name: string;
  email: string;
  bookingDate: string;
  comment: string;
}

export default function FooterForm() {
  const initialValues: FormValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className={css.formContainer}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Name*"
            className={css.input}
          />
          <Field
            type="text"
            id="email"
            name="email"
            placeholder="Email*"
            className={css.input}
          />
          <Field
            type="text"
            id="bookingDate"
            name="bookingDate"
            placeholder="Booking date*"
            className={css.input}
          />
          <Field
            as="textarea"
            rows="4"    
            id="comment"
            name="comment"
            placeholder="Comment"
            className={css.input+" "+ css.textArea}
          />
          <button type="submit" className={css.buttonSave}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
