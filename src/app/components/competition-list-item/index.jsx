import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import competitions from "../../competitions.json"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: auto;
`;

const Item = styled.div`
  background-color: #eeeee6;
  padding: 20px;
  border-radius: 20px;
`;

const CompetitionListItem = () => {
  let cardArr = [];
  cardArr = competitions;
  return (
    <div style={{textAlign:'center', padding:'60px 25px'}}>
      <h2 style={{color: 'black', fontSize: '56px', marginBottom:'15px'}}>Competitions List</h2>
      <List>
        {cardArr.map((eachCard, index)=>(
          <div key={eachCard.id} className='col-md-3' style={{marginBottom:'4%'}}>
            <Card style={{ width: '1fr', height:'auto', border:'1px solid black', textAlign:'center', borderRadius:'15px', padding:'15px'}}>
              <Card.Img style={{height:'180px'}} variant="top" src={eachCard.image} />
              <Card.Body>
                  <Card.Title>{eachCard.name}</Card.Title>
                  <Card.Text>{eachCard.text}</Card.Text>
                  <Link to={`/subcategory/${eachCard.id}`} style={{textDecoration:'none', color:'#1a1a1a'}}><Button variant="primary" style={{width:'75%', border: '1px solid #dbdbdb', background:'#c6c6c6', padding:'10px 15px', borderRadius:'15px'}}>Перейти</Button></Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </List>
    </div>
  );
};

export default CompetitionListItem;

// const [menuProduct, setMenuProduct] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("../../competitions.json");
//         if (!response.ok) {
//           throw new Error('Failed to fetch competitions');
//         }
//         const data = await response.json();
//         setMenuProduct(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);


// {menuProduct.map((competition) => (
//   <Item key={competition.id}>
//     <Link to={`/competition/${competition.id}`} />
//     <img src={competition.image} alt="image" />
//     <h2>{competition.name}</h2>
//     <button className="addCart">Add to cart</button>
//   </Item>
// ))}