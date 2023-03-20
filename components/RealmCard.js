import { Card, Col, Text } from "@nextui-org/react";

export const RealmCard = ({ title, imageUrl }) => (
   <Card isPressable isHoverable >
      <Card.Header css={ { position: "absolute", zIndex: 1, top: 5 } }>
         <Col>
            <Text size={ 12 } weight="bold" transform="uppercase" color="#ffffffAA">
               Realm
            </Text>
            <Text h4 color="white">
               { title }
            </Text>
         </Col>
      </Card.Header>
      <Card.Image
         src={ imageUrl }
         objectFit="cover"
         width="100%"
         height={ 340 }
         alt="Card image background"
      />
   </Card>
);
