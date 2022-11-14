import React from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_USERS } from "~/lib/graphql/users";
import { useCookies } from "react-cookie";

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

const Users = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const { loading, error, data } = useQuery(GET_USERS, {
    context: {
      headers: {
        authorization: cookies.access_token,
      },
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }

  return loading ? (
    <div>loading...</div>
  ) : (
    <Container>
      <div className="admin-header">
        <ul>
          <a href="/admin/users">Users</a>
          <a href="/admin/collections">Collections</a>
          <a href="/admin/products">Products</a>
          <a href="/admin/stories">Stories</a>
        </ul>
        <div>
          Server Status: <span>{error ? "Error" : "Good"}</span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Providers</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((d: any) => (
            <tr key={d.id}>
              <th>{d.id}</th>
              <th>{d.nickname}</th>
              <th>{d.email}</th>
              <th>{d.provider ? d.provider.join(", ") : null}</th>
              <th>{d.role ? d.role : "user"}</th>
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

export default Users;
