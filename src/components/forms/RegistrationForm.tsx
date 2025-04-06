import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FileRejection } from 'react-dropzone';
import Input from '../common/Input';
import Textarea from '../common/Textarea';
import Select from '../common/Select';
import FileUpload from '../common/FileUpload';
import Button from '../common/Button';
import { STATUS_OPTIONS, ACCEPTED_FILE_TYPES, MAX_FILE_SIZE, VALIDATION_MESSAGES } from '../../constants';
import { FormData } from '../../types';

const RegistrationForm: React.FC = () => {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string>('');

  const formik = useFormik<FormData>({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      education: '',
      skills: '',
      experience: '',
      currentStatus: '',
      location: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
      email: Yup.string()
        .email(VALIDATION_MESSAGES.INVALID_EMAIL)
        .required(VALIDATION_MESSAGES.REQUIRED),
      phone: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
      education: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
      skills: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
      currentStatus: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
      location: Yup.string().required(VALIDATION_MESSAGES.REQUIRED),
    }),
    onSubmit: (values) => {
      if (!cvFile) {
        setFileError(VALIDATION_MESSAGES.REQUIRED);
        return;
      }
      // Handle form submission
      console.log({ ...values, cvFile });
    },
  });

  const handleFileAccepted = (file: File) => {
    setCvFile(file);
    setFileError('');
  };

  const handleFileRejected = (fileRejection: FileRejection) => {
    const error = fileRejection.errors[0];
    if (error.code === 'file-too-large') {
      setFileError(VALIDATION_MESSAGES.FILE_TOO_LARGE);
    } else if (error.code === 'file-invalid-type') {
      setFileError(VALIDATION_MESSAGES.INVALID_FILE_TYPE);
    }
  };

  const getFieldError = (fieldName: keyof FormData) => {
    return formik.touched[fieldName] && formik.errors[fieldName] ? formik.errors[fieldName] : undefined;
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Job Seeker Registration
      </h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <Input
          label="Full Name"
          id="fullName"
          name="fullName"
          type="text"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('fullName')}
        />

        <Input
          label="Email"
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('email')}
        />

        <Input
          label="Phone Number"
          id="phone"
          name="phone"
          type="tel"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('phone')}
        />

        <Textarea
          label="Education"
          id="education"
          name="education"
          value={formik.values.education}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('education')}
          rows={3}
        />

        <Textarea
          label="Skills"
          id="skills"
          name="skills"
          value={formik.values.skills}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('skills')}
          rows={3}
        />

        <Select
          label="Current Status"
          id="currentStatus"
          name="currentStatus"
          value={formik.values.currentStatus}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('currentStatus')}
          options={STATUS_OPTIONS}
        />

        <Input
          label="Location"
          id="location"
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={getFieldError('location')}
        />

        <FileUpload
          label="Upload CV"
          onFileAccepted={handleFileAccepted}
          onFileRejected={handleFileRejected}
          accept={ACCEPTED_FILE_TYPES}
          maxSize={MAX_FILE_SIZE}
          error={fileError}
          helperText="PDF, DOC, or DOCX files only, up to 5MB"
        />

        <Textarea
          label="Additional Message"
          id="message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          rows={4}
          placeholder="Tell us more about your situation and what kind of support you need..."
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={formik.isSubmitting}
          >
            Submit Registration
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm; 