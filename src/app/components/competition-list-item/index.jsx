import React from 'react';
import { List } from '@mui/material';

const CompetitionListItem = () => {
  return (
    <div style={{ padding: '25px 0' }}>
      {[]?.map((category) => (
        <div key={category.id} style={{ width: '100%', textAlign: 'center' }}>
          <h1>{category.name}</h1>
          <List>
            {/*{[].map((eachTeam) => (*/}
            {/*  <CardItem key={eachTeam.id}>*/}
            {/*    <CardImg variant="top" src={eachTeam.photo} />*/}
            {/*    <CardBody>*/}
            {/*      <h2>{eachTeam.name}</h2>*/}
            {/*      <Link*/}
            {/*        to={`/subcategory/${eachTeam.id}`}*/}
            {/*        style={{*/}
            {/*          textDecoration: 'none',*/}
            {/*          color: '#1a1a1a',*/}
            {/*          width: '80%',*/}
            {/*          transition: 'none'*/}
            {/*        }}>*/}
            {/*        <Button*/}
            {/*          variant="primary"*/}
            {/*          style={{*/}
            {/*            width: '100%',*/}
            {/*            background: '#000F38',*/}
            {/*            color: '#fff',*/}
            {/*            border: 'none',*/}
            {/*            borderRadius: '15px'*/}
            {/*          }}>*/}
            {/*          Перейти*/}
            {/*        </Button>*/}
            {/*      </Link>*/}
            {/*    </CardBody>*/}
            {/*  </CardItem>*/}
            {/*))}*/}
          </List>
        </div>
      ))}
    </div>
    // <div style={{ padding: '25px 0' }}>
    //   <List>
    //     {categoriesList?.map((category) => (
    //       <CategoryItem key={category.id}>
    //         <CategoryImg variant="top" src={category.photo} />
    //         <CategoryBody>
    //           <h2>{category.name}</h2>
    //         </CategoryBody>
    //       </CategoryItem>
    //     ))}
    //   </List>
    // </div>
  );
};

export default CompetitionListItem;
