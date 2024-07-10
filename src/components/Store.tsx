import { Col, Row } from 'react-bootstrap';
import storeItems from '../data/Items.json';
import StoreItem from './StoreItem';

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
