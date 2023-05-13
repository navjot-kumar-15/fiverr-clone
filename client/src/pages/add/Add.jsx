import React from "react";
import "./Add.scss";
function Add() {
  return (
    <>
      <div className="add">
        <div className="container">
          <h1>Add New Gig</h1>
          <div className="section">
            <div className="left">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="e.g I will do something I'm really good at"
              />
              <label htmlFor="Category">Category</label>
              <select name="" id="Category">
                <option value="design">Design</option>
                <option value="web">Web Developent</option>
                <option value="animation">Animation</option>
                <option value="music">Music</option>
              </select>
              <label htmlFor="cover">Cover Image</label>
              <input type="file" id="cover" />
              <label htmlFor="upload">Upload Image</label>
              <input type="file" id="upload" multiple />
              <label htmlFor="desc">Description</label>
              <textarea
                name=""
                id="desc"
                cols="30"
                rows="16"
                placeholder="Brief descriptions to introduce your service to customers"
              ></textarea>
              <button>Create</button>
            </div>

            <div className="right">
              <label htmlFor="service">Service Title</label>
              <input
                type="text"
                id="service"
                placeholder="e.g. One-page web design"
              />
              <label htmlFor="short">Short Description</label>
              <textarea
                name=""
                id="short"
                placeholder="Short description of your service"
                cols="30"
                rows="10"
              ></textarea>
              <label htmlFor="delivery">Delivery Time(e.g. 3 days)</label>
              <input type="number" min={1} id="delivery" />
              <label htmlFor="revision">Revision Number</label>
              <input type="number" min={1} id="revision" />
              <label htmlFor="">Add Features</label>
              <input type="text" placeholder="e.g. page design" />
              <input type="text" placeholder="e.g. file uploading" />
              <input type="text" placeholder="e.g. setting up a domain" />
              <input type="text" placeholder="e.g. hosting" />
              <label htmlFor="price">Price</label>
              <input type="number" min={1} id="price" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add;
