import { Modal } from "antd";
import { Formik } from "formik";
import React from "react";
import { TaskForm } from "./TaskForm";

export function TaskCreateModal({ title, isOpen, onCancel }) {
  const initialValues = {
    taskName: "",
    mobileOrWeb: "",
    employee: "",
  };
  const onFormSubmit = (data) => {
    console.log("data", data);
  };

  return (
    <Modal title={title} open={isOpen} onCancel={onCancel} closable={true}>
      <Formik
        initialValues={initialValues}
        // validationSchema={employeeShcema}
        onSubmit={onFormSubmit}
      >
        {({
          values,
          setFieldValue,
          handleSubmit,
          isSubmitting,
          isValid,
          /* and other goodies */
        }) => (
          <TaskForm
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
            values={values}
            setFieldValue={setFieldValue}
            isValid={isValid}
          />
        )}
      </Formik>
    </Modal>
  );
}
