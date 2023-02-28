import React from 'react';
import Form from '../components/Form';

const Books = () => {
  // const dispatch = useDispatch();
  const { library } = useSelector((store) => store.books);
  return (
    <>
      <table className="table">
        <Book />
      </table>
      <Form />
    </>
  );
};

export default Books;
