import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import createProductSchema from '../../utils/validation/createProductSchema';

const { dispatch } = store;

const createProduct = (values) => {
  dispatch.product.createProduct(values);
  console.log('value', values);
};

class CreateProduct extends React.Component {
  componentDidMount() {
    dispatch.categories.getCategories();
  }

  render() {
    const { categories } = this.props;
    console.log('categories', categories);
    return (
      <Formik
        initialValues={{
          name: '',
          price: 0,
          stock: 0,
          description: '',
          category: '',
        }}
        validationSchema={createProductSchema}
        onSubmit={createProduct}
        enableReinitialize
      >
        {({
          handleSubmit, handleChange, setFieldValue, values,
        }) => (
          <>
            <select onChange={async (e) => await setFieldValue('category', e.target.value)} value={values.category}>
              <option value=''>Select Category</option>
              {categories.map(({ _id, name }) => <option key={_id} value={_id}>{name}</option>)}
            </select>
            <input
              onChange={handleChange('name')}
              placeholder='Product Name'
            />
            <input
              onChange={handleChange('price')}
              placeholder='Price'
            />
            <input
              onChange={handleChange('stock')}
              placeholder='Stock'
            />
            <input
              onChange={handleChange('description')}
              placeholder='Product Description'
            />
            <button onClick={handleSubmit}>Submit</button>
          </>
        )}
      </Formik>
    );
  }
}

const mapState = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapState)(CreateProduct);
