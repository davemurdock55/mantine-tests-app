import { Card, Col, Text } from "@nextui-org/react";
import { Rating } from "@mantine/core";
import { useRouter } from "next/router";

export const RealmCard = ({ realmId, title, imageUrl }) =>
{
  const router = useRouter();

  const routeToRealmPage = () =>
  {
    router.push(`/${title}/${realmId}`)
  };

  return (
    <Card isPressable isHoverable onPress={ routeToRealmPage }>
    <Card.Header css={ { position: "absolute", zIndex: 1, top: 5 } }>
      <Col>
        <Text
          size={ 12 }
          weight="bold"
          transform="uppercase"
          color="#ffffffAA"
          style={ { textShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)" } }
        >
          Realm
        </Text>
        {/* <Rating defaultValue={ 3 } /> */ }
        <Text
          h3
          color="white"
          style={ { textShadow: "0px 0px 12px rgba(0, 0, 0, 0.5)" } }
        >
          { title }
        </Text>
      </Col>
      {/* <Col span={2} float="right">
          <Rating defaultValue={3} />
        </Col> */}
    </Card.Header>
    <Card.Image
      src={ imageUrl }
      objectFit="cover"
      width="100%"
      // height="100%"
      height={ 340 }
      alt="Card image background"
    />
  </Card>
  );
};
