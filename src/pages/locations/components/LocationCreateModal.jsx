import { Modal } from "antd";
import { Formik } from "formik";
import React from "react";
import { LocationForm } from "./LocationForm";

export function LocationCreateModal({
  initialValues,
  title,
  isOpen,
  onCancel,
  onFormSubmit,
}) {
  return (
    <Modal title={title} open={isOpen} onCancel={onCancel} closable={true}>
      <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
        {({ values, setFieldValue, handleSubmit, isSubmitting, isValid }) => (
          <LocationForm
            name="Location Create Form"
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
