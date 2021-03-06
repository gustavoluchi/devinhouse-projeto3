import { useEffect, useState } from "react";

import { fetchProduct } from "utils/api";

import DetailedProductCard from "./DetailedProductCard";
import Title from "components/Title";
import GoBackButton from "./GoBackButton";
import PageContents from "components/PageContents";
import DetailedProductCardSkeleton from "./DetailedProductCardSkeleton";

const ProductDetailsPage = ({ productId }) => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})

  useEffect(() => {
    fetchProduct(productId).then(state => {
      setProduct(state)
      setLoading(!loading)
    })
  }, [])

  return (
    <PageContents>
      {loading ? (
        <DetailedProductCardSkeleton />
      ) : (
        <>
          <Title>{product.name}</Title>
          <DetailedProductCard itemData={product} />
          <GoBackButton />
        </>
      )}
    </PageContents>
  )
}

export default ProductDetailsPage
