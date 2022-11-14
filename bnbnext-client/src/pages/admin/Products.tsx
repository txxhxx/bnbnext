import React from "react";
import styled from "styled-components";
import { getProducts } from "~/lib/api/test";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  th {
    padding: 5px;
    font-weight: 400;
    text-align: left;
  }

  .admin-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    ul {
      display: flex;
      gap: 20px;
      padding: 0;
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    span {
      color: green;

      .warn {
        color: red;
      }
    }
  }
`;

const Products = () => {
  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    getProducts().then((products) => {
      setData(products.data.mainData);
    });
  }, []);

  return (
    <Container>
      <div className="admin-header">
        <ul>
          <a href="/admin/users">Users</a>
          <a href="/admin/collections">Collections</a>
          <a href="/admin/products">Products</a>
          <a href="/admin/stories">Stories</a>
        </ul>
        <div>
          Server Status: <span>Good</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Stock Status</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d: any) => (
              <tr key={d.id}>
                <th>{d.name}</th>
                <th>{d.brand}</th>
                <th>{d.price}</th>
                <th>{d.stock_status}</th>
                <th onClick={() => (window.location.href = d.img_url)}>
                  <div
                    style={{
                      width: 100,
                      height: 100,
                      backgroundImage: `url(${d.img_url})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                  />
                </th>
                <th>
                  <button>Remove</button>
                </th>
                <th>
                  <button>Remove</button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Products;