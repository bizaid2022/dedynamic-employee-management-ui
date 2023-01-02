import { Modal } from "antd";
import { Formik } from "formik";
import React from "react";
import { PositionForm } from "./PositionForm";

export function PositionCreateModal({
  isOpen,
  onCancel,
  initialValues,
  onFormSubmit,
}) {
  return (
    <Modal open={isOpen} onCancel={onCancel} closable={false}>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {({ values, setFieldValue, handleSubmit, isSubmitting, isValid }) => (
          <PositionForm
            name="Position Create Form"
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
