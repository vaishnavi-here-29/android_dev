import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Timeline from 'react-native-timeline-flatlist';

// StarRating Component
const StarRating: React.FC<{ rating?: number, onRatingChange?: (rating: number) => void }> = ({ rating = 0, onRatingChange }) => {
  const [currentRating, setCurrentRating] = useState(rating);

  const handleStarPress = (rating: number) => {
    setCurrentRating(rating);
    if (onRatingChange) {
      onRatingChange(rating);
    }
  };

  return (
    <View style={styles.starContainer}>
      {Array.from({ length: 5 }, (_, index) => (
        <TouchableOpacity key={index} onPress={() => handleStarPress(index + 1)}>
          <Icon
            name={index < currentRating ? 'star' : 'star-o'}
            size={30}
            color="#FFD700"
            style={styles.star}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

// PriceDetailsCard Component
const PriceDetailsCard: React.FC = () => {
  return (
    <View style={styles.priceCard}>
      <Text style={styles.title}>Price details</Text>
      <View style={styles.priceRow}>
        <Text style={styles.textRight}> total MRP</Text>
        <View style={styles.textLeft}>
          <Icon name="rupee" size={16} color="black" />
          <Text style={styles.amount}>1,999</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.textRight}>Discount on MRP</Text>
        <View style={styles.textLeft}>
          <Icon name="rupee" size={16} color="black" />
          <Text style={styles.amount}>-1,400</Text>
        </View>
      </View>
      <View style={styles.priceRow}>
        <Text style={styles.textRight}>Shipping Fee</Text>
        <View style={styles.textLeft}>
          <Icon name="rupee" size={16} color="black" />
          <Text style={styles.amount}>50</Text>
        </View>
      </View>
      <View style={styles.separator} />
      <View style={styles.priceRow}>
        <Text style={styles.textRight}>Total Amount</Text>
        <View style={styles.textLeft}>
          <Icon name="rupee" size={16} color="black" />
          <Text style={styles.amount}>579</Text>
        </View>
      </View>
    </View>
  );
};

// OrderDetailsCard Component
const OrderDetailsCard: React.FC = () => {
  return (
    <View style={styles.orderDetails}>
      <View style={styles.row}>
        <Icon name="arrow-left" size={20} color="#000" style={styles.icon} />
        <Text style={styles.text}>Order Details</Text>
      </View>
      <View style={styles.row}>
        <Icon name="info-circle" size={20} color="#000" style={styles.icon} />
        <Text style={styles.text}>Order ID: 15872DF45</Text>
      </View>

      <View style={styles.card}>
        <Image
        source={require('../assests/img/jacket.png')}
        style={styles.image}
        />
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>Jacket</Text>
          <Text style={styles.cardDescription}>
            Ellipse Fashion Women’s Winter{'\n'}
            Size: XL
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>Group Buy Status</Text>
        <Icon name="arrow-up" size={20} color="#000" style={styles.icon} />
      </View>
    </View>
  );
};

// OrderDetailsCard2 Component
const OrderDetailsCard2: React.FC = () => {
  return (
    <View style={styles.orderDetails}>
      <View style={styles.row}>
        <Text style={styles.text}>Group By Shipping Status</Text>
        <Icon name="arrow-up" size={20} color="#000" style={styles.icon} />
      </View>
    </View>
  );
};

// New component for the card with buttons
const ActionButtonsCard: React.FC = () => {
  return (
    <View style={styles.actionButtonsCard}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Return</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Need Help</Text>
      </TouchableOpacity>
    </View>
  );
};

//component for the review section
const WriteReviewCard: React.FC = () => {
  return (
    <View style={styles.reviewCard}>
      <Image
        source={require('../assests/img/review.png')}
        style={styles.reviewImage}
      />
      <Text style={styles.reviewText}>Write a review</Text>
      <Icon name="arrow-right" size={20} color="#000" style={styles.icon} />
    </View>
  );
};
//component for the download invoice section
const DownloadInvoiceCard: React.FC = () => {
  return (
    <View style={styles.reviewCard}>
      <Image
        source={require('../assests/img/download.png')}
        style={styles.reviewImage}
      />
      <Text style={styles.reviewText}>Download invoice</Text>
      <Icon name="arrow-right" size={20} color="#000" style={styles.icon} />
    </View>
  );
};
//component for phone number section
const PhonenumberCard: React.FC = () => {
  return (
    <View style={styles.reviewCard}>
      <Image
        source={require('../assests/img/phone_number.png')}
        style={styles.reviewImage}
      />
      <Text style={styles.reviewText}>Kayal vizhi,<Text style={styles.bold}>6382860787</Text> </Text>
      <Icon name="arrow-right" size={20} color="#000" style={styles.icon} />
    </View>
  );
};
//component for address
const Address: React.FC = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assests/img/home.png')}
        style={styles.image}
      />
      <View style={styles.cardText}>
        <Text style={styles.cardTitle}>Delivery at <Text style={styles.bold}>Home</Text></Text>
        <Text style={styles.cardDescription}>
          2/5q 313, Srr nagar, {'\n'}
          Ramayanpatti, Tirunelveli
        </Text>
      </View>
    </View>
  )
}
//upi card
const Upicard: React.FC=()=>{
  return(
    <View style={styles.cardText}>
      
        <Text style={styles.cardDescription}>
          UPI:579.0
        </Text>
      </View>

  )
}
//soldcard
const Soldcard: React.FC=()=>{
  return(
    <View style={styles.cardText}>
      
        <Text style={styles.cardDescription}>
          sold by:Open Fashion
        </Text>
      </View>

  )
}

// Main OrderDetails Component
const OrderDetails: React.FC = () => {
  const timelineData = [
    { title: 'Group Buy Order Placed', description: '04:30 PM, 01 Jan 2023', lineColor: '#009688', icon: require('../AwesomeProject/assests/greentick.png') },
    { title: 'Group Filled', description: '04:30 PM, 02 Jan 2023', icon: require('../AwesomeProject/assests/img/greentick.png') },
    { title: 'Order Sent to Seller for Confirmation', description: '02 Jan 2023', icon: require('../AwesomeProject/assests/img/greentick.png') },
    { title: 'Order Confirmed by Seller', description: '04:30 PM, 02 Jan 2023', lineColor: '#009688', icon: require('../AwesomeProject/assests/img/greentick.png') },
  ];

  const timelineData2 = [
    { title: 'Shipped', description: '06 Jan 2023', lineColor: '#009688', icon: require('../AwesomeProject/assests/img/greentick.png') },
    { title: 'Out For Delivery', description: 'Delivery By 12 Jan 2023, 08:30 PM', icon: require('../AwesomeProject/assests/img/greentick.png') },
    { title: 'Delivered', description: 'Delivered on 12 Jan 2023, 10:35 AM', lineColor: '#009688', icon: require('../AwesomeProject/assests/img/greentick.png') },
  ];

  const handleRatingChange = (rating: number) => {
    console.log('New Rating: ', rating);
  };

  return (
    <View style={styles.container}>
      {/* Render OrderDetailsCard */}
      <OrderDetailsCard />

      {/* First Timeline Section */}
      <Timeline
        data={timelineData}
      />

      {/* Group Buy Shipping Status */}
      <OrderDetailsCard2 />

      {/* Second Timeline Section */}
      <Timeline
        data={timelineData2}
      />

      {/* Render StarRating */}
      <Text style={styles.title}>Rate this product:</Text>
      <StarRating rating={3} onRatingChange={handleRatingChange} />

      {/* Render ActionButtonsCard */}
      <ActionButtonsCard />

      {/* Render WriteReviewCard */}
      <WriteReviewCard />
      
      {/* Render DownloadInvoiceCard */}
      <DownloadInvoiceCard />

      {/* Render Address */}
      <Address />

      {/* Render WriteReviewCard */}
      <WriteReviewCard />
      
      {/* Render PhonenumberCard */}
      <PhonenumberCard />

      {/* Render PriceDetailsCard */}
      <PriceDetailsCard />

      {/* Render upicard*/}
      <Upicard/>

      {/*Render Soldcard*/}
      <Soldcard/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderDetails: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
  bold: {
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardText: {
    flex: 1,
    marginLeft: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  starContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  star: {
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  actionButtonsCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 16,
  },
  button: {
    flex: 1,
    padding: 12,
    marginHorizontal: 8,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  reviewCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginTop: 16,
  },
  reviewImage: {
    width: 24,
    height: 24,
    flexShrink: 0,
    marginRight: 8,
  },
  reviewText: {
    fontSize: 18,
    color: '#000000',
    marginRight: 8,
  },
  priceCard: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  textRight: {
    fontSize: 16,
    color: '#666',
  },
  textLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 16,
    color: '#000',
    marginLeft: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 8,
  },
});

export default OrderDetails;
