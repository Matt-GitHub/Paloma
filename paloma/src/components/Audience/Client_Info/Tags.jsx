import React from 'react';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
import useTagData from './tagData';
import TagForm from './tagForm';
const Tags = ({ viewClient }) => {
  const [removeTag, removeTagInfo] = useMutation(
    id => Axios.delete(`http://localhost:8500/api/tags/${id}`),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('tag data');
      }
    }
  );

  const handleDelete = id => {
    removeTag(id);
  };

  const tagsD = useTagData(viewClient.id);

  return (
    <div className="client-form-container">
      <div className="client-tags">
        <p>Tags</p>
        {tagsD.isLoading
          ? null
          : tagsD.isError
          ? 'error fetching tags'
          : tagsD.data.tag.map(info => {
              return (
                <div key={info.id} onDoubleClick={() => handleDelete(info.id)}>
                  <p className="client-tag-info">{info.tag}</p>
                </div>
              );
            })}
      </div>
      <TagForm viewClient={viewClient} />
    </div>
  );
};

export default Tags;
