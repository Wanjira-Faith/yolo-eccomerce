import React from 'react';
import '../css/about.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h1>Welcome to YOLO</h1>
        <p className="intro-text">Where Style Meets Comfort</p>
      </div>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At <strong>YOLO</strong>, we are dedicated to offering stylish, comfortable, and high-quality Polo shirts and T-shirts. We believe that the right clothing can elevate your style, comfort, and confidence. That's why we've curated a collection of timeless, classic pieces designed to seamlessly fit into your everyday wardrobe.
        </p>
      </section>

      <section className="quality">
        <h2>Quality You Can Trust</h2>
        <p>
          Each product we offer is crafted from high-quality materials, including 95% cotton and 5% spandex, ensuring durability, softness, and breathability. Our designs prioritize simplicity and elegance, allowing you to mix and match easily with any outfit. We use modern technology and strict quality control processes to bring you the most comfortable T-shirts that stay fresh and stylish all day long.
        </p>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose YOLO?</h2>
        <ul>
          <li><strong>Stylish and Versatile:</strong> Our shirts are designed to fit a variety of body types and can be paired with multiple outfits.</li>
          <li><strong>Comfort Above All:</strong> We use premium fabrics that are soft, breathable, and stretchable, providing all-day comfort.</li>
          <li><strong>Variety of Colors and Sizes:</strong> With a wide selection of colors and sizes, there’s a perfect fit for everyone.</li>
          <li><strong>Affordable Prices:</strong> We believe in offering high-quality products at prices that are accessible to all.</li>
        </ul>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <p>
          Explore our collection of Polo Shirts and T-shirts, including basic round-neck designs in a variety of colors and sizes. Whether you prefer neutral tones or vibrant shades, you'll find the perfect shirt to complement your style. Our items are versatile enough to wear during any season, making them a must-have staple in your wardrobe.
        </p>
      </section>

      <section className="community">
        <h2>Join Our Community</h2>
        <p>
          We're more than just a clothing store – we're a community of fashion-forward individuals who appreciate the value of both style and comfort. Stay connected with us for the latest trends, promotions, and new arrivals.
        </p>
      </section>

      <footer className="about-us-footer">
        <p>Thank you for choosing <strong>YOLO</strong>. We look forward to being part of your fashion journey.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
