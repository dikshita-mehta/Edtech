import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "./Catalogue.css";
function Catalogue() {
  return (
    <div className="catalogue">
      <Navbar />
      <div class="wrapper">
  <h1>Experiment details</h1>
  dropdowns here 
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"data:image/jpeg;base64,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"})`}}>
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"https://i.pinimg.com/originals/55/fd/8c/55fd8cd48d853ed1a3bf762f12278554.jpg"})`}}>
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front"style={ {backgroundImage: `url(${"data:image/jpeg;base64,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"})`}} >
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"https://i.pinimg.com/originals/55/fd/8c/55fd8cd48d853ed1a3bf762f12278554.jpg"})`}}>
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"data:image/jpeg;base64,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"})`}}>
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"https://i.pinimg.com/originals/55/fd/8c/55fd8cd48d853ed1a3bf762f12278554.jpg"})`}}>
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"data:image/jpeg;base64,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"})`}} >
						<div class="inner">
							<p>Title</p>
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" style={ {backgroundImage: `url(${"https://i.pinimg.com/originals/55/fd/8c/55fd8cd48d853ed1a3bf762f12278554.jpg"})`}}>
						<div class="inner">
							<p>Title</p>
           			</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Details and price</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
      <Footer />
    </div>
  );
}

export default Catalogue;