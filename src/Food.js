import React from "react";

function Food({ title, description, image }) {
  return (
    <>
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src={image} alt="Yemekler" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{title}</p>
            </div>
          </div>
          <div class="content">{description}</div>
        </div>
      </div>
    </>
  );
}

export default Food;
