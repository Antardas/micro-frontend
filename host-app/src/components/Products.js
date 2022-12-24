import React, { useEffect, useState } from "react";
import style from "./products.module.css";
const AddToCartButton = React.lazy(() => import("Remote/AddToCartButton"));
const Cart = React.lazy(() => import("Remote/Cart"));

const Products = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.products);
				setProducts(data.products);
			});
	}, []);
	return (
		<div className={style.container}>
			<h1 className={style.title}>total Products {products.length}</h1>
			<Cart />
			<div className={style.products}>
				{products.length
					? products.map((product, index) => (
							<div
								key={`product-${product.id}`}
								className={style.product}
							>
								<div className={style.img}>
									<img src={product.images[0]} alt="" />
								</div>
								<div>
									<h3>{product.title}</h3>
									<p className={style.price}>
										$ {product.price}
									</p>
								</div>
								<div>
									<AddToCartButton data={product}  />
								</div>
							</div>
					  ))
					: null}
			</div>
		</div>
	);
};

export default Products;
