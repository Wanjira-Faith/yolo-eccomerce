import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Helmet from '../components/Helmet';
import Section, { SectionBody, SectionTitle } from '../components/Section';
import Grid from '../components/Grid';
import ProductCard from '../components/ProductCard';
import ProductView from '../components/ProductView';
import productData from '../assets/fake-data/products';

const Product = () => {
    const { slug } = useParams();
    console.log(slug);

    // Fetch product data by slug
    const product = productData.getProductBySlug(slug);
    console.log(product);

    // Related products
    const relatedProducts = productData.getProducts(8);

    // Scroll to top when product changes
    useEffect(() => {
        if (product) {
            window.scrollTo(0, 0);
        }
    }, [product]);
  
    
    if (!product) {
        return (
            <div className="error-page">
                <h2>Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
            </div>
        );
    }

    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>Explore More</SectionTitle>
                <SectionBody>
                    <Grid col={4} mdCol={2} smCol={1} gap={20}>
                        {relatedProducts.map((item, index) => (
                            <ProductCard
                                key={index}
                                img01={item.image01}
                                img02={item.image02}
                                name={item.title}
                                price={Number(item.price)}
                                slug={item.slug}
                            />
                        ))}
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    );
};

export default Product;
