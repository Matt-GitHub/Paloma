import React from 'react';
import { useMutation, queryCache } from 'react-query';
import Axios from 'axios';
import useTagData from './tagData';
const TagForm = ({ viewClient }) => {
  const tagsQ = useTagData(viewClient.id);
  console.log('tags', tagsQ);
  const [createTags, createTagInfo] = useMutation(
    values =>
      Axios.post(`http://localhost:8500/api/tags/${viewClient.id}`, values, {
        headers: {
          Authorization: localStorage.getItem('AUTH_TOKEN')
        }
      }),
    {
      onSuccess: () => {
        queryCache.invalidateQueries('tag data');
      }
    }
  );

  const [createTag, setCreateTag] = React.useState({
    tag: ''
  });

  console.log('new tag', createTag);
  const handleSubmit = (e, values) => {
    e.preventDefault();
    console.log('submit');
    createTags(values);
    setCreateTag({
      tag: ''
    });
  };

  const handleChanges = e => {
    e.preventDefault();
    setCreateTag({ ...createTag, [e.target.name]: e.target.value });
  };

  console.log(createTag.tag);

  return (
    <div>
      <form onSubmit={e => handleSubmit(e, createTag)}>
        <input
          className="tag-form-input"
          type="text"
          name="tag"
          value={createTag.tag}
          onChange={handleChanges}
          placeholder="Add tags..."
        />
        <button className="invisible-submit" type="submit"></button>
      </form>
    </div>
  );
};

export default TagForm;
