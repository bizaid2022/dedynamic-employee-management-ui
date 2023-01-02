import React from "react";
import { Modal } from "antd";
import { Formik } from "formik";
import { DepartmentForm } from "./DepartmentForm";

export function DepartmentCreateModal({
  initialValues,
  title,
  isOpen,
  onCancel,
  onFormSubmit,
}) {
  return (
    <Modal title={title} open={isOpen} onCancel={onCancel}>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {({
          values,
          setFieldValue,
          handleSubmit,
          isSubmitting,
          isValid,
          /* and other goodies */
        }) => (
          <DepartmentForm
            isSubmitting={isSubmitting}
            onSubmit={handleSubmit}
            values={values}
            setFieldValue={setFieldValue}
            isValid={isValid}
          />
        )}
      </Formik>
    </Modal>
  );
}
