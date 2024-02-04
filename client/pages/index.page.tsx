import { useCallback, useEffect, useState } from 'react';
import { apiClient } from 'utils/apiClient';
import { DocumentEditor } from 'features/DocumentEditor/DocumentEditor';
import styles from './index.module.css';

const Home = () => {
  const [document, setDocument] = useState<{ title: string; content: string; }>({ title: '', content: '' });
  const [documents, setDocuments] = useState<{ id: string; title: string; }[]>([]);

  const fetchDocuments = useCallback(async () => {
    const res = await apiClient.private.documents.$get();
    setDocuments(res);
  }, []);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDocument({ ...document, title: e.target.value });
  };

  const handleContentChange = (content: string) => {
    setDocument({ ...document, content });
  };

  const handleSave = async () => {
    if (document.title && document.content) {
      await apiClient.private.documents.$post({ body: document });
      fetchDocuments();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <input
          type='text'
          placeholder='Document Title'
          value={document.title}
          onChange={handleTitleChange}
          className={styles.titleInput}
        />
        <button onClick={handleSave} className={styles.saveButton}>Save</button>
      </div>
      <DocumentEditor content={document.content} onChange={handleContentChange} />
    </div>
  );
};

export default Home;
