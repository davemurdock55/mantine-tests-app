import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';


export function MantineRealmCard ({ imageUrl })
{
   {
      return (
         <Card shadow="lg" padding="lg" radius="lg" style={ { width: '100%' } }>
            <Card.Section component="a" href="#top">
               <Image
                  src={ imageUrl }
                  height={ 300 }
                  alt="Norway"
               />
            </Card.Section>
         </Card>
      );
   }
}