import React from 'react';
import { Card, CardHeader, CardBody, CardFooter,Image,Stack ,Text,Divider,ButtonGroup ,Button,Heading} from '@chakra-ui/react';
// const product = {
//     "brand": "classics",
//     "collection": "classic nylon",
//     "color": [
//       "grey"
//     ],
//     "discount": 64,
//     "gender": "women",
//     "imgUrl": [
//       "https://content.shop4reebok.com/static/Product-EW5165/adidas_EW5165_1.jpg"
//     ],
//     "price": 3599,
//     "productType": "shoes",
//     "size": [7, 8, 9],
//     "sports": "training",
//     "technology": "astroide",
//     "title": "WOMEN'S REEBOK RUNNING SPEED-O-NICK SHOES"
//   }

const ProductCard = ({ product }) => {
  return (
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  );
};

export default ProductCard;
