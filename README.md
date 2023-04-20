# Welcome to Bold 
Bold is a clone of the e-commerce website, Italic.com. [View bold here](https://bold-fullstack.herokuapp.com/#/).


## Table of Contents

1. [Features](#features)
2. [Technologies](#technologies)
3. [Featured Code](#featured-code)
4. [Future Features](#future-features)

## Features
<h3>Sign In or Register</h3>
<div id="header" align="left">
  <img width="900" src="https://media.giphy.com/media/zgMPYYgZXuz7EKquJ2/giphy.gif"/>
</div>
<h3>Search for Products or View by Category</h3>
<div id="header" align="left">
  <img  width="900" src="https://media.giphy.com/media/VT9xAIZlcK7kdcCMZ3/giphy.gif"/>
</div>
<h3>Edit Cart Items</h3>
<div id="header" align="left">
  <img  width="900" src="https://media.giphy.com/media/2vsExGkYilRAot5N3h/giphy.gif"/>
</div>
<h3>Create, Edit, or Delete Reviews</h3>
<div id="header" align="left">
  <img width="900" src="https://media.giphy.com/media/Tv3zcRb6MFh6QGdA4w/giphy.gif"/>
</div>

## Technologies
Bold is primarily built with the a combination of following four technologies:
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/ruby/ruby-original.svg" title="Ruby" alt="Ruby" width="40" height="40"/>&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" title="Rails" alt="Rails" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux " width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML5" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" title="AWS" alt="AWS" width="40" height="40"/>&nbsp;
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" title="PosgreSQL" alt="postgreSQL" width="40" height="40"/>&nbsp;

## Featured Code
Update cart item quantities or delete items within the cart show page.
```js
  // update quantity in cart function
  const updateQuantity = (field) => {
    if (field === "add") {
      cartProduct.quantity ++;
      dispatch(editCartProduct(cartProduct.cart_id, cartProduct));
    } else {
      cartProduct.quantity --;
      dispatch(editCartProduct(cartProduct.cart_id, cartProduct));
    }
  }
  
<div className="cart__actions">
  <div className="cart__actions__quantity">
    // button checks if quantity falls below 1 then delete item
    <div className="cart__actions__quantity__quantity-button" 
      onClick={ (cartProduct.quantity > 1) ?
        () => updateQuantity("subtract") : 
        () => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))
      } 
    >-</div>
    <div className="cart__actions__quantity">{cartProduct.quantity}</div>
    <div className="cart__actions__quantity__quantity-button" 
      onClick={() => updateQuantity("add")}>+</div>
  </div>
  // provide multiple ways to remove products from cart
  <div className="cart__delete">
    <img src="https://italic.com/static/icons/clear-x.svg"
      alt="delete product" 
      className="cart__delete__button" 
      onClick={() => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))} />
    <div className="cart__delete__link" 
      onClick={() => dispatch(deleteCartProduct(cartProduct.cart_id, cartProduct.id))}>
      Remove
    </div>
  </div>
</div>
```

Toggle easily between different images for any given product.
 ```js
<div className="Outter_Photos_Container">
  <div className="Inner_Photos_Container">
    // left side photo thumbnails
    // when clicked, the photo index state is updated and a new product image is rendered
    <div className="Thumbnail_Display">
      {
        photos.map((photoUrl, idx) => (
          <div
          className="Thumbnail"
          key={idx}
          onClick={() => { setIndex(idx) }}
          >
            <img src={photoUrl} alt={product.product.title}/>
          </div>
        ))
      }
    </div>
    // main image displayed here
    <div className="Product_Photos">
      <div className="Product_Photos_Separator">
        <img className="Product_Photo" src={photos[index]} alt={product.product.title} />
      </div>
    </div>
  </div>
</div>
```

## Future Features
* Checkout
  * Promt user for review upon checkout
* Reviews
  * Rank newest reviews first
  * Add timeStamps to reviews
  * Add image to review
* User account
  * View order history
* Search
  * Search by category 

