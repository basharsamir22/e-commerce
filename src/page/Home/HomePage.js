import React from 'react'
import Slider from '../../components/Home/Slider'
import HomeCategory from '../../components/Home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/Home/DiscountSection'
import BrandFeatured from '../../components/Brand/BrandFeatured'
const HomePage = () => {
return (
    <div>
    <Slider/>
    <HomeCategory/>
    <CardProductsContainer title="الاكثر مبيعا" btntitle="المزيد"/>
    <DiscountSection/>
    <CardProductsContainer title="احدث الازياء" btntitle="المزيد"/>
    <BrandFeatured title="أشهر الماركات " btntitle="المزيد" pathText="/allbrand"/>
    </div>
)
}

export default HomePage
