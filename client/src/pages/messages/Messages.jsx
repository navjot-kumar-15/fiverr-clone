import React from "react";

import { Link } from "react-router-dom";
import "./Messages.scss";
function Messages() {
  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores expedita voluptates nostrum, ex neque consequatur voluptas accusantium voluptatem eos, modi illum voluptatibus. Facere ullam nisi alias quibusdam officia earum ipsum quod, dolorem odio, corporis, numquam possimus excepturi eius iste tenetur quos quaerat laboriosam vitae! In sapiente amet voluptates repudiandae illum eum id, itaque cum, omnis repellat ullam quasi aut quisquam deleniti modi. Possimus distinctio consequuntur iusto, reiciendis cum explicabo eaque vero provident qui, aut illum recusandae omnis, commodi natus soluta a quos sed delectus molestiae! Animi aperiam expedita consequatur sunt iusto adipisci molestias reiciendis quis ipsam. Facere placeat doloremque molestias.`;
  return (
    <>
      <div className="message">
        <div className="container">
          <div className="title">
            <h1>Messages</h1>

            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                <th>Buyer</th>
                <th>Last Message</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="active">
                <td>John Doe</td>
                <td>
                  <Link to="/message/123">{message.substring(0, 100)}...</Link>
                </td>
                <td>1 day ago</td>
                <td>
                  <button>Mark as read</button>
                </td>
              </tr>
              <tr className="active">
                <td>John Doe</td>
                <td>
                  <Link to="/message/123">{message.substring(0, 100)}...</Link>
                </td>
                <td>1 day ago</td>
                <td>
                  <button>Mark as read</button>
                </td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>
                  <Link to="/message/123">{message.substring(0, 100)}...</Link>
                </td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>
                  <Link to="/message/123">{message.substring(0, 100)}...</Link>
                </td>
                <td>1 day ago</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>
                  <Link to="/message/123">{message.substring(0, 100)}...</Link>
                </td>
                <td>1 day ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Messages;
