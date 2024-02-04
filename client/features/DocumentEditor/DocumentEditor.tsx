import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import styles from './DocumentEditor.module.css';

interface DocumentEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const DocumentEditor = ({ content, onChange }: DocumentEditorProps) => {
  const handleEditorChange = (content: string) => {
    onChange(content);
  };

  return (
    <Editor
      initialValue={content}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
      }}
      onEditorChange={handleEditorChange}
      className={styles.editor}
    />
  );
};
