import { useEffect, useRef, useState } from "react";
import { Product } from "../models/Product";
import { Card, Col, Row } from "react-bootstrap";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const elementRef = useRef<HTMLDivElement>(null);

  function onIntersection(entries: IntersectionObserverEntry[]) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreItems();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);

    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      // if (observer) {
      observer.disconnect();
      // }
    };
  }, [products, hasMore]);

  async function fetchMoreItems() {
    try {
      // * fetch the next batch of products
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`
      );

      const data = await response.json();

      if (data.products.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prevProducts) => [...prevProducts, ...data.products]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }

  return (
    <>
      <h1>Intersection observer with React</h1>
      {products.map((item) => (
        <Card
          key={item.id}
          style={{ width: "600px", margin: "0 auto" }}
          className={"mb-2"}
        >
          <Row>
            <Col md={4}>
              <img
                src={item.thumbnail}
                alt="Product image"
                style={{ width: "100%", margin: "10px" }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
      {hasMore && (
        <div ref={elementRef} style={{ textAlign: "center" }}>
          Load more items...
        </div>
      )}
    </>
  );
};

export default ProductList;
