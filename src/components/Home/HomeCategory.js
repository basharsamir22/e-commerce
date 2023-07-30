import React from 'react'
import { Container,Row} from 'react-bootstrap'
import SubTitle from '../Utility/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import cat2 from "../../images/cat2.png";
import cat3 from "../../images/labtop.png";
import cat4 from "../../images/mobile.png";
import cat5 from "../../images/sale.png";

const HomeCategory = () => {
    return (
        <Container>
            <SubTitle title="التصنيفات" btntitle="المزيد" pathText="/allCategory"/>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="أجهزة منزلية" img={cat2} background= "#F4DBA4"/>
                <CategoryCard title="أجهزة منزلية" img={cat3} background= "RED"/>
                <CategoryCard title="أجهزة منزلية" img={cat4} background= "GREEN"/>
                <CategoryCard title="أجهزة منزلية" img={cat2} background= "BLUE"/>
                <CategoryCard title="أجهزة منزلية" img={cat5} background= "BLACK"/>
                <CategoryCard title="أجهزة منزلية" img={cat2} background= "#F4DBA4"/>
            </Row>
        </Container>
    )
}

export default HomeCategory
